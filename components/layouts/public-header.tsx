"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { SITE_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { createClient } from "@/utils/supabase/client"

export default function PublicHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession()
      setIsLoggedIn(!!data.session)
    }
    checkAuth()
  }, [supabase])

  useEffect(() => {
    // Add scroll effect for enhanced floating appearance
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
        <div className="container mx-auto px-2 sm:px-4">
          <div
            className={cn(
              "relative bg-white/95 backdrop-blur-sm border border-gray-200/30 rounded-xl shadow-xs px-6 py-2 transition-all duration-300",
              scrolled && "shadow-sm bg-white/98 border-gray-200/50",
            )}
          >
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
                    <Button className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white font-medium px-6 rounded-xl transition-all duration-200 hover:shadow-lg">
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
                      <Button className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white font-medium px-6 rounded-xl transition-all duration-200 hover:shadow-lg">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4 text-gray-600" />
                ) : (
                  <div className="flex flex-col gap-1">
                    <div className="w-3.5 h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="w-3.5 h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="w-3.5 h-0.5 bg-gray-600 rounded-full"></div>
                  </div>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="px-2 py-4 space-y-2 border-t border-gray-100 mt-2">
                    {/* Mobile Navigation */}
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                          route.active
                            ? "text-pastel-pink bg-gradient-to-r from-pastel-pink/10 to-orange-400/10 border-l-4 border-pastel-pink"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{route.label}</span>
                        {route.active && (
                          <div className="w-2 h-2 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full"></div>
                        )}
                      </Link>
                    ))}

                    {/* Mobile CTA Buttons */}
                    <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-gray-100">
                      {isLoggedIn ? (
                        <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                          <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white font-medium rounded-xl py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200">
                            Dashboard
                          </Button>
                        </Link>
                      ) : (
                        <>
                          <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
                            <Button
                              variant="outline"
                              className="w-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 font-medium rounded-xl py-3 text-base transition-all duration-200 bg-transparent"
                            >
                              Sign In
                            </Button>
                          </Link>
                          <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white font-medium rounded-xl py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200">
                              Get Started
                            </Button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  )
}
