import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download, Users, Heart, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Dinosaur Coloring Pages - Free Printable Dinosaur Coloring Sheets for Kids & Adults",
  description:
    "Download free printable dinosaur coloring pages featuring T-Rex, Triceratops, Stegosaurus, and more. Realistic and cute dinosaur designs with color guides for all ages.",
  openGraph: {
    title: "Dinosaur Coloring Pages - Free Printable Dinosaur Coloring Sheets",
    description:
      "Discover 400+ free printable dinosaur coloring pages with T-Rex, Triceratops, and prehistoric scenes. Includes realistic, cute, and Jurassic World designs.",
    images: [
      {
        url: "/placeholder.svg?key=dinosaur-collection",
        width: 1200,
        height: 630,
        alt: "Dinosaur Coloring Pages Collection",
      },
    ],
  },
}

export default function DinosaurColoringPages() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-8">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-pastel-pink transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link href="/coloring-pages" className="hover:text-pastel-pink transition-colors">
                Coloring Pages
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <span aria-current="page" className="text-gray-900">
                Dinosaur Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Free Dinosaur
              <br />
              <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Coloring Pages
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover 400+ professionally designed dinosaur coloring pages featuring T-Rex, Triceratops, Stegosaurus,
              and prehistoric scenes. From realistic dinosaurs to cute cartoon designs, perfect for educational fun and
              family bonding.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">400+ Designs</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">All Ages</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">PDF Ready</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Color Guides</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Free Pages
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pastel-pink/30 hover:border-pastel-pink px-8 py-6 text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300 bg-transparent"
                >
                  Browse Collection
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">400+</div>
                <div className="text-gray-600">Dinosaur Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">75K+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">25</div>
                <div className="text-gray-600">Dinosaur Species</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.8★</div>
                <div className="text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Dinosaur Coloring Pages Matter */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Dinosaur Coloring Pages Are Perfect for Learning
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dinosaur coloring pages combine creativity with paleontology education, helping children develop essential
              skills while exploring prehistoric worlds and fostering scientific curiosity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Scientific Learning:</strong> Introduction to paleontology and prehistoric life
                </li>
                <li>
                  • <strong>Historical Awareness:</strong> Understanding Earth's ancient past and evolution
                </li>
                <li>
                  • <strong>Vocabulary Building:</strong> Learning dinosaur names and scientific terms
                </li>
                <li>
                  • <strong>Classification Skills:</strong> Distinguishing between herbivores, carnivores, and omnivores
                </li>
                <li>
                  • <strong>Critical Thinking:</strong> Comparing sizes, habitats, and characteristics
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creative & Social Growth</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Imagination Development:</strong> Creating prehistoric worlds and stories
                </li>
                <li>
                  • <strong>Color Theory:</strong> Learning realistic vs. creative color choices
                </li>
                <li>
                  • <strong>Family Bonding:</strong> Shared interest in dinosaurs across generations
                </li>
                <li>
                  • <strong>Confidence Building:</strong> Mastering complex dinosaur anatomy
                </li>
                <li>
                  • <strong>Patience Development:</strong> Working on detailed prehistoric scenes
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Motor Skills & Focus</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Fine Motor Skills:</strong> Detailed coloring of scales, spikes, and features
                </li>
                <li>
                  • <strong>Hand-Eye Coordination:</strong> Precise coloring within complex outlines
                </li>
                <li>
                  • <strong>Attention to Detail:</strong> Focusing on anatomical accuracy
                </li>
                <li>
                  • <strong>Spatial Awareness:</strong> Understanding proportions and perspective
                </li>
                <li>
                  • <strong>Concentration:</strong> Extended focus on intricate designs
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dinosaur Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Dinosaur Coloring Collection</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our scientifically-inspired collection covers all major dinosaur groups, from fierce predators to gentle
              giants. Each category includes both realistic and kid-friendly designs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Realistic Dinosaur Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-brown-100">
                <Image
                  src="/placeholder.svg?key=realistic-dinosaurs"
                  alt="Realistic Dinosaur Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  80+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Realistic Dinosaur Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Scientifically accurate dinosaur designs based on fossil evidence. Perfect for older kids and adults
                  who love paleontology.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Anatomically correct proportions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Detailed skin textures & scales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Authentic prehistoric environments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Educational fact sheets included</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Explore Realistic Dinosaurs
                </Button>
              </CardContent>
            </Card>

            {/* Simple Dinosaur Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-yellow-50 to-orange-100">
                <Image
                  src="/placeholder.svg?key=simple-dinosaurs"
                  alt="Simple Dinosaur Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  120+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Simple Dinosaur Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Easy-to-color dinosaur outlines with thick lines and basic shapes. Perfect for toddlers and
                  preschoolers.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Thick, bold outlines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Large coloring areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Basic dinosaur shapes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Perfect for little hands</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Browse Simple Designs
                </Button>
              </CardContent>
            </Card>

            {/* Cute Dinosaur Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-pink-50 to-purple-100">
                <Image
                  src="/placeholder.svg?key=cute-dinosaurs"
                  alt="Cute Dinosaur Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  90+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cute Dinosaur Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Adorable cartoon-style dinosaurs with friendly faces and playful poses. Great for reducing any fear of
                  dinosaurs.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Friendly, smiling dinosaurs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Cartoon-style designs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Playful scenes & activities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Perfect for young children</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  View Cute Dinosaurs
                </Button>
              </CardContent>
            </Card>

            {/* Adult Dinosaur Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-blue-100">
                <Image
                  src="/placeholder.svg?key=adult-dinosaurs"
                  alt="Adult Dinosaur Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  60+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Adult Dinosaur Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Intricate dinosaur designs with complex patterns and detailed backgrounds. Perfect for stress relief
                  and mindful coloring.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Intricate scale patterns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Complex prehistoric scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Mandala-style elements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Therapeutic complexity</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Explore Adult Designs
                </Button>
              </CardContent>
            </Card>

            {/* Jurassic World Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-yellow-100">
                <Image
                  src="/placeholder.svg?key=jurassic-world"
                  alt="Jurassic World Dinosaur Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  40+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Jurassic World Style Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Movie-inspired dinosaur designs with action scenes and modern prehistoric adventures. Great for fans
                  of dinosaur movies.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Action-packed scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Movie-inspired designs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Modern prehistoric settings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Adventure themes</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Discover Adventure Pages
                </Button>
              </CardContent>
            </Card>

            {/* Color Guide Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-rainbow-50 to-purple-100">
                <Image
                  src="/placeholder.svg?key=color-guide-dinosaurs"
                  alt="Dinosaur Coloring Pages with Color Guide"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  50+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pages with Color Guides</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Dinosaur coloring pages with suggested color palettes and scientific color information. Learn while
                  you color!
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Scientific color suggestions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Color theory education</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Realistic vs. creative options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Educational color facts</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Learn with Color Guides
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Age-Specific Guide */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect Dinosaur Pages for Every Age</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our dinosaur collection is carefully designed to match developmental stages, ensuring every child gets
                the perfect prehistoric adventure for their skill level.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3-5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Little Paleontologists</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Simple, friendly dinosaurs with thick lines and large coloring areas. Perfect for introducing
                    prehistoric concepts.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Cute cartoon dinosaurs</li>
                    <li>• Basic shapes and outlines</li>
                    <li>• Friendly, non-scary designs</li>
                    <li>• Large coloring spaces</li>
                    <li>• Simple prehistoric scenes</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Develops:</strong> Color recognition, basic motor skills, dinosaur vocabulary
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">6-10</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dinosaur Explorers</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    More detailed dinosaurs with educational elements and prehistoric environments. Great for learning
                    about different species.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Realistic dinosaur proportions</li>
                    <li>• Prehistoric landscape scenes</li>
                    <li>• Different dinosaur species</li>
                    <li>• Educational fact elements</li>
                    <li>• Moderate detail complexity</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Develops:</strong> Scientific knowledge, attention to detail, classification skills
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">11+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Paleontology</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Scientifically accurate, highly detailed dinosaur designs with complex prehistoric ecosystems.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Anatomically correct designs</li>
                    <li>• Complex prehistoric ecosystems</li>
                    <li>• Detailed scale and texture patterns</li>
                    <li>• Scientific accuracy focus</li>
                    <li>• Advanced coloring challenges</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Benefits:</strong> Scientific accuracy, advanced motor skills, paleontology interest
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Benefits Deep Dive */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Educational Power of Dinosaur Coloring</h2>
              <p className="text-lg text-gray-600">
                Research shows that dinosaur-themed activities significantly boost children's interest in science,
                history, and natural world exploration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">STEM Learning Integration</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Science Through Dinosaurs</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Paleontology:</strong> Understanding fossils and prehistoric life
                      </li>
                      <li>
                        • <strong>Evolution:</strong> Learning about adaptation and survival
                      </li>
                      <li>
                        • <strong>Geology:</strong> Understanding rock layers and time periods
                      </li>
                      <li>
                        • <strong>Biology:</strong> Comparing dinosaurs to modern animals
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Mathematics & Measurement</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Size Comparison:</strong> Understanding scale and proportion
                      </li>
                      <li>
                        • <strong>Timeline Skills:</strong> Grasping millions of years concepts
                      </li>
                      <li>
                        • <strong>Classification:</strong> Sorting by size, diet, and period
                      </li>
                      <li>
                        • <strong>Estimation:</strong> Comparing dinosaur measurements
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Language Arts Enhancement</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Vocabulary:</strong> Scientific terms and dinosaur names
                      </li>
                      <li>
                        • <strong>Reading Comprehension:</strong> Dinosaur facts and stories
                      </li>
                      <li>
                        • <strong>Creative Writing:</strong> Prehistoric adventure stories
                      </li>
                      <li>
                        • <strong>Research Skills:</strong> Learning about different species
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Therapeutic & Development Benefits</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Overcoming Fears & Anxiety</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Fear Reduction:</strong> Making dinosaurs friendly and approachable
                      </li>
                      <li>
                        • <strong>Control & Mastery:</strong> Taking charge of prehistoric worlds
                      </li>
                      <li>
                        • <strong>Confidence Building:</strong> Learning about extinct creatures safely
                      </li>
                      <li>
                        • <strong>Emotional Regulation:</strong> Calming activity with exciting themes
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Social Development</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Shared Interests:</strong> Connecting with other dinosaur enthusiasts
                      </li>
                      <li>
                        • <strong>Family Bonding:</strong> Multi-generational fascination with dinosaurs
                      </li>
                      <li>
                        • <strong>Conversation Starters:</strong> Sharing dinosaur facts and discoveries
                      </li>
                      <li>
                        • <strong>Museum Visits:</strong> Encouraging real-world exploration
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Special Needs Support</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Autism Support:</strong> Structured, predictable activity with special interests
                      </li>
                      <li>
                        • <strong>ADHD Focus:</strong> Engaging themes that maintain attention
                      </li>
                      <li>
                        • <strong>Sensory Processing:</strong> Tactile experience with different textures
                      </li>
                      <li>
                        • <strong>Motor Skills:</strong> Progressive difficulty levels for skill building
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Implementation Guide */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-2xl p-8 border border-pastel-pink/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Complete Dinosaur Coloring Implementation Guide
                </h2>
                <p className="text-lg text-gray-600">
                  Professional strategies for parents, teachers, and caregivers to maximize the educational and
                  therapeutic benefits of dinosaur coloring activities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">For Parents: Building Dinosaur Enthusiasm</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Create a Prehistoric Learning Center</h4>
                      <p className="text-gray-600 mb-3">
                        Set up a dedicated space with dinosaur coloring pages, reference books, and fossil replicas.
                        This creates an immersive learning environment.
                      </p>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <strong className="text-gray-900">Setup Ideas:</strong>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Display completed dinosaur artwork on walls</li>
                          <li>• Keep dinosaur fact books nearby for reference</li>
                          <li>• Use earth-tone decorations for prehistoric atmosphere</li>
                          <li>• Include magnifying glass for "fossil examination"</li>
                          <li>• Create a dinosaur timeline on the wall</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Dinosaur Coloring Adventures</h4>
                      <p className="text-gray-600 mb-3">
                        Turn coloring time into prehistoric expeditions by creating stories and adventures around each
                        dinosaur page.
                      </p>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <strong className="text-gray-900">Activity Ideas:</strong>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Research each dinosaur before coloring</li>
                          <li>• Create stories about dinosaur daily life</li>
                          <li>• Compare dinosaur sizes to familiar objects</li>
                          <li>• Plan "expeditions" to natural history museums</li>
                          <li>• Build dinosaur habitat dioramas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">For Teachers: Classroom Paleontology</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Cross-Curricular Dinosaur Learning</h4>
                      <p className="text-gray-600 mb-3">
                        Integrate dinosaur coloring into multiple subjects for comprehensive prehistoric education that
                        meets curriculum standards.
                      </p>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <strong className="text-gray-900">Subject Integration:</strong>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>
                            • <strong>Science:</strong> Fossil formation, extinction, adaptation
                          </li>
                          <li>
                            • <strong>Math:</strong> Measurements, timelines, size comparisons
                          </li>
                          <li>
                            • <strong>Geography:</strong> Continental drift, prehistoric climates
                          </li>
                          <li>
                            • <strong>Language Arts:</strong> Dinosaur vocabulary, research reports
                          </li>
                          <li>
                            • <strong>Art:</strong> Scientific illustration, color theory
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Dinosaur Classroom Management</h4>
                      <p className="text-gray-600 mb-3">
                        Use dinosaur coloring pages as effective classroom management tools while maintaining
                        educational value.
                      </p>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <strong className="text-gray-900">Management Strategies:</strong>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Reward system with dinosaur "discoveries"</li>
                          <li>• Quiet time activity during transitions</li>
                          <li>• Early finisher enrichment with research</li>
                          <li>• Calming activity before assessments</li>
                          <li>• Indoor activity during weather delays</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Dinosaur Pages Preview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Most Popular Dinosaur Coloring Pages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our top-rated dinosaur coloring pages, loved by families and educators worldwide for their
              perfect balance of fun and educational value.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "T-Rex Portrait", downloads: "25K+", rating: "4.9" },
              { title: "Triceratops Family", downloads: "20K+", rating: "4.8" },
              { title: "Stegosaurus Scene", downloads: "18K+", rating: "4.9" },
              { title: "Brachiosaurus Landscape", downloads: "16K+", rating: "4.7" },
              { title: "Velociraptor Pack", downloads: "14K+", rating: "4.8" },
              { title: "Pteranodon Flight", downloads: "13K+", rating: "4.9" },
              { title: "Ankylosaurus Defense", downloads: "12K+", rating: "4.6" },
              { title: "Diplodocus Herd", downloads: "11K+", rating: "4.8" },
            ].map((page, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-xl overflow-hidden hover:border-pastel-pink/40 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={`/placeholder.svg?key=featured-dino${i}`}
                    alt={`${page.title} Dinosaur Coloring Page`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                    {page.rating}★
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{page.title}</h3>
                  <div className="flex justify-between items-center text-xs text-gray-600 mb-3">
                    <span>{page.downloads} downloads</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white text-xs rounded-lg"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-6 text-lg font-semibold rounded-xl"
            >
              Browse Complete Collection
            </Button>
          </div>
        </section>

        {/* Comprehensive FAQ */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Know About Dinosaur Coloring Pages
              </h2>
              <p className="text-lg text-gray-600">
                Expert answers to the most common questions about using dinosaur coloring pages for education, therapy,
                and family fun.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do dinosaur coloring pages support STEM learning and scientific curiosity?",
                  answer:
                    "Dinosaur coloring pages serve as powerful STEM learning tools by introducing children to paleontology, geology, and evolutionary biology concepts. They encourage scientific thinking through species comparison, timeline understanding, and fossil formation concepts. Children naturally ask questions about dinosaur habitats, diets, and extinction, leading to deeper scientific exploration. The visual nature of coloring helps children remember dinosaur characteristics and classifications, while the hands-on activity reinforces learning through multiple senses.",
                },
                {
                  question: "What makes realistic dinosaur coloring pages different from cartoon versions?",
                  answer:
                    "Realistic dinosaur coloring pages are based on current paleontological research and fossil evidence, featuring anatomically correct proportions, scientifically accurate skin textures, and authentic prehistoric environments. They often include educational elements like scale references and habitat information. Cartoon versions prioritize accessibility and emotional comfort, featuring friendly faces and simplified anatomy that reduces fear while maintaining educational value. Both styles serve important purposes - realistic pages for scientific accuracy and cartoon versions for younger children or those who might be intimidated by more accurate depictions.",
                },
                {
                  question: "How can teachers effectively integrate dinosaur coloring pages into curriculum standards?",
                  answer:
                    "Teachers can integrate dinosaur coloring pages across multiple subjects to meet various curriculum standards. In science, they support life science standards through classification, adaptation, and extinction concepts. Math integration includes measurement comparisons, timeline creation, and data analysis of dinosaur characteristics. Language arts connections involve vocabulary development, research skills, and creative writing about prehistoric life. Social studies integration covers geological time periods and Earth's changing environments. Art education naturally incorporates scientific illustration techniques and color theory through prehistoric palette exploration.",
                },
                {
                  question:
                    "What are the therapeutic benefits of dinosaur coloring pages for children with special needs?",
                  answer:
                    "Dinosaur coloring pages offer significant therapeutic benefits for children with special needs. For children with autism, dinosaurs often become special interests that provide comfort and focus, while the structured activity supports routine and predictability. ADHD children benefit from the engaging themes that maintain attention longer than generic coloring pages. The progressive difficulty levels support motor skill development for children with physical challenges. Anxiety reduction occurs through the controlled exploration of potentially scary subjects, helping children process fears in a safe environment. The educational component builds confidence and provides conversation topics for social skill development.",
                },
                {
                  question: "How should parents choose age-appropriate dinosaur coloring pages for optimal learning?",
                  answer:
                    "Parents should select dinosaur coloring pages based on their child's developmental stage, interests, and comfort level with prehistoric themes. For ages 3-5, choose simple, friendly cartoon dinosaurs with thick lines and basic shapes. Ages 6-10 can handle more realistic proportions and moderate detail with educational elements. Ages 11+ can engage with scientifically accurate, highly detailed designs. Consider your child's dinosaur knowledge level - beginners benefit from familiar species like T-Rex and Triceratops, while advanced enthusiasts enjoy lesser-known species. Always prioritize your child's interest and comfort level over chronological age recommendations.",
                },
                {
                  question: "What are the best practices for printing dinosaur coloring pages as PDFs?",
                  answer:
                    "For optimal dinosaur coloring page printing, use high-quality PDF files and print at 100% scale to maintain proper proportions. Choose white cardstock (65-80lb) for durability, especially with detailed realistic dinosaurs. Use high-quality print settings to ensure crisp lines for intricate scale patterns and textures. For educational use, consider printing color guides separately or on the back of pages. Create organized storage with labeled folders for different dinosaur types and difficulty levels. For classroom use, print multiple copies of popular dinosaurs and consider laminating for reusable activities with dry-erase markers.",
                },
                {
                  question:
                    "How can dinosaur coloring pages help children overcome fears while building scientific interest?",
                  answer:
                    "Dinosaur coloring pages help children overcome fears by providing controlled exposure to prehistoric creatures in a safe, creative environment. Starting with cute, cartoon-style dinosaurs builds positive associations before introducing more realistic designs. The act of coloring gives children control over the dinosaur's appearance, reducing feelings of powerlessness. Educational elements help children understand that dinosaurs are extinct and cannot harm them, while building fascination with paleontology. Family coloring time provides emotional support during the learning process. Gradually progressing from simple to complex designs builds confidence while maintaining scientific accuracy and interest.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Educational Coloring Pages</h2>
            <p className="text-gray-600">
              Discover our complete collection of educational and themed coloring activities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Animal Pages", subtitle: "Wildlife & pets", href: "/animal-coloring-pages" },
              { title: "Space Pages", subtitle: "Planets & astronauts", href: "/space-coloring-pages" },
              { title: "Ocean Pages", subtitle: "Sea creatures & underwater", href: "/ocean-coloring-pages" },
              { title: "Nature Pages", subtitle: "Plants & landscapes", href: "/nature-coloring-pages" },
            ].map((category, i) => (
              <Link key={i} href={category.href} className="group">
                <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-xl p-6 text-center hover:border-pastel-pink/40 transition-all duration-300">
                  <h3 className="font-semibold text-gray-900 group-hover:text-pastel-pink transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{category.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Start Your Prehistoric Adventure Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of families exploring the fascinating world of dinosaurs through our educational coloring
              collection. Download instantly and start your paleontology journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-pastel-pink hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Dinosaur Pack
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl bg-transparent"
              >
                Browse All Categories
              </Button>
            </div>

            <div className="mt-6 text-sm opacity-75">
              <span>🦕 400+ pages • All ages • PDF ready • Educational guides included</span>
            </div>
          </div>
        </section>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Dinosaur Coloring Pages - Free Printable Educational Activities",
              description:
                "Download 400+ free printable dinosaur coloring pages featuring T-Rex, Triceratops, Stegosaurus, and prehistoric scenes. Includes realistic, cute, and educational designs.",
              keywords:
                "dinosaur coloring pages, realistic dinosaur coloring pages, free printable dinosaur coloring pages PDF, simple dinosaur coloring pages, dinosaur coloring pages for adults, cute dinosaur coloring pages, Jurassic World dinosaur coloring pages, dinosaur coloring pages with color guide",
              url: "https://drawgle.in/dinosaur-coloring-pages",
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: 400,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Realistic Dinosaur Coloring Pages",
                    url: "https://drawgle.in/dinosaur-coloring-pages/realistic",
                    description: "80+ scientifically accurate dinosaur coloring pages based on fossil evidence",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Simple Dinosaur Coloring Pages",
                    url: "https://drawgle.in/dinosaur-coloring-pages/simple",
                    description: "120+ easy-to-color dinosaur pages perfect for toddlers and preschoolers",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Cute Dinosaur Coloring Pages",
                    url: "https://drawgle.in/dinosaur-coloring-pages/cute",
                    description: "90+ adorable cartoon-style dinosaur pages with friendly designs",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Adult Dinosaur Coloring Pages",
                    url: "https://drawgle.in/dinosaur-coloring-pages/adults",
                    description: "60+ intricate dinosaur designs for stress relief and mindful coloring",
                  },
                ],
              },
              about: {
                "@type": "Thing",
                name: "Dinosaur Educational Activities",
                description:
                  "Free printable dinosaur coloring pages designed for STEM education, paleontology learning, and family bonding activities",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Families, Teachers, Children, Parents, Educators, Paleontology Enthusiasts",
                geographicArea: "Global",
              },
              educationalUse:
                "STEM Education, Paleontology Learning, Science Education, Motor Skill Development, Therapeutic Coloring",
              isAccessibleForFree: true,
              inLanguage: "en-US",
              publisher: {
                "@type": "Organization",
                name: "Drawgle",
                url: "https://drawgle.in",
              },
            }),
          }}
        />
      </div>
    </div>
  )
}
