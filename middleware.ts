import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          request.cookies.set(name, value)
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set(name, value, options)
        },
        remove(name: string, options: any) {
          request.cookies.set(name, "")
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set(name, "", { ...options, maxAge: 0 })
        },
      },
    },
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Special case for sign-up success page - allow access even without session
  if (request.nextUrl.pathname === "/sign-up/success") {
    return response
  }

  // --- ENHANCEMENT: Clear stale Supabase cookies if present but session is missing ---
  const hasSupabaseCookies =
    request.cookies.has("sb-access-token") ||
    request.cookies.has("sb-refresh-token") ||
    request.cookies.has("sb-session")

  if (!session && hasSupabaseCookies && request.nextUrl.pathname.startsWith("/dashboard")) {
    // Clear all Supabase cookies
    response.cookies.set("sb-access-token", "", { maxAge: 0 })
    response.cookies.set("sb-refresh-token", "", { maxAge: 0 })
    response.cookies.set("sb-session", "", { maxAge: 0 })
    const redirectUrl = new URL("/sign-in", request.url)
    return NextResponse.redirect(redirectUrl)
  }

  // Auth condition: protect dashboard routes
  if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
    const redirectUrl = new URL("/sign-in", request.url)
    return NextResponse.redirect(redirectUrl)
  }

  // Redirect to dashboard if user is signed in and trying to access auth pages
  if (session && (request.nextUrl.pathname.startsWith("/sign-in") || request.nextUrl.pathname.startsWith("/sign-up"))) {
    const redirectUrl = new URL("/dashboard", request.url)
    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: [
    // Only run middleware on protected dashboard routes
    "/dashboard/:path*",
    // Add other protected routes here if needed
  ],
}
