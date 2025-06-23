"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

export const AppInitializer = () => {
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      const supabase = createClient()
      try {
        const { data, error } = await supabase.auth.getSession()
        if (!data.session || error) {
          await supabase.auth.signOut()
          router.replace("/sign-in")
        }
      } catch (err) {
        // Fallback: sign out and redirect
        await supabase.auth.signOut()
        router.replace("/sign-in")
      }
    }
    checkSession()
  }, [router])

  return null
}
