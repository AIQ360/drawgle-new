import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Download, Heart, Star, Users, Zap, Shield, Flame, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Godzilla Coloring Pages | Free Printable Kaiju Monster Fun | Drawgle",
  description:
    "Free Godzilla coloring pages for kids and adults! Print Legendary, Shin, Evolved, and Burning Godzilla. Perfect for monster fans ages 6+. High-quality PDF downloads.",
  openGraph: {
    title: "Godzilla Coloring Pages | Free Printable Kaiju Monster Fun",
    description:
      "Free Godzilla coloring pages for kids and adults! Print Legendary, Shin, Evolved, and Burning Godzilla. Perfect for monster fans ages 6+.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Godzilla Coloring Pages Collection",
      },
    ],
  },
}

export default function GodzillaColoringPages() {
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
                Godzilla Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-green-600 to-blue-600 bg-clip-text text-transparent">
                Godzilla Coloring Pages
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Unleash your creativity with the King of Monsters! Print and color epic Godzilla adventures from classic
                to modern kaiju battles.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full text-sm font-medium text-green-800 border border-green-300">
                  <Zap className="h-4 w-4 inline mr-2" />
                  All Godzilla Versions
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full text-sm font-medium text-blue-800 border border-blue-300">
                  <Shield className="h-4 w-4 inline mr-2" />
                  High-Quality PDF
                </div>
                <div className="bg-gradient-to-r from-red-100 to-red-200 px-4 py-2 rounded-full text-sm font-medium text-red-800 border border-red-300">
                  <Flame className="h-4 w-4 inline mr-2" />
                  Burning Godzilla
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 rounded-full text-sm font-medium text-purple-800 border border-purple-300">
                  <Eye className="h-4 w-4 inline mr-2" />
                  Realistic Details
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Perfect for monster fans</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Easy to print at home</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>Great for all skill levels</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">400+</div>
                <div className="text-gray-600">Godzilla Pages</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">15</div>
                <div className="text-gray-600">Godzilla Versions</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">100%</div>
                <div className="text-gray-600">Free to Print</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">24/7</div>
                <div className="text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Godzilla Categories */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Epic Godzilla Collection</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Legendary Godzilla */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Legendary Godzilla Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Now
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Legendary Godzilla</h3>
                  <p className="text-gray-600 mb-4">Modern MonsterVerse Godzilla with incredible detail</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Ages 8+</span>
                    <span>50+ Pages</span>
                  </div>
                </CardContent>
              </Card>

              {/* Evolved Godzilla */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Evolved Godzilla Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Now
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Evolved Godzilla</h3>
                  <p className="text-gray-600 mb-4">Latest 2024 pink-powered evolution form</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Ages 10+</span>
                    <span>40+ Pages</span>
                  </div>
                </CardContent>
              </Card>

              {/* Shin Godzilla */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Shin Godzilla Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Now
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Shin Godzilla</h3>
                  <p className="text-gray-600 mb-4">Unique Japanese reimagining with intricate details</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Ages 12+</span>
                    <span>35+ Pages</span>
                  </div>
                </CardContent>
              </Card>

              {/* Burning Godzilla */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Burning Godzilla Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Now
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Burning Godzilla</h3>
                  <p className="text-gray-600 mb-4">Fiery nuclear-powered form with glowing effects</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Ages 9+</span>
                    <span>45+ Pages</span>
                  </div>
                </CardContent>
              </Card>

              {/* Classic Godzilla */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Classic Godzilla Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Now
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Classic Godzilla</h3>
                  <p className="text-gray-600 mb-4">Original 1954 design and Showa era versions</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Ages 6+</span>
                    <span>60+ Pages</span>
                  </div>
                </CardContent>
              </Card>

              {/* Realistic Godzilla */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Realistic Godzilla Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Now
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Realistic Godzilla</h3>
                  <p className="text-gray-600 mb-4">Highly detailed anatomical and textured designs</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Ages 14+</span>
                    <span>30+ Pages</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Age-Specific Recommendations */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect for Every Monster Fan</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">6-10</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Young Kaiju Fans</h3>
                <p className="text-gray-600 mb-4">
                  Simple Godzilla designs with bold outlines and basic city scenes. Perfect for developing motor skills
                  and creativity!
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Big, clear shapes</li>
                  <li>• Simple city backgrounds</li>
                  <li>• Classic Godzilla poses</li>
                  <li>• Easy atomic breath effects</li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">11-16</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Monster Movie Fans</h3>
                <p className="text-gray-600 mb-4">
                  Detailed battle scenes with multiple kaiju, destruction effects, and movie-accurate designs from all
                  eras!
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Epic battle scenes</li>
                  <li>• Multiple Godzilla forms</li>
                  <li>• Detailed city destruction</li>
                  <li>• Other kaiju opponents</li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">17+</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Adult Collectors</h3>
                <p className="text-gray-600 mb-4">
                  Intricate, realistic designs with fine details, anatomical accuracy, and artistic interpretations for
                  serious coloring!
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Photorealistic details</li>
                  <li>• Complex textures</li>
                  <li>• Artistic interpretations</li>
                  <li>• Stress-relief designs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Benefits */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Godzilla Coloring is Amazing</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">🎨 Creative & Artistic Development</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Color Theory Mastery</h4>
                      <p className="text-gray-600">
                        Learn about dramatic color schemes, lighting effects, and how to create mood through color
                        choices in monster scenes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Detail & Texture Work</h4>
                      <p className="text-gray-600">
                        Develop fine motor skills through intricate scale patterns, city details, and special effects
                        like atomic breath.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Artistic Expression</h4>
                      <p className="text-gray-600">
                        Express creativity through personal interpretations of the King of Monsters and create unique
                        artistic visions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">🧠 Cognitive & Emotional Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Stress Relief & Focus</h4>
                      <p className="text-gray-600">
                        Meditative coloring reduces anxiety and improves concentration through repetitive, calming
                        motions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-yellow-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Cultural Appreciation</h4>
                      <p className="text-gray-600">
                        Learn about Japanese cinema, monster movie history, and the cultural significance of kaiju
                        films.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Problem-Solving Skills</h4>
                      <p className="text-gray-600">
                        Decide color combinations, plan shading techniques, and solve artistic challenges in complex
                        scenes.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect Printing Guide</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">📄 Paper & Print Settings</h3>
                <div className="space-y-3">
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Best Paper Types</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Standard:</strong> 20lb copy paper for everyday coloring
                      </li>
                      <li>
                        • <strong>Premium:</strong> 24lb paper for better color absorption
                      </li>
                      <li>
                        • <strong>Cardstock:</strong> Heavy paper for special projects
                      </li>
                      <li>
                        • <strong>Marker Paper:</strong> Bleed-proof for alcohol markers
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Print Settings</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Quality: High or Best</li>
                      <li>• Color: Black & White</li>
                      <li>• Size: Letter (8.5" x 11")</li>
                      <li>• Orientation: Portrait</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">🎨 Coloring Supplies</h3>
                <div className="space-y-3">
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Recommended Supplies</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Beginners:</strong> Crayola crayons or colored pencils
                      </li>
                      <li>
                        • <strong>Intermediate:</strong> Prismacolor pencils or gel pens
                      </li>
                      <li>
                        • <strong>Advanced:</strong> Alcohol markers or watercolors
                      </li>
                      <li>
                        • <strong>Adults:</strong> Fine-tip markers for details
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Godzilla Color Tips</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Classic: Dark green with lighter belly</li>
                      <li>• Burning: Orange/red glow effects</li>
                      <li>• Evolved: Pink/magenta energy</li>
                      <li>• Realistic: Gray-green with texture</li>
                    </ul>
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

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">Are these Godzilla coloring pages free to print?</h3>
                <p className="text-gray-600">
                  Yes! All our Godzilla coloring pages are completely free to download and print at home. We offer
                  high-quality PDF files that print perfectly on standard home printers.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">Do you have all the different Godzilla versions?</h3>
                <p className="text-gray-600">
                  We feature Legendary Godzilla, Evolved Godzilla (2024), Shin Godzilla, Burning Godzilla, classic Showa
                  era designs, and realistic interpretations. Each version captures the unique characteristics of
                  different movie eras.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">Are these suitable for adults or just kids?</h3>
                <p className="text-gray-600">
                  Our collection includes pages for all ages! We have simple designs for young children (6+), detailed
                  action scenes for teens, and intricate realistic designs perfect for adult coloring enthusiasts and
                  stress relief.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">What's special about the 2024 Godzilla pages?</h3>
                <p className="text-gray-600">
                  Our 2024 collection features the latest Evolved Godzilla with his pink atomic powers from "Godzilla x
                  Kong: The New Empire," plus updated Legendary designs and modern interpretations of classic kaiju
                  battles.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">Can I use these for educational purposes?</h3>
                <p className="text-gray-600">
                  Yes! These pages are perfect for teaching about Japanese culture, film history, art techniques, and
                  even science concepts like nuclear energy and evolution. Many teachers use them for creative writing
                  prompts and cultural studies.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">What makes realistic Godzilla pages different?</h3>
                <p className="text-gray-600">
                  Our realistic Godzilla pages feature anatomically detailed designs with intricate scale patterns,
                  muscle definition, and environmental details. They're perfect for advanced colorists who want a
                  challenging, meditative coloring experience.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">Do you have Godzilla fighting other monsters?</h3>
                <p className="text-gray-600">
                  Yes! We include epic battle scenes featuring Godzilla vs Kong, Godzilla vs Mechagodzilla, and other
                  classic kaiju confrontations. These action-packed pages are perfect for fans of monster movie mayhem.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">How do I get the best print quality?</h3>
                <p className="text-gray-600">
                  For best results, use high-quality print settings, 20-24lb paper, and ensure your printer has adequate
                  ink. Our PDF files are optimized for home printing and will produce crisp, clear lines perfect for
                  coloring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-gray-100 via-green-100 to-blue-100 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Unleash the King of Monsters?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Download your favorite Godzilla coloring pages now and start your epic kaiju coloring adventure! From
              classic to modern, we have every version of the legendary monster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Free PDFs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
              >
                <Link href="/dinosaur-coloring-pages">Explore More Monsters</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">More Epic Coloring Adventures</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Dinosaur Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Dinosaur Coloring Pages</h3>
                  <p className="text-gray-600 text-sm mb-4">Prehistoric giants and ancient creatures</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Link href="/dinosaur-coloring-pages">Color Dinosaurs</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Spider-Man Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Spider-Man Pages</h3>
                  <p className="text-gray-600 text-sm mb-4">Your friendly neighborhood superhero</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Link href="/spiderman-coloring-pages">Color Spider-Man</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-sm transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Pokemon Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Pokemon Pages</h3>
                  <p className="text-gray-600 text-sm mb-4">Catch 'em all with colors</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Link href="/pokemon-coloring-pages">Color Pokemon</Link>
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
              name: "Godzilla Coloring Pages | Free Printable Kaiju Monster Fun",
              description:
                "Free Godzilla coloring pages for kids and adults! Print Legendary, Shin, Evolved, and Burning Godzilla. Perfect for monster fans ages 6+. High-quality PDF downloads.",
              keywords:
                "Godzilla coloring pages, kaiju coloring pages, monster coloring pages, Legendary Godzilla, Shin Godzilla, Evolved Godzilla, Burning Godzilla, realistic Godzilla coloring pages, printable PDF",
              image: "/placeholder.svg?height=630&width=1200",
              url: "https://drawgle.in/godzilla-coloring-pages",
              mainEntity: {
                "@type": "CreativeWork",
                name: "Godzilla Coloring Pages Collection",
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
