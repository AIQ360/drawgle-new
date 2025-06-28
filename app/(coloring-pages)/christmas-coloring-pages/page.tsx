import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download, Star, Users, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Christmas Coloring Pages - Festive Holiday Printables for Kids & Adults",
  description:
    "Download free printable Christmas coloring pages featuring Santa, reindeer, ornaments, nativity scenes, and more festive holiday designs for all ages.",
  openGraph: {
    title: "Christmas Coloring Pages - Festive Holiday Printables",
    description:
      "Discover 100+ free printable Christmas coloring pages with Santa, reindeer, ornaments, and festive holiday designs for kids and adults.",
    images: [
      {
        url: "/placeholder.svg?key=kpx51",
        width: 1200,
        height: 630,
        alt: "Christmas Coloring Pages Collection",
      },
    ],
  },
}

export default function ChristmasColoringPages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50">
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
                Christmas Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Free Christmas
              <br />
              <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Coloring Pages
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover 300+ professionally designed Christmas coloring pages featuring Santa, nativity scenes, winter
              wonderlands, and festive characters. Perfect for family bonding, classroom activities, and creating
              magical holiday memories.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">300+ Designs</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">All Ages</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">HD Quality</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Instant Download</span>
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
                  Create Christmas Pages
                </Button>
              </Link>
              <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-pastel-pink/30 hover:border-pastel-pink px-8 py-6 text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300 bg-transparent"
              >
                Free Coloring Pages
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
                <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
                <div className="text-gray-600">Coloring Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9★</div>
                <div className="text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Christmas Coloring Pages Matter */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Christmas Coloring Pages Are Essential for Holiday Learning
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Christmas coloring pages offer far more than entertainment. They're powerful educational tools that
              combine creativity with learning, helping children develop essential skills while celebrating holiday
              traditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cognitive Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Pattern Recognition:</strong> Christmas designs teach visual patterns and symmetry
                </li>
                <li>
                  • <strong>Color Theory:</strong> Traditional holiday colors enhance understanding of color
                  relationships
                </li>
                <li>
                  • <strong>Cultural Awareness:</strong> Learn about Christmas traditions worldwide
                </li>
                <li>
                  • <strong>Attention Span:</strong> Detailed designs improve focus and concentration
                </li>
                <li>
                  • <strong>Memory Skills:</strong> Remembering color choices and design elements
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social & Emotional Growth</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Family Bonding:</strong> Shared coloring time creates lasting memories
                </li>
                <li>
                  • <strong>Stress Relief:</strong> Calming activity during busy holiday season
                </li>
                <li>
                  • <strong>Self-Expression:</strong> Personal color choices reflect individual creativity
                </li>
                <li>
                  • <strong>Confidence Building:</strong> Completing pages provides sense of accomplishment
                </li>
                <li>
                  • <strong>Patience Development:</strong> Learning to work slowly and carefully
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Physical Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Fine Motor Skills:</strong> Precise coloring movements strengthen hand muscles
                </li>
                <li>
                  • <strong>Hand-Eye Coordination:</strong> Coordinating vision with hand movements
                </li>
                <li>
                  • <strong>Pencil Grip:</strong> Proper tool holding prepares for writing
                </li>
                <li>
                  • <strong>Bilateral Coordination:</strong> Using both hands together effectively
                </li>
                <li>
                  • <strong>Spatial Awareness:</strong> Understanding boundaries and proportions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Christmas Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Christmas Coloring Collection</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our carefully curated collection covers every aspect of Christmas, from traditional religious themes to
              modern holiday fun. Each category is designed with age-appropriate complexity levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Santa & North Pole */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-red-50 to-red-100">
                <Image src="/placeholder.svg?key=santa" alt="Santa Coloring Pages" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  45+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Santa & North Pole Adventures</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Jolly Santa Claus, his magical workshop, busy elves, and Christmas Eve adventures. Perfect for
                  building excitement about Christmas magic.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Santa portraits & full-body designs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Workshop scenes with elves</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Reindeer & sleigh adventures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>North Pole landscapes</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Explore Santa Collection
                </Button>
              </CardContent>
            </Card>

            {/* Nativity & Religious */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src="/placeholder.svg?key=nativity"
                  alt="Nativity Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  30+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nativity & Religious Themes</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Beautiful nativity scenes and religious Christmas imagery. Perfect for teaching the spiritual meaning
                  of Christmas.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Traditional nativity scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Angels & shepherds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Three wise men journey</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Star of Bethlehem designs</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Browse Religious Pages
                </Button>
              </CardContent>
            </Card>

            {/* Christmas Trees */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100">
                <Image
                  src="/placeholder.svg?key=trees"
                  alt="Christmas Tree Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  40+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Christmas Trees & Decorations</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Beautifully decorated Christmas trees, ornaments, and festive decorations. Great for learning about
                  holiday traditions.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Decorated Christmas trees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Ornament collections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Holiday wreaths & garlands</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Festive home decorations</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  View Tree Designs
                </Button>
              </CardContent>
            </Card>

            {/* Winter Wonderland */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-cyan-50 to-cyan-100">
                <Image
                  src="/placeholder.svg?key=winter"
                  alt="Winter Scene Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  35+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Winter Wonderland Scenes</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Magical winter landscapes and cozy holiday scenes. Perfect for teaching about seasons and weather.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Snowy landscapes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Cozy winter cabins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Forest & wildlife scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Holiday village settings</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Explore Winter Scenes
                </Button>
              </CardContent>
            </Card>

            {/* Christmas Characters */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-purple-50 to-purple-100">
                <Image src="/placeholder.svg?key=characters" alt="Christmas Characters" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  50+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Beloved Christmas Characters</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Friendly snowmen, reindeer, and gingerbread families. Great for developing storytelling skills.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Jolly snowmen families</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Reindeer & forest friends</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Gingerbread people</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Holiday animal characters</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Meet the Characters
                </Button>
              </CardContent>
            </Card>

            {/* Christmas Gifts */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-pink-50 to-pink-100">
                <Image src="/placeholder.svg?key=gifts" alt="Christmas Gifts" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  25+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Christmas Gifts & Giving</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Beautiful presents and gift-giving scenes. Perfect for teaching about generosity and kindness.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Wrapped gift boxes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Christmas stockings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Gift-giving scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Holiday shopping themes</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Discover Gift Pages
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Age-Specific Guide */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect Christmas Coloring Pages for Every Age</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our collection is scientifically designed to match developmental stages, ensuring every child gets the
                perfect challenge level for optimal learning and enjoyment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2-4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Toddler Christmas Magic</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Extra-large designs with thick lines perfect for developing fine motor skills and Christmas
                    excitement.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Simple Santa faces (3-inch borders)</li>
                    <li>• Large Christmas trees</li>
                    <li>• Basic reindeer shapes</li>
                    <li>• Big Christmas stockings</li>
                    <li>• Single-focus designs</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Develops:</strong> Hand-eye coordination, color recognition, Christmas vocabulary
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">5-8</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Elementary Christmas Fun</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Moderately detailed scenes that challenge growing skills while teaching Christmas traditions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Santa's workshop scenes</li>
                    <li>• Nativity with multiple figures</li>
                    <li>• Decorated Christmas villages</li>
                    <li>• Reindeer families</li>
                    <li>• Educational elements included</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Develops:</strong> Attention to detail, cultural awareness, patience, storytelling
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">9+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Christmas Art</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Intricate designs and mandala patterns for advanced colorists seeking relaxation and challenge.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Christmas mandala patterns</li>
                    <li>• Detailed winter landscapes</li>
                    <li>• Complex nativity illustrations</li>
                    <li>• Ornate ornament designs</li>
                    <li>• Therapeutic complexity</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Benefits:</strong> Stress relief, mindfulness, artistic expression, focus improvement
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Science Behind Christmas Coloring Education</h2>
              <p className="text-lg text-gray-600">
                Research-backed benefits that make Christmas coloring pages powerful learning tools for child
                development and family bonding.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Integration Opportunities</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Mathematics Through Christmas</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Counting:</strong> Ornaments, reindeer, presents, stars
                      </li>
                      <li>
                        • <strong>Patterns:</strong> Wrapping paper designs, snowflake symmetry
                      </li>
                      <li>
                        • <strong>Geometry:</strong> Christmas tree triangles, ornament circles
                      </li>
                      <li>
                        • <strong>Measurement:</strong> Comparing sizes of gifts and decorations
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Language Arts Enhancement</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Vocabulary:</strong> Christmas-specific terms and traditions
                      </li>
                      <li>
                        • <strong>Storytelling:</strong> Creating narratives about colored scenes
                      </li>
                      <li>
                        • <strong>Reading Comprehension:</strong> Following coloring instructions
                      </li>
                      <li>
                        • <strong>Creative Writing:</strong> Describing Christmas scenes and characters
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Social Studies Connection</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Cultural Traditions:</strong> Christmas celebrations worldwide
                      </li>
                      <li>
                        • <strong>Historical Context:</strong> Origins of Christmas symbols
                      </li>
                      <li>
                        • <strong>Geography:</strong> Where different traditions come from
                      </li>
                      <li>
                        • <strong>Community:</strong> How families and communities celebrate
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Therapeutic & Wellness Benefits</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Stress Reduction During Holidays</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Mindfulness:</strong> Present-moment focus reduces anxiety
                      </li>
                      <li>
                        • <strong>Breathing:</strong> Rhythmic coloring promotes calm breathing
                      </li>
                      <li>
                        • <strong>Digital Detox:</strong> Screen-free time for mental health
                      </li>
                      <li>
                        • <strong>Routine:</strong> Predictable activity amid holiday chaos
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Family Bonding Enhancement</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Quality Time:</strong> Shared activity without distractions
                      </li>
                      <li>
                        • <strong>Communication:</strong> Natural conversation starters
                      </li>
                      <li>
                        • <strong>Tradition Building:</strong> Annual coloring memories
                      </li>
                      <li>
                        • <strong>Multi-generational:</strong> Activity for all ages together
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Special Needs Support</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>ADHD:</strong> Improves focus and attention span
                      </li>
                      <li>
                        • <strong>Autism:</strong> Provides calming sensory input
                      </li>
                      <li>
                        • <strong>Anxiety:</strong> Reduces worry through focused activity
                      </li>
                      <li>
                        • <strong>Motor Skills:</strong> Supports physical therapy goals
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
                  Complete Christmas Coloring Implementation Guide
                </h2>
                <p className="text-lg text-gray-600">
                  Professional strategies for parents, teachers, and caregivers to maximize the educational and
                  therapeutic benefits of Christmas coloring activities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">For Parents: Creating Christmas Traditions</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Daily Advent Coloring</h4>
                      <p className="text-gray-600 mb-3">
                        Create a 25-day Christmas countdown using our coloring pages. Each day, children color a new
                        page, building excitement for Christmas while developing daily creative habits.
                      </p>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <strong className="text-gray-900">Implementation:</strong>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Print 25 different Christmas coloring pages</li>
                          <li>• Number them 1-25 for countdown</li>
                          <li>• Set aside 15-20 minutes each evening</li>
                          <li>• Display completed pages as decorations</li>
                          <li>• Create a special Christmas coloring box</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Christmas Card Creation</h4>
                      <p className="text-gray-600 mb-3">
                        Transform coloring pages into personalized Christmas cards for family and friends, teaching
                        children about giving and thoughtfulness.
                      </p>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <strong className="text-gray-900">Materials Needed:</strong>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Cardstock paper for printing</li>
                          <li>• Quality colored pencils or markers</li>
                          <li>• Glue sticks for assembly</li>
                          <li>• Envelopes for mailing</li>
                          <li>• Optional: glitter, stickers, ribbon</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">For Teachers: Classroom Integration</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Cross-Curricular Christmas Learning</h4>
                      <p className="text-gray-600 mb-3">
                        Integrate Christmas coloring into multiple subjects for comprehensive holiday education that
                        meets curriculum standards.
                      </p>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <strong className="text-gray-900">Subject Integration:</strong>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>
                            • <strong>Math:</strong> Count ornaments, measure trees, create patterns
                          </li>
                          <li>
                            • <strong>Science:</strong> Study snowflake formation, winter animals
                          </li>
                          <li>
                            • <strong>Social Studies:</strong> Explore global Christmas traditions
                          </li>
                          <li>
                            • <strong>Language Arts:</strong> Write stories about colored scenes
                          </li>
                          <li>
                            • <strong>Art:</strong> Learn color theory through Christmas colors
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Classroom Management with Coloring</h4>
                      <p className="text-gray-600 mb-3">
                        Use Christmas coloring pages as effective classroom management tools during the exciting holiday
                        season.
                      </p>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <strong className="text-gray-900">Strategies:</strong>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Quiet time activity during transitions</li>
                          <li>• Reward system for completed work</li>
                          <li>• Indoor recess during winter weather</li>
                          <li>• Calming activity before tests</li>
                          <li>• Early finisher enrichment activity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Pages Preview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Most Popular Christmas Coloring Pages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our top-rated Christmas coloring pages, loved by families and educators worldwide for their
              perfect balance of fun and educational value.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Santa's Workshop", downloads: "15K+", rating: "4.9" },
              { title: "Nativity Scene", downloads: "12K+", rating: "4.8" },
              { title: "Christmas Tree", downloads: "18K+", rating: "4.9" },
              { title: "Reindeer Family", downloads: "14K+", rating: "4.7" },
              { title: "Gingerbread House", downloads: "11K+", rating: "4.8" },
              { title: "Christmas Stockings", downloads: "13K+", rating: "4.9" },
              { title: "Winter Village", downloads: "10K+", rating: "4.6" },
              { title: "Angel Choir", downloads: "9K+", rating: "4.8" },
            ].map((page, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-xl overflow-hidden hover:border-pastel-pink/40 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={`/placeholder.svg?key=featured${i}`}
                    alt={`${page.title} Christmas Coloring Page`}
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
                Everything You Need to Know About Christmas Coloring Pages
              </h2>
              <p className="text-lg text-gray-600">
                Expert answers to the most common questions about using Christmas coloring pages for education, therapy,
                and family fun.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do Christmas coloring pages support child development during the holiday season?",
                  answer:
                    "Christmas coloring pages provide unique developmental benefits by combining seasonal excitement with structured learning activities. They enhance fine motor skills through precise coloring movements, develop cultural awareness through exposure to holiday traditions, improve focus and attention span during a typically overstimulating season, and create opportunities for family bonding and conversation. The familiar Christmas imagery helps children process holiday emotions while building artistic confidence and creative expression skills.",
                },
                {
                  question: "What makes Christmas coloring pages effective educational tools for different age groups?",
                  answer:
                    "Christmas coloring pages are educationally effective because they can be adapted to any developmental level while maintaining engaging holiday themes. For toddlers (2-4), simple designs with thick lines develop basic motor skills and color recognition. Preschoolers (4-6) benefit from moderate complexity that teaches pattern recognition and cultural concepts. Elementary children (6-10) engage with detailed scenes that support academic subjects like math (counting ornaments), geography (global traditions), and language arts (storytelling). The Christmas theme provides natural motivation and cultural relevance across all age groups.",
                },
                {
                  question:
                    "How can teachers integrate Christmas coloring pages into curriculum standards and lesson plans?",
                  answer:
                    "Teachers can seamlessly integrate Christmas coloring pages across multiple curriculum areas. In mathematics, use ornament counting, pattern recognition in wrapping paper designs, and geometric shape identification in Christmas trees and stars. For language arts, encourage creative writing about colored scenes, vocabulary development with Christmas terms, and reading comprehension through coloring instructions. Social studies integration includes exploring global Christmas traditions, historical context of holiday symbols, and community celebration studies. Science connections involve winter weather patterns, animal adaptations, and seasonal changes. Art education naturally incorporates color theory, cultural art styles, and artistic expression techniques.",
                },
                {
                  question:
                    "What therapeutic benefits do Christmas coloring pages provide for stress management during holidays?",
                  answer:
                    "Christmas coloring pages offer significant therapeutic benefits during the often stressful holiday season. The repetitive, focused nature of coloring activates the brain's relaxation response, reducing cortisol levels and promoting calm. For children, coloring provides a predictable, controllable activity amid holiday excitement and schedule changes. Adults benefit from mindfulness practice, digital detox opportunities, and meditative focus. The familiar Christmas imagery can evoke positive memories and emotions while providing a healthy outlet for holiday anxiety. Coloring together as a family creates bonding opportunities and shared calm experiences during busy holiday preparations.",
                },
                {
                  question:
                    "How should parents choose age-appropriate Christmas coloring pages for optimal learning outcomes?",
                  answer:
                    "Parents should select Christmas coloring pages based on their child's developmental stage rather than chronological age alone. Observe your child's current fine motor skills, attention span, and interest level. For developing skills, choose pages with slightly larger spaces and simpler designs. For advanced colorists, select more detailed scenes with educational elements. Consider your child's interests - some prefer character-focused pages while others enjoy scenic landscapes. Rotate between different complexity levels to provide appropriate challenges without frustration. Always prioritize enjoyment over perfection, as positive associations with creative activities support long-term learning motivation.",
                },
                {
                  question:
                    "What are the best practices for printing and preparing Christmas coloring pages for optimal results?",
                  answer:
                    "For best results, print Christmas coloring pages on white cardstock (65-80lb weight) for durability and better color absorption. Use high-quality print settings to ensure crisp, clear lines. Print at 100% scale to maintain proper proportions and line thickness. Check printer ink levels before printing multiple pages to ensure consistent quality. Store printed pages flat in a portfolio or folder to prevent curling. For classroom use, consider laminating pages for reusable dry-erase coloring activities. Create organized storage systems with labeled folders for different themes and age groups. Always test print one page first to verify quality and adjust settings if needed.",
                },
                {
                  question:
                    "How can Christmas coloring pages be used to create meaningful family traditions and holiday memories?",
                  answer:
                    "Christmas coloring pages can anchor beautiful family traditions that create lasting holiday memories. Establish annual traditions like Christmas Eve coloring time, advent calendar coloring activities, or family coloring competitions. Create yearly Christmas coloring books with family photos and completed artwork to document children's growth and artistic development. Use completed pages to make personalized Christmas cards, gift tags, or holiday decorations that become treasured keepsakes. Involve grandparents and extended family in coloring sessions to strengthen intergenerational bonds and share family Christmas stories. Document the coloring process with photos to create holiday scrapbooks that capture both the artwork and the joy of creating together.",
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Holiday Coloring Pages</h2>
            <p className="text-gray-600">
              Discover our complete collection of seasonal and holiday coloring activities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Winter Scenes", subtitle: "Snowy landscapes & fun", href: "/winter-coloring-pages" },
              { title: "Holiday Collection", subtitle: "All seasonal celebrations", href: "/holiday-coloring-pages" },
              { title: "New Year's", subtitle: "Celebration themes", href: "/new-years-coloring-pages" },
              { title: "Religious Themes", subtitle: "Spiritual designs", href: "/religious-coloring-pages" },
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
            <h2 className="text-4xl font-bold mb-4">Start Your Christmas Coloring Adventure Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of families creating magical Christmas memories with our premium coloring collection.
              Download instantly and start coloring in minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-pastel-pink hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Christmas Pack
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
              <span>✨ 300+ pages • All ages • Instant download • No signup required</span>
            </div>
          </div>
        </section>

  
      </div>
    </div>
  )
}
