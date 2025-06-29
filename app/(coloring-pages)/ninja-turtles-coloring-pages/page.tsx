import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Download, Heart, Star, Users, Palette, BookOpen, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Ninja Turtles Coloring Pages | Free TMNT Printables | Drawgle",
  description:
    "Free Teenage Mutant Ninja Turtles coloring pages! Print Leonardo, Donatello, Raphael & Michelangelo. Perfect for kids & adults. Easy PDF downloads.",
  openGraph: {
    title: "Ninja Turtles Coloring Pages | Free TMNT Printables",
    description:
      "Free Teenage Mutant Ninja Turtles coloring pages! Print Leonardo, Donatello, Raphael & Michelangelo. Perfect for kids & adults.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Ninja Turtles Coloring Pages Collection",
      },
    ],
  },
}

export default function NinjaTurtlesColoringPages() {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50 relative">
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
                Ninja Turtles Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                Ninja Turtles Coloring Pages
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Cowabunga! Join Leonardo, Donatello, Raphael, and Michelangelo in epic coloring adventures. Free
                printable TMNT pages for heroes of all ages!
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  🐢 All 4 Turtles
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  📄 PDF Downloads
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  🎨 Adult Designs
                </div>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  ⚡ Easy Print
                </div>
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">🆓 100% Free</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Free Pages
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                >
                  <Palette className="h-5 w-5 mr-2" />
                  View All Categories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Turtle Characters Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet the Teenage Mutant Ninja Turtles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Leonardo */}
              <Card className="bg-white/60 backdrop-blur-sm border border-blue-200 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Leonardo Ninja Turtle Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Color Leo
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Leonardo</h3>
                  <p className="text-gray-600 mb-4">The leader in blue with twin katanas</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>🗡️ Leader</span>
                    <span>💙 Blue</span>
                  </div>
                </CardContent>
              </Card>

              {/* Donatello */}
              <Card className="bg-white/60 backdrop-blur-sm border border-purple-200 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Donatello Ninja Turtle Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Color Donnie
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">Donatello</h3>
                  <p className="text-gray-600 mb-4">The tech genius in purple with his bo staff</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>🔧 Tech Expert</span>
                    <span>💜 Purple</span>
                  </div>
                </CardContent>
              </Card>

              {/* Raphael */}
              <Card className="bg-white/60 backdrop-blur-sm border border-red-200 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Raphael Ninja Turtle Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Color Raph
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-red-600">Raphael</h3>
                  <p className="text-gray-600 mb-4">The tough guy in red with twin sai</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>⚔️ Fighter</span>
                    <span>❤️ Red</span>
                  </div>
                </CardContent>
              </Card>

              {/* Michelangelo */}
              <Card className="bg-white/60 backdrop-blur-sm border border-orange-200 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Michelangelo Ninja Turtle Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Color Mikey
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">Michelangelo</h3>
                  <p className="text-gray-600 mb-4">The party dude in orange with nunchucks</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>🍕 Fun Guy</span>
                    <span>🧡 Orange</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Age-Specific Categories */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect for Every Ninja Age</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Easy for Kids */}
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4-8</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Little Ninjas</h3>
                <p className="text-gray-600 mb-4">
                  Simple TMNT designs with big shapes and thick lines. Perfect for young turtle fans learning to color!
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Big, easy shapes</li>
                  <li>• Simple turtle poses</li>
                  <li>• Great for crayons</li>
                  <li>• Basic action scenes</li>
                </ul>
               
              </div>

              {/* Medium for Tweens */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">9-14</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Teenage Ninjas</h3>
                <p className="text-gray-600 mb-4">
                  Action-packed scenes with the turtles fighting villains and protecting New York City!
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Action battle scenes</li>
                  <li>• Detailed weapons</li>
                  <li>• City backgrounds</li>
                  <li>• Villain encounters</li>
                </ul>
           
              </div>

              {/* Complex for Adults */}
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">15+</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Master Ninjas</h3>
                <p className="text-gray-600 mb-4">
                  Intricate designs with detailed patterns, complex scenes, and artistic interpretations for serious
                  colorists.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Detailed artwork</li>
                  <li>• Complex patterns</li>
                  <li>• Artistic designs</li>
                  <li>• Stress relief focus</li>
                </ul>
              
              </div>
            </div>
          </div>
        </section>

        {/* Educational Benefits */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Why TMNT Coloring is Awesome for Development</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
                  Character & Social Development
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Teamwork Values</h4>
                      <p className="text-gray-600">
                        Learn about cooperation, brotherhood, and working together like the turtle brothers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Leadership Skills</h4>
                      <p className="text-gray-600">
                        Explore different leadership styles through Leonardo's guidance and responsibility
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Problem Solving</h4>
                      <p className="text-gray-600">
                        Develop critical thinking through Donatello's inventive and analytical approach
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Palette className="h-6 w-6 mr-2 text-purple-600" />
                  Creative & Cognitive Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Color Theory Mastery</h4>
                      <p className="text-gray-600">
                        Learn color combinations through each turtle's signature colors and their meanings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Fine Motor Skills</h4>
                      <p className="text-gray-600">
                        Improve hand-eye coordination through detailed weapon and shell pattern coloring
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Stress Relief</h4>
                      <p className="text-gray-600">
                        Channel Michelangelo's fun-loving spirit for relaxation and anxiety reduction
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
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect Printing Guide for TMNT Pages</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">📄 Paper & Print Settings</h3>
                <div className="space-y-3">
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Best Paper Types</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Kids (4-8):</strong> Regular copy paper (20lb)
                      </li>
                      <li>
                        • <strong>Tweens (9-14):</strong> Cardstock (65lb) for durability
                      </li>
                      <li>
                        • <strong>Adults (15+):</strong> Premium cardstock (80lb+)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Print Quality Settings</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Resolution:</strong> 300 DPI minimum
                      </li>
                      <li>
                        • <strong>Color:</strong> Black & white for coloring
                      </li>
                      <li>
                        • <strong>Size:</strong> Standard 8.5" x 11" (Letter)
                      </li>
                      <li>
                        • <strong>Orientation:</strong> Portrait for most designs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">🎨 Coloring Supply Recommendations</h3>
                <div className="space-y-3">
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Age-Appropriate Supplies</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Ages 4-8:</strong> Chunky crayons, washable markers
                      </li>
                      <li>
                        • <strong>Ages 9-14:</strong> Colored pencils, fine-tip markers
                      </li>
                      <li>
                        • <strong>Ages 15+:</strong> Professional pencils, gel pens
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">TMNT Color Palette</h4>
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-1"></div>
                        <span className="text-xs">Leo Blue</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-1"></div>
                        <span className="text-xs">Donnie Purple</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-1"></div>
                        <span className="text-xs">Raph Red</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-1"></div>
                        <span className="text-xs">Mikey Orange</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive FAQ */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/40 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">Are these Ninja Turtles coloring pages free?</h3>
                    <p className="text-gray-600">
                      Yes! All our TMNT coloring pages are completely free to download and print. No registration or
                      payment required.
                    </p>
                  </div>

                  <div className="bg-white/40 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">Do you have PDF versions available?</h3>
                    <p className="text-gray-600">
                      All our Ninja Turtles pages are available in high-quality PDF format for perfect printing at home.
                    </p>
                  </div>

                  <div className="bg-white/40 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">Which turtle is best for beginners?</h3>
                    <p className="text-gray-600">
                      Michelangelo pages are often easiest for young kids due to his fun, simple poses. Leonardo pages
                      are great for learning leadership themes.
                    </p>
                  </div>

                  <div className="bg-white/40 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">Are there easy TMNT pages for toddlers?</h3>
                    <p className="text-gray-600">
                      Yes! We have simple, large-outline designs perfect for ages 3-5 with basic turtle shapes and
                      minimal details.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/40 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">Do you have adult TMNT coloring pages?</h3>
                    <p className="text-gray-600">
                      Yes! We offer intricate, detailed designs perfect for adult colorists, featuring complex patterns
                      and artistic interpretations.
                    </p>
                  </div>

                  <div className="bg-white/40 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">Can I use these for educational purposes?</h3>
                    <p className="text-gray-600">
                      These pages are perfect for teaching teamwork, character development, and color theory in
                      classrooms.
                    </p>
                  </div>

                  <div className="bg-white/40 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">What's the best way to color turtle shells?</h3>
                    <p className="text-gray-600">
                      Use green as the base color, then add darker green or brown for shell patterns. Yellow-green
                      highlights make shells look more realistic.
                    </p>
                  </div>

                  <div className="bg-white/40 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">Are these suitable for therapy or special needs?</h3>
                    <p className="text-gray-600">
                      Yes! TMNT coloring can help with focus, anxiety reduction, and social skill development through
                      character identification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-green-100 to-orange-100 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Turtle Power?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Cowabunga! Download these awesome TMNT coloring pages and start your ninja adventure today. Perfect for
              heroes of all ages!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0"
              >
                <Download className="h-5 w-5 mr-2" />
                Create Free TMNT Pages
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
              >
                <Link href="/coloring-pages-for-kids">Explore More Heroes</Link>
              </Button>
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
              name: "Ninja Turtles Coloring Pages | Free TMNT Printables",
              description:
                "Free Teenage Mutant Ninja Turtles coloring pages! Print Leonardo, Donatello, Raphael & Michelangelo. Perfect for kids & adults. Easy PDF downloads.",
              keywords:
                "ninja turtles coloring pages, TMNT coloring pages, teenage mutant ninja turtles printable, Leonardo coloring pages, Raphael coloring pages, Michelangelo coloring pages, Donatello coloring pages, free ninja turtles PDF",
              image: "/placeholder.svg?height=630&width=1200",
              url: "https://drawgle.in/ninja-turtles-coloring-pages",
              mainEntity: {
                "@type": "CreativeWork",
                name: "Ninja Turtles Coloring Pages Collection",
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
