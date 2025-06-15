"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const sampleImages = [
    { src: "/landing/hero-1.png", alt: "Unicorn coloring page" },
    { src: "/landing/hero-2.png", alt: "Dragon coloring page" },
    { src: "/landing/hero-3.png", alt: "Castle coloring page" },
  ]

  const avatars = [
    { src: "/placeholder.svg?height=40&width=40", alt: "User 1" },
    { src: "/placeholder.svg?height=40&width=40", alt: "User 2" },
    { src: "/placeholder.svg?height=40&width=40", alt: "User 3" },
    { src: "/placeholder.svg?height=40&width=40", alt: "User 4" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sampleImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [sampleImages.length])

  const getBackgroundImage = (offset: number) => {
    const index = (currentImageIndex + offset) % sampleImages.length
    return sampleImages[index]
  }

  return (
    <section className="relative min-h-screen pt-12 flex items-center justify-center overflow-hidden bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 sm:py-2 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left order-1">
            {/* Main Heading */}
            <div className="space-y-6 mt-12">
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold  text-gray-900">
                Create Custom
                <br />
                <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                  Coloring Pages
                </span>
                <br />
                With AI
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transform any idea into beautiful coloring pages in seconds. Perfect for parents, teachers, and creative
                minds.
              </p>
            </div>

            {/* Simple Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-xs sm:text-sm font-medium text-gray-700">AI-Powered</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-xs sm:text-sm font-medium text-gray-700">Instant Results</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-xs sm:text-sm font-medium text-gray-700">Easy Download</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/create">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Create Your First Page
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-300 hover:border-pastel-pink px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300"
                >
                  View Gallery
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicator with Avatars */}
            <div className="pt-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-2">
                  {avatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm"
                    >
                      <img
                        src={avatar.src || "/placeholder.svg"}
                        alt={avatar.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500">Join thousands of happy creators</p>
              </div>
            </div>
          </div>

          {/* Right Column - Fan Layout Image Showcase */}
          <div className="relative flex justify-center items-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] w-full order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              {/* Mobile: Stack images vertically, Desktop: Fan layout */}
              <div className="block sm:hidden">
                {/* Mobile - Single centered image */}
                <div className="relative mx-auto w-64 h-80 bg-white border-2 border-gray-300 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={sampleImages[currentImageIndex].src || "/placeholder.svg"}
                    alt={sampleImages[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-all duration-[2000ms] ease-in-out rounded-2xl"
                  />
                </div>
              </div>

              {/* Desktop - Fan layout */}
              <div className="hidden sm:block">
                {/* Left Image - Mostly hidden behind center */}
                <div className="absolute left-6 sm:left-8 md:left-12 top-1/2 border-2 border-gray-300 -translate-y-1/2 w-40 sm:w-48 md:w-56 h-[300px] sm:h-[400px] md:h-[500px] bg-white rounded-2xl shadow-lg transform -rotate-12 origin-bottom-right z-5 overflow-hidden">
                  <img
                    src={getBackgroundImage(1).src || "/placeholder.svg"}
                    alt={getBackgroundImage(1).alt}
                    className="w-full h-full object-cover transition-all duration-[2000ms] ease-in-out rounded-2xl"
                  />
                </div>

                {/* Right Image - Mostly hidden behind center */}
                <div className="absolute right-6 sm:right-8 md:right-12 top-1/2 border-2 border-gray-300 -translate-y-1/2 w-40 sm:w-48 md:w-56 h-[300px] sm:h-[400px] md:h-[500px] bg-white rounded-2xl shadow-lg transform rotate-12 origin-bottom-left z-5 overflow-hidden">
                  <img
                    src={getBackgroundImage(2).src || "/placeholder.svg"}
                    alt={getBackgroundImage(2).alt}
                    className="w-full h-full object-cover transition-all duration-[2000ms] ease-in-out rounded-2xl"
                  />
                </div>

                {/* Center Image - Main focus, straight */}
                <div className="relative mx-auto w-48 sm:w-56 md:w-64 lg:w-72 h-[320px] border-2 border-gray-300 sm:h-[420px] md:h-[480px] bg-white rounded-2xl shadow-xl z-30 overflow-hidden">
                  <img
                    src={sampleImages[currentImageIndex].src || "/placeholder.svg"}
                    alt={sampleImages[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-all duration-[2000ms] ease-in-out rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className=" mb-12  text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pastel-pink/10 to-orange-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-gray-700 font-medium border border-pastel-pink/20">
            <span className="text-xs sm:text-sm">Start with 5 free coloring pages - No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  )
}
