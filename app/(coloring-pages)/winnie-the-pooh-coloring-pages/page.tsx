import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Download, Heart, Star, Users, BookOpen, Gift, Palette, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Winnie the Pooh Coloring Pages | Free Printable PDF & Activities | Drawgle",
  description:
    "Free Winnie the Pooh coloring pages! Print Pooh Bear, Piglet, Tigger & friends. Perfect for toddlers & adults. Birthday themes, cute designs & educational fun.",
  keywords:
    "Winnie the Pooh coloring pages, printable PDF, coloring book, birthday, free printables, adults, cute, toddlers, Pooh Bear, Piglet, Tigger, Eeyore",
  openGraph: {
    title: "Winnie the Pooh Coloring Pages | Free Printable PDF & Activities",
    description:
      "Free Winnie the Pooh coloring pages! Print Pooh Bear, Piglet, Tigger & friends. Perfect for toddlers & adults. Birthday themes & educational fun.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Winnie the Pooh Coloring Pages Collection",
      },
    ],
  },
}

export default function WinnieThePoohColoringPages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-pastel-pink transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/coloring-pages-for-kids" className="hover:text-pastel-pink transition-colors">
                Coloring Pages
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900 font-medium" aria-current="page">
                Winnie the Pooh Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Winnie the Pooh Coloring Pages
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Join Pooh Bear and friends in the Hundred Acre Wood! Free printable coloring pages featuring everyone's
                favorite silly old bear and his wonderful adventures.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 rounded-full text-sm font-medium border border-orange-200">
                  🍯 500+ Pooh Pages
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full text-sm font-medium border border-pink-200">
                  🎂 Birthday Themes
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
                  📚 Educational Fun
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
                  👶 Toddler Friendly
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200">
                  🎨 Adult Designs
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Free PDF
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  View Coloring Book
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Pooh Bear Pages</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-pink-600">15+</div>
                <div className="text-sm text-gray-600">Beloved Characters</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">8</div>
                <div className="text-sm text-gray-600">Age Categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Free & Printable</div>
              </div>
            </div>
          </div>
        </section>

        {/* Character Categories */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet the Hundred Acre Wood Friends</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Winnie the Pooh */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Winnie the Pooh Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Pooh Bear
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Pooh Bear Adventures</h3>
                  <p className="text-gray-600 mb-4">
                    Our favorite silly old bear with his honey pots and gentle wisdom
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>150+ Pages</span>
                    <span>All Ages</span>
                  </div>
                </CardContent>
              </Card>

              {/* Piglet */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Piglet Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Piglet
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Piglet's Courage</h3>
                  <p className="text-gray-600 mb-4">
                    Sweet little Piglet learning to be brave with his best friend Pooh
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>80+ Pages</span>
                    <span>Ages 3-10</span>
                  </div>
                </CardContent>
              </Card>

              {/* Tigger */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Tigger Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Tigger
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Tigger's Bouncing Fun</h3>
                  <p className="text-gray-600 mb-4">
                    Bouncy, trouncy, flouncy, pouncy - fun with the wonderful thing about Tiggers!
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>90+ Pages</span>
                    <span>Ages 4-12</span>
                  </div>
                </CardContent>
              </Card>

              {/* Eeyore */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Eeyore Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Eeyore
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Eeyore's Gentle Heart</h3>
                  <p className="text-gray-600 mb-4">
                    The lovable donkey with his thoughtful nature and loyal friendship
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>60+ Pages</span>
                    <span>Ages 5-Adult</span>
                  </div>
                </CardContent>
              </Card>

              {/* Birthday Collection */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Winnie the Pooh Birthday Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Birthday Fun
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Birthday Celebrations</h3>
                  <p className="text-gray-600 mb-4">
                    Special birthday-themed pages with cakes, balloons, and party fun
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>50+ Pages</span>
                    <span>Party Perfect</span>
                  </div>
                </CardContent>
              </Card>

              {/* Adult Collection */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Adult Winnie the Pooh Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Adult Pages
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Adult Relaxation</h3>
                  <p className="text-gray-600 mb-4">
                    Intricate designs with Pooh quotes and detailed patterns for mindful coloring
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>70+ Pages</span>
                    <span>Stress Relief</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Age-Specific Recommendations */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect Pages for Every Age</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Toddlers */}
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👶</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Toddlers (2-4 years)</h3>
                <p className="text-gray-600 mb-4">
                  Simple, large shapes perfect for little hands. Big, friendly faces of Pooh and friends with thick
                  outlines.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Extra large coloring areas</li>
                  <li>• Simple Pooh Bear faces</li>
                  <li>• Perfect for chunky crayons</li>
                  <li>• 80+ toddler-friendly pages</li>
                </ul>
              </div>

              {/* Kids */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧒</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Kids (5-12 years)</h3>
                <p className="text-gray-600 mb-4">
                  Adventure scenes with Pooh and friends exploring the Hundred Acre Wood. Stories and learning combined!
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Story-based coloring scenes</li>
                  <li>• All beloved characters</li>
                  <li>• Educational elements included</li>
                  <li>• 300+ adventure pages</li>
                </ul>
              </div>

              {/* Adults */}
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧘</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Adults (13+ years)</h3>
                <p className="text-gray-600 mb-4">
                  Intricate mandala-style designs featuring Pooh quotes and detailed patterns for mindful relaxation.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Complex geometric patterns</li>
                  <li>• Inspirational Pooh quotes</li>
                  <li>• Stress-relief focused</li>
                  <li>• 120+ therapeutic pages</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Benefits */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Pooh Bear Coloring is Perfect for Learning</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Emotional Intelligence</h3>
                <p className="text-sm text-gray-600">
                  Learn about friendship, kindness, and caring through Pooh's gentle wisdom and character interactions.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <BookOpen className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Language Development</h3>
                <p className="text-sm text-gray-600">
                  Classic A.A. Milne quotes and storytelling elements help develop vocabulary and reading skills.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <Palette className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Creative Expression</h3>
                <p className="text-sm text-gray-600">
                  Encourage imagination and artistic skills while exploring the magical world of the Hundred Acre Wood.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <Clock className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Mindful Focus</h3>
                <p className="text-sm text-gray-600">
                  Pooh's peaceful nature promotes calm, focused attention and stress relief for all ages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Benefits */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Therapeutic Benefits of Pooh Bear Coloring</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">For Children</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Emotional Regulation</h4>
                      <p className="text-gray-600 text-sm">
                        Pooh's gentle nature helps children process emotions and develop coping strategies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Social Skills</h4>
                      <p className="text-gray-600 text-sm">
                        Learn about friendship, sharing, and helping others through character interactions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Self-Confidence</h4>
                      <p className="text-gray-600 text-sm">
                        Completing coloring pages builds achievement and self-esteem, just like Piglet's courage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">For Adults</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Stress Relief</h4>
                      <p className="text-gray-600 text-sm">
                        Mindful coloring with beloved characters provides peaceful escape from daily pressures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-4 w-4 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Nostalgia Therapy</h4>
                      <p className="text-gray-600 text-sm">
                        Reconnect with childhood memories and simpler times through familiar characters.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Palette className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Creative Meditation</h4>
                      <p className="text-gray-600 text-sm">
                        Focus on the present moment while engaging in gentle, creative expression.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Printing Guide */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Complete Printing Guide</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Best Print Settings</h3>
                <div className="space-y-4">
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">📄 Paper Quality</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Standard: 20lb copy paper (everyday use)</li>
                      <li>• Premium: 24lb paper (special occasions)</li>
                      <li>• Cardstock: 65lb+ (birthday cards, keepsakes)</li>
                    </ul>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">🖨️ Print Quality</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Resolution: 300 DPI minimum</li>
                      <li>• Color: Full color for reference guides</li>
                      <li>• Black & White: Perfect for coloring</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Coloring Supplies</h3>
                <div className="space-y-4">
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">🖍️ For Toddlers (2-4)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Large chunky crayons</li>
                      <li>• Washable markers</li>
                      <li>• Finger paints (supervised)</li>
                    </ul>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">✏️ For Kids (5-12)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Colored pencils</li>
                      <li>• Fine-tip markers</li>
                      <li>• Watercolor pencils</li>
                    </ul>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">🎨 For Adults</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Professional colored pencils</li>
                      <li>• Fine-liner pens</li>
                      <li>• Gel pens with metallic options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive FAQ */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">
                  Are these Winnie the Pooh coloring pages completely free?
                </h3>
                <p className="text-gray-600">
                  Yes! All our Winnie the Pooh coloring pages are 100% free to download and print. We offer over 500
                  pages featuring Pooh Bear, Piglet, Tigger, Eeyore, and all their Hundred Acre Wood friends. No hidden
                  fees or subscriptions required.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">Can I download these as PDF files for easy printing?</h3>
                <p className="text-gray-600">
                  All our Winnie the Pooh coloring pages are available as high-quality PDF downloads. This ensures
                  perfect printing quality and easy storage on your device. Each PDF is optimized for standard 8.5x11"
                  paper.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">Do you have special birthday-themed Pooh Bear pages?</h3>
                <p className="text-gray-600">
                  Yes! We have a special collection of 50+ birthday-themed Winnie the Pooh coloring pages featuring
                  birthday cakes, balloons, party hats, and celebration scenes with all the beloved characters. Perfect
                  for birthday parties or special occasions.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">
                  Are there Winnie the Pooh coloring pages suitable for toddlers?
                </h3>
                <p className="text-gray-600">
                  Definitely! We have 80+ specially designed pages for toddlers (ages 2-4) with extra-large coloring
                  areas, simple shapes, and thick outlines. These feature friendly Pooh Bear faces and basic scenes
                  perfect for little hands and chunky crayons.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">
                  Do you offer adult coloring pages with Winnie the Pooh themes?
                </h3>
                <p className="text-gray-600">
                  Yes! Our adult collection includes 120+ intricate designs featuring mandala-style patterns, detailed
                  forest scenes, and inspirational Pooh quotes. These are perfect for stress relief, mindfulness, and
                  nostalgic relaxation.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">Can I create a complete Winnie the Pooh coloring book?</h3>
                <p className="text-gray-600">
                  Download multiple pages and create your own custom coloring book. We recommend printing on one side
                  only, then binding with a simple folder or spiral binding. Perfect for gifts or extended coloring
                  sessions.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">
                  What makes these coloring pages educational for children?
                </h3>
                <p className="text-gray-600">
                  Our Pooh Bear pages teach valuable lessons about friendship, kindness, problem-solving, and emotional
                  intelligence. Many pages include subtle educational elements like counting, letters, and nature
                  themes, all wrapped in the gentle wisdom of A.A. Milne's beloved characters.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">How can these help with anxiety or stress relief?</h3>
                <p className="text-gray-600">
                  Winnie the Pooh's peaceful, gentle nature makes these pages perfect for calming activities. The
                  repetitive motion of coloring, combined with beloved characters and positive themes, helps reduce
                  anxiety and promote mindfulness for both children and adults.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Hundred Acre Wood Adventure!</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Join Pooh Bear and friends for endless coloring fun. Download your favorite pages and let the magic of the
              Hundred Acre Wood inspire creativity and joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Free PDF Collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
              >
                <Gift className="h-5 w-5 mr-2" />
                Create Custom Coloring Book
              </Button>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">More Beloved Character Coloring Pages</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Bluey Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Bluey Coloring Pages</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Join Bluey and Bingo in their imaginative family adventures
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Link href="/bluey-coloring-pages">Color Bluey</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Pokemon Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Pokemon Coloring Pages</h3>
                  <p className="text-gray-600 text-sm mb-4">Catch 'em all with Pikachu and Pokemon friends</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Link href="/pokemon-coloring-pages">Color Pokemon</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Happy Birthday Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Birthday Coloring Pages</h3>
                  <p className="text-gray-600 text-sm mb-4">Celebrate special days with birthday-themed fun</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Link href="/happy-birthday-coloring-pages">Color Birthdays</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Winnie the Pooh Coloring Pages | Free Printable PDF & Activities",
              description:
                "Free Winnie the Pooh coloring pages! Print Pooh Bear, Piglet, Tigger & friends. Perfect for toddlers & adults. Birthday themes, cute designs & educational fun.",
              keywords:
                "Winnie the Pooh coloring pages, printable PDF, coloring book, birthday, free printables, adults, cute, toddlers, Pooh Bear, Piglet, Tigger, Eeyore",
              image: "/placeholder.svg?height=630&width=1200",
              url: "https://drawgle.in/winnie-the-pooh-coloring-pages",
              mainEntity: {
                "@type": "CreativeWork",
                name: "Winnie the Pooh Coloring Pages Collection",
                creator: {
                  "@type": "Organization",
                  name: "Drawgle",
                },
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
              },
            }),
          }}
        />
      </div>
    </div>
  )
}
