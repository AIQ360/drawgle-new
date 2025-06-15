"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Upload,
  Palette,
  Download,
  Camera,
  Sparkles,
  Zap,
  Check,
  HelpCircle,
  Plus,
  Minus,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Head from "next/head"
import { SITE_URL } from "@/lib/constants"

export default function PhotoToColoringPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [openFAQs, setOpenFAQs] = useState<number[]>([])

  const beforeAfterExamples = [
    {
      before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      after: "/placeholder.svg?height=400&width=400",
      title: "Family Portrait",
    },
    {
      before: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
      after: "/placeholder.svg?height=400&width=400",
      title: "Pet Photo",
    },
    {
      before: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      after: "/placeholder.svg?height=400&width=400",
      title: "Landscape",
    },
  ]

  const features = [
    {
      icon: Camera,
      title: "Any Photo Works",
      description: "Upload family photos, pet pictures, landscapes, or any image you love",
    },
    {
      icon: Zap,
      title: "Instant Conversion",
      description: "Our AI transforms your photo into a coloring page in under 30 seconds",
    },
    {
      icon: Palette,
      title: "Perfect Line Art",
      description: "Clean, printable outlines that are perfect for coloring by kids and adults",
    },
    {
      icon: Download,
      title: "High-Quality Download",
      description: "Get print-ready PNG files that look great on any printer",
    },
  ]

  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Upload Your Photo",
      description:
        "Choose any photo from your device - family pictures, pets, landscapes, or anything you'd like to color",
    },
    {
      number: 2,
      icon: Sparkles,
      title: "AI Magic Happens",
      description: "Our advanced AI analyzes your photo and creates clean, beautiful line art perfect for coloring",
    },
    {
      number: 3,
      icon: Download,
      title: "Download & Print",
      description: "Get your custom coloring page instantly and print it at home or at any print shop",
    },
  ]

  const faqs = [
    {
      question: "What types of photos work best for conversion?",
      answer:
        "Photos with clear subjects and good contrast work best. Family portraits, pet photos, landscapes, and objects with distinct outlines convert beautifully. Avoid very dark or blurry images for optimal results.",
    },
    {
      question: "How long does it take to convert a photo?",
      answer:
        "Most photos are converted into coloring pages within 10-30 seconds! Our AI works incredibly fast, so you can transform multiple photos in just minutes.",
    },
    {
      question: "Can I use any photo from my phone?",
      answer:
        "Yes! You can upload photos directly from your phone, tablet, or computer. We support all common image formats including JPG, PNG, and HEIC.",
    },
    {
      question: "Will the coloring page look like my original photo?",
      answer:
        "Yes! Our AI preserves the key features and composition of your photo while creating clean line art that's perfect for coloring. You'll definitely recognize the original image.",
    },
    {
      question: "Can I adjust the complexity of the coloring page?",
      answer:
        "You can choose from different complexity levels - simple for young children or detailed for adults and older kids who enjoy intricate coloring.",
    },
    {
      question: "Is it safe to upload family photos?",
      answer:
        "Yes, your privacy is our priority. Photos are processed securely and automatically deleted after conversion. We never store or share your personal images.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % beforeAfterExamples.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [beforeAfterExamples.length])

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Photo to Coloring Page Converter - Transform Any Photo with AI",
    description:
      "Convert any photo into a beautiful coloring page instantly with AI. Upload family photos, pets, or any image and get printable coloring pages in seconds.",
    url: `${SITE_URL}/photo-to-coloring-page`,
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Photo to Coloring Page Converter",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web Browser",
    },
  }

  return (
    <>
      <Head>
        <title>Photo to Coloring Page Converter - Transform Any Photo with AI | Drawgle</title>
        <meta
          name="description"
          content="Convert any photo into a beautiful coloring page instantly with AI. Upload family photos, pets, or any image and get printable coloring pages in seconds. Free to try!"
        />
        <meta
          name="keywords"
          content="photo to coloring page, convert photo to coloring page, photo coloring page converter, AI photo converter, family photo coloring page"
        />
        <meta property="og:title" content="Photo to Coloring Page Converter - Transform Any Photo with AI | Drawgle" />
        <meta
          property="og:description"
          content="Convert any photo into a beautiful coloring page instantly with AI. Upload family photos, pets, or any image and get printable coloring pages in seconds."
        />
        <meta property="og:url" content={`${SITE_URL}/photo-to-coloring-page`} />
        <link rel="canonical" href={`${SITE_URL}/photo-to-coloring-page`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50/30 to-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Left Column - Content */}
              <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20 mb-6">
                  <Camera className="w-4 h-4 mr-2 text-pastel-pink" />
                  Photo to Coloring Page
                </div>

                <div className="space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    Transform Your
                    <br />
                    <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                      Photos Into
                    </span>
                    <br />
                    Coloring Pages
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Upload any photo and watch our AI instantly convert it into a beautiful, printable coloring page.
                    Perfect for family memories, pets, and special moments.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-sm border border-gray-100">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">30-Second Conversion</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-sm border border-gray-100">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Any Photo Works</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-sm border border-gray-100">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Print Ready</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/sign-up">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Convert Your First Photo Free
                    </Button>
                  </Link>
                  <Link href="#examples">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-gray-300 hover:border-pastel-pink px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300"
                    >
                      See Examples
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gradient-to-r from-pastel-pink/30 to-orange-400/30"
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500">Trusted by 10,000+ families</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Before/After Examples */}
              <div className="relative flex justify-center items-center h-[400px] sm:h-[500px] md:h-[600px] order-1 lg:order-2">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Before Image */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600 text-center">Original Photo</p>
                      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden aspect-square">
                        <img
                          src={beforeAfterExamples[currentImageIndex].before || "/placeholder.svg"}
                          alt="Original photo"
                          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                        />
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600 text-center">Coloring Page</p>
                      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden aspect-square">
                        <img
                          src={beforeAfterExamples[currentImageIndex].after || "/placeholder.svg"}
                          alt="Generated coloring page"
                          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Example Title */}
                  <div className="text-center mt-4">
                    <p className="text-lg font-semibold text-gray-900">
                      {beforeAfterExamples[currentImageIndex].title}
                    </p>
                    <div className="flex justify-center gap-2 mt-2">
                      {beforeAfterExamples.map((_, index) => (
                        <div
                          key={index}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            index === currentImageIndex ? "bg-pastel-pink" : "bg-gray-300",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20">
                Simple Process
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                From Photo to Coloring Page in 3 Easy Steps
              </h2>
              <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Our AI makes it incredibly simple to turn any photo into a beautiful coloring page
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {steps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <div key={step.number} className="relative group">
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-20 left-full w-12 h-0.5 bg-gradient-to-r from-pastel-pink/30 to-transparent z-0"></div>
                      )}

                      <div className="relative flex flex-col items-center text-center space-y-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group-hover:-translate-y-0.5">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pastel-pink to-orange-400 text-white font-bold text-lg shadow-lg">
                            {step.number}
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 group-hover:bg-gray-100 transition-colors duration-200">
                            <IconComponent className="h-10 w-10 text-gray-600" />
                          </div>
                        </div>

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
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20">
                Why Choose Our Converter
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Perfect Photo to{" "}
                <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                  Coloring Page
                </span>{" "}
                Conversion
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink/10 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-pastel-pink/20 group-hover:to-orange-100 transition-all duration-200">
                      <IconComponent className="w-8 h-8 text-pastel-pink" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section
          id="examples"
          className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20">
                <Camera className="w-4 h-4 mr-2 text-pastel-pink" />
                Real Examples
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                See Amazing{" "}
                <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                  Photo Transformations
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
                Real photos converted by our users into beautiful coloring pages. Your photos will look just as amazing!
              </p>
            </div>

            {/* Gallery Grid with Blur Edges */}
            <div className="relative max-w-7xl mx-auto">
              {/* Blur Overlay - Left */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

              {/* Blur Overlay - Right */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

              {/* Blur Overlay - Top */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/60 to-transparent z-10 pointer-events-none"></div>

              {/* Blur Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent z-10 pointer-events-none"></div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                {/* Example 1 */}
                <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="aspect-square relative">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
                      alt="Family photo converted to coloring page"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Family Portrait</p>
                      <p className="text-xs opacity-80">Original Photo</p>
                    </div>
                  </div>
                </div>

                {/* Example 2 */}
                <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="aspect-square relative">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Family coloring page result"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Family Portrait</p>
                      <p className="text-xs opacity-80">Coloring Page</p>
                    </div>
                  </div>
                </div>

                {/* Example 3 */}
                <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="aspect-square relative">
                    <img
                      src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop"
                      alt="Pet photo converted to coloring page"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Cute Dog</p>
                      <p className="text-xs opacity-80">Original Photo</p>
                    </div>
                  </div>
                </div>

                {/* Example 4 */}
                <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="aspect-square relative">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Pet coloring page result"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Cute Dog</p>
                      <p className="text-xs opacity-80">Coloring Page</p>
                    </div>
                  </div>
                </div>

                {/* Example 5 */}
                <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="aspect-square relative">
                    <img
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                      alt="Landscape photo converted to coloring page"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Mountain View</p>
                      <p className="text-xs opacity-80">Original Photo</p>
                    </div>
                  </div>
                </div>

                {/* Example 6 */}
                <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="aspect-square relative">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Landscape coloring page result"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Mountain View</p>
                      <p className="text-xs opacity-80">Coloring Page</p>
                    </div>
                  </div>
                </div>

                {/* Example 7 */}
                <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="aspect-square relative">
                    <img
                      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=400&fit=crop"
                      alt="Another pet photo"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Happy Cat</p>
                      <p className="text-xs opacity-80">Original Photo</p>
                    </div>
                  </div>
                </div>

                {/* Example 8 */}
                <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="aspect-square relative">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Cat coloring page result"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Happy Cat</p>
                      <p className="text-xs opacity-80">Coloring Page</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 text-lg">Ready to see your photos transformed like these?</p>
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Convert Your Photo Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20">
                <HelpCircle className="w-4 h-4 mr-2 text-pastel-pink" />
                Photo Conversion FAQ
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Common Questions About{" "}
                <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                  Photo Conversion
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left transition-all duration-200 hover:bg-gray-50/50"
                    aria-expanded={openFAQs.includes(index)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <div
                        className={cn(
                          "flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 flex items-center justify-center transition-all duration-300",
                          openFAQs.includes(index) ? "rotate-180 bg-gradient-to-r from-pastel-pink to-orange-400" : "",
                        )}
                      >
                        {openFAQs.includes(index) ? (
                          <Minus className="h-4 w-4 text-white" />
                        ) : (
                          <Plus className="h-4 w-4 text-pastel-pink" />
                        )}
                      </div>
                    </div>
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      openFAQs.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-pastel-pink/20 to-orange-400/20 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50/30 rounded-3xl p-8 md:p-12 border border-pastel-pink/20 shadow-sm overflow-hidden">
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-r from-pastel-pink/20 to-orange-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-orange-400/20 to-pastel-pink/20 rounded-full blur-xl"></div>

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20 mb-6">
                    <Camera className="w-4 h-4 mr-2 text-pastel-pink" />
                    Ready to Convert Your Photos?
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                    Turn Your Favorite{" "}
                    <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                      Photos Into Art
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                    Join thousands of families who have transformed their precious memories into beautiful coloring
                    pages. Start with 5 free conversions!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link href="/sign-up">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Convert Your First Photo Free
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>

                    <Link href="/gallery">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-gray-300 hover:border-pastel-pink px-8 py-4 text-base sm:text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300"
                      >
                        See More Examples
                      </Button>
                    </Link>
                  </div>

                  <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-600">No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-600">5 free conversions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-600">Instant results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
