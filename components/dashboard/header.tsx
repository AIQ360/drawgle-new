"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import type { User } from "@/types"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"
import { toast } from "sonner"
import { SITE_NAME } from "@/lib/constants"

interface HeaderProps {
  user: User | null
}

export function Header({ user }: HeaderProps) {
  const router = useRouter()
  const supabase = createClient()
  const [credits, setCredits] = useState<number>(user?.credits || 0)
  const [isSigningOut, setIsSigningOut] = useState(false)

  useEffect(() => {
    if (user) {
      setCredits(user.credits)
    }
  }, [user])

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await supabase.auth.signOut()
      toast.success("Signed out successfully")
      router.push("/")
      router.refresh()
    } catch (error: any) {
      console.error("Sign out error:", error)
      toast.error("Error signing out", {
        description: error.message || "An error occurred while signing out",
      })
    } finally {
      setIsSigningOut(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-6 w-6" />
          <span className="text-xl font-bold">{SITE_NAME}</span>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium text-primary">
            <Icons.credit className="mr-1 h-4 w-4 text-yellow-500" />
            <span>{credits}</span>
            <span>Credits</span>
          </div>
          <Link href="/dashboard/subscription" passHref>
            <Button variant="outline" className="hidden md:flex">
              Upgrade
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.png" alt={user?.email || "User"} />
                  <AvatarFallback>{user?.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <Link href="/dashboard" className=" text-primary">
                  Dashboard
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="md:hidden">
                <Link href="/dashboard/subscription">Upgrade</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/gallery">My Gallery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/books">My Books</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/gallery">Public Gallery</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} disabled={isSigningOut}>
                {isSigningOut ? (
                  <>
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Signing Out...
                  </>
                ) : (
                  "Sign Out"
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
