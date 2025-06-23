"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

export const AppInitializer = () => {
  const router = useRouter()

  useEffect(() => {
    // Only run on protected routes
    if (typeof window !== "undefined") {
      const path = window.location.pathname
      if (path.startsWith("/sign-in") || path.startsWith("/sign-up")) {
        return
      }
    }
    const checkSession = async () => {
      const supabase = createClient()
      try {
        const { data, error } = await supabase.auth.getSession()
        if (!data.session || error) {
          console.log("[AppInitializer] No session or error:", error)
          await supabase.auth.signOut()
          window.location.replace("/sign-in")
          return
        }
        // Extra: try a user fetch to catch 403/token errors
        const { data: userData, error: userError } = await supabase.auth.getUser()
        if (!userData?.user || userError) {
          console.log("[AppInitializer] No user or user error:", userError)
          if (userError?.status === 403 || (userError?.message && userError.message.includes("expired"))) {
            await supabase.auth.signOut()
            window.location.replace("/sign-in")
            return
          }
        }
      } catch (err: any) {
        console.log("[AppInitializer] Exception:", err)
        if (err?.status === 403 || (err?.message && err.message.includes("expired"))) {
          await supabase.auth.signOut()
          window.location.replace("/sign-in")
          return
        }
        // Fallback: sign out and redirect
        await supabase.auth.signOut()
        window.location.replace("/sign-in")
      }
    }
    checkSession()
  }, [router])

  return null
}
