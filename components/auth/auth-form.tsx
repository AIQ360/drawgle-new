"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { toast } from "sonner"
import Link from "next/link"
import { Mail } from "lucide-react"


interface AuthFormProps {
  view: "sign-in" | "sign-up"
}

export function AuthForm({ view }: AuthFormProps) {
  const router = useRouter()
  const supabase = createClient()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Add this effect to prevent automatic sign-in after sign-up
  useEffect(() => {
    if (view === "sign-up") {
      // Check if we're in the sign-up view and ensure we're not automatically signed in
      const checkAndSignOut = async () => {
        const { data } = await supabase.auth.getSession()
        if (data.session && !showConfirmation) {
          // If we have a session but haven't shown confirmation, sign out
          await supabase.auth.signOut()
        }
      }

      checkAndSignOut()
    }
  }, [view, supabase, showConfirmation])

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (view === "sign-in") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error

        toast.success("Signed in successfully", {
          description: "Welcome back!",
        })

        router.push("/dashboard")
        router.refresh()
      } else {
        // Sign-up flow
        console.log("Starting sign-up process...")

        // First, sign out any existing session to prevent conflicts
        await supabase.auth.signOut()

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        })

        console.log("Sign-up response:", { data, error })

        if (error) throw error

        // Check if confirmation is required
        if (data?.user?.identities && data.user.identities.length === 0) {
          // User already exists
          console.log("User already exists")
          toast.error("Account already exists", {
            description: "Please check your email for the confirmation link or try signing in.",
          })
          router.push("/sign-in")
          return
        }

        console.log("Sign-up successful, showing confirmation")

        // CRITICAL: Sign out immediately to prevent auto-login
        await supabase.auth.signOut()

        // Redirect to success page instead of showing confirmation in-component
        router.push("/sign-up/success")

        toast.success("Sign up successful", {
          description: "Please check your email for the confirmation link.",
        })
      }
    } catch (error: any) {
      console.error("Authentication error:", error)
      toast.error("Authentication error", {
        description: error.message || "An error occurred during authentication",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleAuth = async () => {
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) throw error
    } catch (error: any) {
      console.error("Google auth error:", error)
      toast.error("Google sign in failed", {
        description: error.message || "An error occurred during authentication",
      })
      setIsLoading(false)
    }
  }

  // If showing email confirmation message (this is now a fallback, as we redirect to success page)
  if (showConfirmation) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Check Your Email</CardTitle>
          <CardDescription className="text-center">
            We've sent a confirmation link to <strong>{email}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="flex justify-center">
            <Mail className="h-12 w-12 text-primary" />
          </div>
          <p>Please check your email and click the confirmation link to complete your registration.</p>
          <p className="text-sm text-muted-foreground">
            If you don't see the email, check your spam folder or try signing in.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => {
              // Navigate manually without router.push to avoid errors
              window.location.href = "/sign-in"
            }}
          >
            Go to Sign In
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          {view === "sign-in" ? "Welcome Back!" : "Create an Account"}
        </CardTitle>
        <CardDescription className="text-center">
          {view === "sign-in" ? "Sign in to your account to continue" : "Sign up to start creating coloring pages"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleEmailAuth} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                {view === "sign-in" ? "Signing In..." : "Signing Up..."}
              </>
            ) : view === "sign-in" ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Button variant="outline" type="button" className="w-full" onClick={handleGoogleAuth} disabled={isLoading}>
          {isLoading ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Connecting...
            </>
          ) : (
            <>
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </>
          )}
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          {view === "sign-in" ? "Don't have an account? " : "Already have an account? "}
          <Link href={view === "sign-in" ? "/sign-up" : "/sign-in"} className="text-primary hover:underline">
            {view === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
