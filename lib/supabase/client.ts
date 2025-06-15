import { createBrowserClient } from "@supabase/ssr"

// Create a singleton instance
let supabaseClient: ReturnType<typeof createBrowserClient> | null = null

export const createClient = () => {
  if (!supabaseClient && typeof window !== "undefined") {
    // Only create the client once in the browser
    supabaseClient = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          persistSession: true
        },
        realtime: {
          params: {
            eventsPerSecond: 10
          }
        }
      }
    )
  }

  return (
    supabaseClient ||
    createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      auth: {
        persistSession: true
      },
      realtime: {
        params: {
          eventsPerSecond: 10
        }
      }
    })
  )
}
