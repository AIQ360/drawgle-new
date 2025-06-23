"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SUBSCRIPTION_PLANS } from "@/lib/subscription-plans"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Clock, Calendar, Users, FileText, Layout, Layers, Palette, Star, Zap, Globe, Upload, Download, ArrowLeftRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import HeroSection from "@/components/hero-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"



export function MarketingPageClient() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR")
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)

  // Exchange rate (approximate)
  const exchangeRate = 83

  // Add this before the return statement in MarketingPageClient
  const imageMap: Record<string, string> = {
    "Unicorn": "https://rhcmqpuqozvwyrffixnx.supabase.co/storage/v1/object/public/coloring-pages/private/cae7654d-bd38-46fc-b82d-c50fa5402535-1747041104711-0-a_unicorn.png",
    "Dinosaur": "https://rhcmqpuqozvwyrffixnx.supabase.co/storage/v1/object/public/coloring-pages/private/cae7654d-bd38-46fc-b82d-c50fa5402535-1747041118433-0-a_Dinosaur.png",
    "Spaceship": "https://rhcmqpuqozvwyrffixnx.supabase.co/storage/v1/object/public/coloring-pages/private/cae7654d-bd38-46fc-b82d-c50fa5402535-1747041139347-0-a_Spaceship_outline.png",
    "Princess": "/landing/princess.jpg",
    "Dragon": "https://rhcmqpuqozvwyrffixnx.supabase.co/storage/v1/object/public/coloring-pages/private/cae7654d-bd38-46fc-b82d-c50fa5402535-1747041165271-0-a_Dragon_outline.png",
    "Robot": "https://rhcmqpuqozvwyrffixnx.supabase.co/storage/v1/object/public/coloring-pages/private/cae7654d-bd38-46fc-b82d-c50fa5402535-1747041177671-0-a_Robot_outline.png",
    "Mermaid": "https://rhcmqpuqozvwyrffixnx.supabase.co/storage/v1/object/public/coloring-pages/private/cae7654d-bd38-46fc-b82d-c50fa5402535-1747041191299-0-a_Mermaid_outline.png",
    "Superhero": "https://rhcmqpuqozvwyrffixnx.supabase.co/storage/v1/object/public/coloring-pages/private/cae7654d-bd38-46fc-b82d-c50fa5402535-1747041205122-0-a_Superhero_boy.png"
  };

  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Upload Your Image",
      description: "Upload any photo or image you want to transform into a coloring page",
      color: "from-pastel-pink to-orange-400",
    },
    {
      number: 2,
      icon: Palette,
      title: "Choose Style",
      description: "Select from various artistic styles to transform your image",
      color: "from-orange-400 to-pastel-pink",
    },
    {
      number: 3,
      icon: Download,
      title: "Download & Print",
      description: "Get your coloring page instantly and print it for hours of fun",
      color: "from-pastel-pink to-orange-300",
    },
  ]
  // Carousel state and logic
  const carouselImages = ["Princess", "Dragon", "Robot", "Mermaid", "Superhero", "Unicorn", "Dinosaur", "Spaceship"];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const getImageClasses = (index: number) => {
    const n = carouselImages.length;
    const current = activeImageIndex;

    let diff = index - current;
    // Handle circularity for the "closest" left/right images
    if (diff === n - 1) diff = -1; // e.g., if active is 0 and current is last image
    if (diff === -(n - 1)) diff = 1; // e.g., if active is last and current is 0

    let classes = 'absolute transition-all duration-700 ease-in-out object-cover rounded-xl shadow-lg aspect-[3/4]';

    if (diff === 0) { // Center image
      classes += ' w-[250px] h-auto z-20 opacity-100';
      classes += ' left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 rotate-0';
    } else if (diff === 1) { // Immediate right image
      classes += ' w-[180px] h-auto z-10 opacity-70';
      classes += ' left-[calc(50%+160px)] -translate-x-1/2 -translate-y-1/2 top-1/2 rotate-12'; 
    } else if (diff === -1) { // Immediate left image
      classes += ' w-[180px] h-auto z-10 opacity-70';
      classes += ' left-[calc(50%-160px)] -translate-x-1/2 -translate-y-1/2 top-1/2 -rotate-12'; 
    } else { // Hidden images (far left or far right)
      classes += ' w-0 h-0 opacity-0 pointer-events-none'; 
    }
    return classes;
  };

  // Add slider functionality
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true)
      updateSliderPosition(e)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      updateSliderPosition(e)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleTouchStart = (e: TouchEvent) => {
      setIsDragging(true)
      updateSliderPosition(e.touches[0])
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      updateSliderPosition(e.touches[0])
    }

    const updateSliderPosition = (e: MouseEvent | Touch) => {
      if (!slider) return
      const rect = slider.getBoundingClientRect()
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      const percentage = (x / rect.width) * 100
      setSliderPosition(percentage)
    }

    slider.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    slider.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleMouseUp)

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      slider.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <>
 <HeroSection />
      {/* How It Works Section - Redesigned */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            From Idea to Coloring Page in 30 Seconds
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            No design skills needed. No waiting. Just instant, custom coloring pages for endless creativity.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={step.number} className="relative group">
                  {/* Connecting Line - Hidden on mobile, visible on desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-full w-12 h-0.5 bg-gradient-to-r from-pastel-pink/30 to-transparent z-0"></div>
                  )}

                  {/* Step Card */}
                  <div className="relative flex flex-col items-center text-center space-y-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group-hover:-translate-y-0.5">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg shadow-lg`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 group-hover:bg-gray-100 transition-colors duration-200">
                        <IconComponent className="h-10 w-10 text-gray-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pastel-pink/5 to-orange-50 rounded-full px-6 py-3 text-gray-600 font-medium border border-pastel-pink/10">
            <span>Start creating amazing coloring pages right now - completely free!</span>
          </div>
        </div>
      </div>
    </section>
      {/* Creation Hub */}
      <section id="features"  className="w-full py-24 md:py-32 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="relative w-full max-w-[350px] md:max-w-[500px] mx-auto">
              {/* Main showcase image */}
              <div className="relative rounded-2xl overflow-hidden shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={imageMap["Princess"] || "/placeholder.svg"}
                    alt="AI Coloring Page Creation"
                    className="w-full max-w-full h-auto object-contain rounded-xl shadow"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <Badge variant="outline" className="bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 text-pastel-purple border-0 px-3 py-1 mb-4">
                  Create Anything
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Turn Your Ideas Into
                  <span className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-dark bg-clip-text text-transparent block mt-2">Beautiful Coloring Pages</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Describe anything you can imagine, and watch as our AI transforms it into a perfect coloring page in seconds.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <h3 className="font-semibold text-lg">Lightning Fast</h3>
                  <p className="text-gray-600">Generate pages in seconds, not minutes</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center">
                    <Layers className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <h3 className="font-semibold text-lg">Multiple Styles</h3>
                  <p className="text-gray-600">Choose from various artistic styles</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <h3 className="font-semibold text-lg">Create Collections</h3>
                  <p className="text-gray-600">Build themed coloring books</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <h3 className="font-semibold text-lg">Print Ready</h3>
                  <p className="text-gray-600">Download and print instantly</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link href="/sign-up" passHref>
                  <Button size="lg" className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-lg text-lg px-8 text-white hover:from-pastel-pink/90 hover:to-pastel-purple/90">
                    Start Creating Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Your Own Coloring Books */}
      <section className="w-full py-24 md:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <Badge variant="outline" className="bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 text-pastel-purple border-0 px-3 py-1 mb-4">
                  New Feature
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Create Your Own
                  <span className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 bg-clip-text text-transparent block mt-2">Coloring Books</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your favorite coloring pages into beautiful, printable PDF books. Perfect for gifts, classroom activities, or personal collections.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layout className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Page Arrangement</h3>
                    <p className="text-gray-600">Drag and drop to organize your pages in any order. Create themed collections or mix and match your favorites.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Generated Covers</h3>
                    <p className="text-gray-600">Create stunning book covers with our AI. Just describe your theme, and we'll generate a beautiful cover image.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Print-Ready PDFs</h3>
                    <p className="text-gray-600">Download your book as a high-quality PDF, ready to print at home or at a print shop. Perfect for gifts and keepsakes.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link href="/sign-up" passHref>
                  <Button size="lg" className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-lg text-lg px-8 text-white hover:from-pastel-pink/90 hover:to-pastel-purple/90">
                    Create Your First Book
                    <BookOpen className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-[350px] md:max-w-[500px] mx-auto">
              {/* Main book preview */}
              <div className="relative rounded-2xl overflow-hidden shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src="/landing/pdf-cover-book.png"
                    alt="Coloring Book Preview"
                    className="w-full max-w-full h-auto object-contain rounded-xl shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image to Coloring Page Feature */}
      <section className="w-full py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="relative w-full max-w-[350px] md:max-w-[500px] mx-auto">
              {/* Image Comparison Slider */}
              <div
                ref={sliderRef}
                className="relative rounded-2xl overflow-hidden shadow cursor-ew-resize select-none w-full max-w-full"
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100">
                  {/* Base Image */}
                  <div className="absolute inset-0">
                    <img
                      src="/landing/image-to-coloring2.png"
                      alt="Original Photo"
                      className="w-full max-w-full h-auto object-contain select-none rounded-xl shadow"
                      draggable="false"
                    />
                  </div>
                  {/* Slider Image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                  >
                    <img
                      src="/landing/image-to-coloring.png"
                      alt="Coloring Page"
                      className="w-full max-w-full h-auto object-contain select-none rounded-xl shadow"
                      draggable="false"
                    />
                  </div>
                  {/* Slider Handle */}
                  <div
                    className="absolute inset-y-0 w-1 bg-white"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Original
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Coloring Page
                  </div>
                </div>
              </div>

              {/* Slider Instructions */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Drag the slider to compare before and after
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <Badge variant="outline" className="bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 text-pastel-purple border-0 px-3 py-1 mb-4">
                  Photo to Coloring Page
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Turn Memories Into
                  <span className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 bg-clip-text text-transparent block mt-2">Creative Activities</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform any photo into a beautiful coloring page that kids will actually want to color. Family photos,
                  classroom pictures, vacation memories—all become personalized activities in seconds.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.image className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Create Meaningful Keepsakes</h3>
                    <p className="text-gray-600">Transform family photos into personalized coloring pages that become treasured memories.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Perfect for Classrooms</h3>
                    <p className="text-gray-600">Turn class photos into end-of-year gifts that students will cherish for years to come.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-pastel-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Special Events</h3>
                    <p className="text-gray-600">Create unique activities for birthday parties, family reunions, and special celebrations.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link href="/sign-up" passHref>
                  <Button size="lg" className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-lg text-lg px-8 text-white hover:from-pastel-pink/90 hover:to-pastel-purple/90">
                    Transform Your Photos Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section - Redesigned */}
      <section className="w-full py-12 md:py-24 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 px-3 py-1 text-sm">
              User Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join thousands of happy users who have transformed their photos into beautiful coloring pages
            </p>
          </div>

          <div className="relative w-full max-w-[1200px] mx-auto py-12">
            {/* Testimonials Container */}
            <div className="flex overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory">

              {/* Testimonial 1 */}
              <div className="flex-shrink-0 w-80 snap-center mx-4 relative flex flex-col space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                      alt="Sarah"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Art Teacher</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "This tool has revolutionized my art classes. My students love turning their photos into coloring pages!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-80 snap-center mx-4 relative flex flex-col space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                      alt="Michael"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael Chen</h3>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Perfect for keeping my kids entertained. They love coloring their own photos!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex-shrink-0 w-80 snap-center mx-4 relative flex flex-col space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                      alt="Emma"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Emma Roberts</h3>
                    <p className="text-sm text-gray-500">Homeschooler</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "An incredible resource for homeschooling! My children are more engaged with personalized activities."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="flex-shrink-0 w-80 snap-center mx-4 relative flex flex-col space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
                      alt="Olivia"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Olivia Davis</h3>
                    <p className="text-sm text-gray-500">Grandparent</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "My grandkids absolutely adore the coloring pages I create from our family photos. So much fun!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="flex-shrink-0 w-80 snap-center mx-4 relative flex flex-col space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
                      alt="Sophia"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sophia Miller</h3>
                    <p className="text-sm text-gray-500">Activity Coordinator</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Fantastic for our community events. The custom coloring pages are always a hit with the kids."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Pseudo-elements for fade effect */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent md:w-32"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent md:w-32"></div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Modern Redesign */}
      <section className="w-full py-24 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Section header with minimal styling */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="inline-block h-1 w-12 bg-primary mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How Drawgle transforms creative experiences</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our platform adapts to different needs, providing tailored solutions for various creative scenarios.
            </p>
          </div>
          
          {/* Modern asymmetrical layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">
            {/* Left column - For Parents */}
            <div className="lg:col-span-5  lg:top-24 self-start">
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-pastel-pink to-pastel-purple"></div>
                
                <div className="pl-6">
                  <div className="text-sm uppercase tracking-wider text-primary font-medium mb-4">For Parents</div>
                  <h3 className="text-3xl font-bold mb-6">Spark joy and creativity at home</h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Create custom coloring pages that engage your children's imagination and keep them entertained for hours.
                  </p>
                  
                  <Link href="/sign-up" passHref>
                    <Button className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-sm px-8">
                      Start creating
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right column - Parent use cases */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Use case cards with modern styling */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Special occasions</h4>
                  <p className="text-gray-600">
                    Create themed coloring activities for birthday parties, playdates, and family gatherings.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Rainy day activities</h4>
                  <p className="text-gray-600">
                    Generate new activities in seconds when kids are bored or when the weather keeps you indoors.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Feature icon" 
                      width={24} 
                      height={24} 
                      className="h-6 w-6 text-primary" 
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Family memories</h4>
                  <p className="text-gray-600">
                    Transform vacation pictures and family photos into memorable keepsakes children can color.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Educational support</h4>
                  <p className="text-gray-600">
                    Create educational coloring pages that reinforce learning concepts in a fun, engaging way.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Spacer */}
            <div className="lg:col-span-12 h-px bg-gray-100 my-8 lg:my-0"></div>
            
            {/* Left column - Teacher use cases */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Use case cards with modern styling */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Curriculum support</h4>
                  <p className="text-gray-600">
                    Generate pages that reinforce what you're teaching, from science concepts to historical events.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Class keepsakes</h4>
                  <p className="text-gray-600">
                    Create end-of-year keepsakes from class photos that students will treasure for years to come.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Special events</h4>
                  <p className="text-gray-600">
                    Design themed activities for holidays, cultural celebrations, and special school events.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Classroom management</h4>
                  <p className="text-gray-600">
                    Create quick activities for early finishers or as calming exercises during transitions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right column - For Teachers */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:top-24 self-start">
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-pastel-pink to-pastel-purple"></div>
                
                <div className="pl-6">
                  <div className="text-sm uppercase tracking-wider text-primary font-medium mb-4">For Teachers</div>
                  <h3 className="text-3xl font-bold mb-6">Enhance learning through creativity</h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Create educational coloring pages that reinforce learning concepts and engage students in a fun, interactive way.
                  </p>
                  
                  <Link href="/sign-up" passHref>
                    <Button className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-sm px-8">
                      Explore for classrooms
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24  ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Badge variant="outline" className="bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 text-pastel-purple border-0 px-3 py-1">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 bg-clip-text text-transparent block mt-2">Pricing Plans</span>
            </h2>
            <p className="max-w-[700px] text-gray-600 text-lg">Choose the plan that works best for your creative needs</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 p-1 rounded-full">
              <div
                className={`flex items-center space-x-1 transition-all duration-200 ${
                  currency === "INR" ? "bg-white shadow-sm rounded-full p-1 px-3" : "p-1 px-3"
                }`}
              >
                <span
                  className={`text-sm font-medium cursor-pointer transition-colors ${
                    currency === "INR" ? "text-pastel-purple" : "text-gray-600"
                  }`}
                  onClick={() => setCurrency("INR")}
                >
                  ₹ INR
                </span>
              </div>
              <div
                className={`flex items-center space-x-1 transition-all duration-200 ${
                  currency === "USD" ? "bg-white shadow-sm rounded-full p-1 px-3" : "p-1 px-3"
                }`}
              >
                <span
                  className={`text-sm font-medium cursor-pointer transition-colors ${
                    currency === "USD" ? "text-pastel-purple" : "text-gray-600"
                  }`}
                  onClick={() => setCurrency("USD")}
                >
                  $ USD
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(SUBSCRIPTION_PLANS).map(([id, plan]) => (
              <div
                key={id}
                className="relative"
              >
                {id === "starter" && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white text-xs font-bold px-4 py-1.5 rounded-full z-[99] shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <div
                  className={cn(
                    "bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                    id === "starter" && "ring-2 ring-pastel-purple pt-16"
                  )}
                >
                  <div className="p-8">
                    <div className={`inline-block w-fit text-lg text-black mb-6 font-bold`}>
                      {plan.name}
                    </div>

                    <div className="flex items-baseline mb-2">
                      {currency === "INR" ? (
                        <>
                          <span className="text-5xl font-bold bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 bg-clip-text text-transparent">₹{Math.round(plan.price * exchangeRate)}</span>
                          <span className="text-gray-500 ml-1">/month</span>
                          <span className="text-sm ml-2 bg-gray-50 px-2 py-1 rounded-full border">${plan.price}</span>
                        </>
                      ) : (
                        <>
                          <span className="text-5xl font-bold bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 bg-clip-text text-transparent">${plan.price}</span>
                          <span className="text-gray-500 ml-1">/month</span>
                          <span className="text-sm ml-2 bg-gray-50 px-2 py-1 rounded-full border">
                            ₹{Math.round(plan.price * exchangeRate)}
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-gray-600 mb-8">{plan.credits} credits per month</p>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="rounded-full bg-gradient-to-r from-pastel-pink/10 to-pastel-purple/10 p-1 mt-0.5 flex-shrink-0">
                            <Icons.check className="h-3 w-3 text-pastel-purple" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/sign-up" passHref>
                      <Button
                        className={cn(
                          "w-full py-6 text-base font-medium transition-all duration-300",
                          id === "starter"
                            ? "bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white hover:from-pastel-pink/90 hover:to-pastel-purple/90 text-white shadow-lg hover:shadow-xl"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                        )}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600">
              All plans include unlimited downloads and access to both text-to-image and photo-to-coloring features.
              <br />
              <span className="text-sm mt-2 inline-block text-gray-500">
                {currency === "INR"
                  ? "Prices shown in INR and USD. USD pricing is approximate and may vary based on exchange rates."
                  : "Prices shown in USD and INR. INR pricing is approximate and may vary based on exchange rates."}
              </span>
            </p>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />


    
    </>
  )
}

// Features data
const features = [
  {
    title: "AI-Powered Generation",
    description: "Create custom coloring pages from text descriptions in seconds using advanced AI.",
    icon: <Icons.globe className="h-6 w-6 text-primary" />,
  },
  {
    title: "Multiple Styles",
    description: "Choose from various styles and themes to create the perfect coloring page.",
    icon: <Icons.media className="h-6 w-6 text-primary" />,
  },
  {
    title: "Instant Downloads",
    description: "Download your coloring pages instantly and print them at home.",
    icon: <Icons.download className="h-6 w-6 text-primary" />,
  },
  {
    title: "Custom Prompts",
    description: "Describe exactly what you want or use our prompt suggestions.",
    icon: <Icons.post className="h-6 w-6 text-primary" />,
  },
  {
    title: "Different Sizes",
    description: "Create coloring pages in different aspect ratios for various uses.",
    icon: <Icons.settings className="h-6 w-6 text-primary" />,
  },
  {
    title: "Public Gallery",
    description: "Share your creations with the community or browse for inspiration.",
    icon: <Icons.eye className="h-6 w-6 text-primary" />,
  },
]

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent of 3",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "My kids love the custom coloring pages I create for them. It's so easy to make pages with their favorite characters and themes!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Elementary Teacher",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "I use this for my classroom activities. Being able to create educational coloring pages that match our curriculum is amazing.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Daycare Provider",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The kids at my daycare center are always excited when I bring new coloring pages. This tool has been a lifesaver!",
    rating: 4,
  },
]

