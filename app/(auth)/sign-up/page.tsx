"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AuthForm } from "@/components/auth/auth-form"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import PublicHeader from "@/components/layouts/public-header"
import PublicFooter from "@/components/layouts/public-footer"
import Image from "next/image"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    // Check if user is already signed in
    const checkSession = async () => {
      try {
        const { data } = await supabase.auth.getSession()
        if (data.session) {
          // If user is already signed in, sign them out to prevent conflicts
          await supabase.auth.signOut()
        }
      } catch (error) {
        console.error("Error checking session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkSession()
  }, [supabase])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pastel-pink/5 via-white to-orange-50/20">
        <div className="animate-spin">
          <svg className="h-8 w-8 text-pastel-pink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1 py-12 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/5 via-white to-orange-50/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <section className="w-full py-12 md:py-24 lg:py-32 relative z-10">
          <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            {/* Form Column - Now First on Mobile */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-2">
              <div className="w-full max-w-sm">
                <AuthForm view="sign-up" />
              </div>
            </div>

            {/* Content Column - Now Second on Mobile */}
            <div className="space-y-8 text-center lg:text-left order-1 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  Start Creating with{" "}
                  <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                    Drawgle
                  </span>
                </h1>
                <p className="max-w-xl text-base sm:text-lg text-gray-600 leading-relaxed mx-auto lg:mx-0">
                  Join thousands of families creating magical coloring pages. Sign up and start your creative journey
                  today!
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
