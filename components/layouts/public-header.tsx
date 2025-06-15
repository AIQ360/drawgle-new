"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { SITE_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { createClient } from "@/lib/supabase/client"

export default function PublicHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession()
      setIsLoggedIn(!!data.session)
    }

    checkAuth()
  }, [supabase])

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/gallery",
      label: "Gallery",
      active: pathname === "/gallery",
    },
    {
      href: "/#features",
      label: "Features",
      active: pathname === "/#features",
    },
    {
      href: "/#pricing",
      label: "Pricing",
      active: pathname === "/#pricing",
    },
  ]

  return (
    <>
    

      <header className="fixed top-0 left-0 right-0 z-50 p-3">
        <div className="container mx-auto">
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200/30 rounded-2xl shadow-sm px-6 py-0 sm:py-2">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <Icons.logo className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {SITE_NAME}
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-200 hover:text-pastel-pink relative",
                      route.active ? "text-pastel-pink" : "text-gray-600 hover:text-gray-900",
                    )}
                  >
                    {route.label}
                    {route.active && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full"></div>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex items-center gap-3">
                {isLoggedIn ? (
                  <Link href="/dashboard" passHref>
                    <Button className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white font-medium px-6 rounded-xl transition-all duration-200">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/sign-in" passHref>
                      <Button
                        variant="ghost"
                        className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 font-medium px-4 rounded-xl transition-all duration-200"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/sign-up" passHref>
                      <Button className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white font-medium px-6 rounded-xl transition-all duration-200">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-16 w-16 rounded-xl hover:bg-gray-100/50 transition-colors duration-200"
                  >
                    <Icons.menu className="h-5 w-5 text-gray-600" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] bg-white/95 backdrop-blur-md border-l border-gray-200/50"
                >
                  <div className="flex flex-col gap-8 py-6">
                    {/* Mobile Logo */}
                    <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
                      <div className="w-8 h-8 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-lg flex items-center justify-center">
                        <Icons.logo className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {SITE_NAME}
                      </span>
                    </Link>

                    {/* Mobile Navigation */}
                    <nav className="flex flex-col gap-4">
                      {routes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          className={cn(
                            "text-base font-medium transition-colors duration-200 py-2 px-3 rounded-xl",
                            route.active
                              ? "text-pastel-pink bg-pastel-pink/10"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50",
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {route.label}
                        </Link>
                      ))}
                    </nav>

                    {/* Mobile CTA Buttons */}
                    <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200/50">
                      {isLoggedIn ? (
                        <Link href="/dashboard" passHref onClick={() => setIsMenuOpen(false)}>
                          <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white font-medium rounded-xl">
                            Dashboard
                          </Button>
                        </Link>
                      ) : (
                        <>
                          <Link href="/sign-in" passHref onClick={() => setIsMenuOpen(false)}>
                            <Button
                              variant="outline"
                              className="w-full border-gray-200 hover:bg-gray-50 font-medium rounded-xl"
                            >
                              Sign In
                            </Button>
                          </Link>
                          <Link href="/sign-up" passHref onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white font-medium rounded-xl">
                              Get Started
                            </Button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
