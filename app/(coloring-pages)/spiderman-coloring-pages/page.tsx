import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download, Users, Heart, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Spider-Man Coloring Pages - Free Printable Superhero Coloring Sheets for Kids",
  description:
    "Download free printable Spider-Man coloring pages featuring Peter Parker, Miles Morales, Spider-Gwen, and amazing superhero adventures. Perfect for kids ages 3-12.",
  openGraph: {
    title: "Spider-Man Coloring Pages - Free Printable Superhero Fun",
    description:
      "Discover 300+ free printable Spider-Man coloring pages with Peter Parker, Miles Morales, Spider-Gwen, and web-slinging adventures. Perfect for superhero fans.",
    images: [
      {
        url: "/placeholder.svg?key=spiderman-collection",
        width: 1200,
        height: 630,
        alt: "Spider-Man Coloring Pages Collection",
      },
    ],
  },
}

export default function SpidermanColoringPages() {
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
                Spider-Man Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Spider-Man
              <br />
              <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                Coloring Pages
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Your friendly neighborhood Spider-Man is here! Discover 300+ amazing superhero coloring pages featuring
              Peter Parker, Miles Morales, Spider-Gwen, and web-slinging adventures perfect for young heroes.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">300+ Designs</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">All Spider-Heroes</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Ages 3-12</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Easy Print</span>
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
                <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
                <div className="text-gray-600">Spider-Man Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">85K+</div>
                <div className="text-gray-600">Happy Heroes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                <div className="text-gray-600">Spider Characters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9★</div>
                <div className="text-gray-600">Parent Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Spider-Man Coloring Pages Are Amazing */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Kids Love Spider-Man Coloring Adventures</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Spider-Man coloring pages combine superhero excitement with creative development, helping children build
              confidence while exploring themes of responsibility and helping others.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Character Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Responsibility:</strong> Learning Spider-Man's "great power, great responsibility" message
                </li>
                <li>
                  • <strong>Helping Others:</strong> Understanding the importance of using abilities to help people
                </li>
                <li>
                  • <strong>Problem Solving:</strong> Following Spider-Man's clever solutions to challenges
                </li>
                <li>
                  • <strong>Perseverance:</strong> Never giving up when facing difficult situations
                </li>
                <li>
                  • <strong>Friendship:</strong> Learning about teamwork with other heroes
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creative & Social Growth</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Imagination:</strong> Creating superhero stories and adventures
                </li>
                <li>
                  • <strong>Color Creativity:</strong> Experimenting with classic and original color schemes
                </li>
                <li>
                  • <strong>Superhero Play:</strong> Inspiring active, imaginative play after coloring
                </li>
                <li>
                  • <strong>Confidence Building:</strong> Feeling heroic and capable like Spider-Man
                </li>
                <li>
                  • <strong>Family Bonding:</strong> Sharing superhero stories across generations
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skills & Focus Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Fine Motor Skills:</strong> Precise coloring of web patterns and costume details
                </li>
                <li>
                  • <strong>Pattern Recognition:</strong> Understanding Spider-Man's iconic web designs
                </li>
                <li>
                  • <strong>Attention to Detail:</strong> Focusing on costume elements and city backgrounds
                </li>
                <li>
                  • <strong>Color Coordination:</strong> Learning classic superhero color combinations
                </li>
                <li>
                  • <strong>Concentration:</strong> Extended focus on action-packed scenes
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Spider-Man Character Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Spider-Verse Coloring Collection</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore every corner of the Spider-Verse with our comprehensive collection featuring all your favorite
              web-slingers, from classic Peter Parker to the newest Spider-heroes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Classic Spider-Man */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-red-50 to-blue-100">
                <Image
                  src="/placeholder.svg?key=classic-spiderman"
                  alt="Classic Spider-Man Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  80+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Classic Spider-Man</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  The original web-slinger Peter Parker in his iconic red and blue suit, swinging through New York City
                  and fighting classic villains.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Iconic red and blue costume</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Web-swinging action scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Classic villains like Green Goblin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>New York City backgrounds</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Color Classic Spidey
                </Button>
              </CardContent>
            </Card>

            {/* Miles Morales */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-black to-red-100">
                <Image
                  src="/placeholder.svg?key=miles-morales"
                  alt="Miles Morales Spider-Man Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  60+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Miles Morales Spider-Man</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  The amazing Miles Morales with his unique black and red suit, featuring his special invisibility and
                  bio-electric powers.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Cool black and red costume</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Unique spider powers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Modern urban settings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Dynamic action poses</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Color Miles Morales
                </Button>
              </CardContent>
            </Card>

            {/* Spider-Gwen */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-white to-pink-100">
                <Image
                  src="/placeholder.svg?key=spider-gwen"
                  alt="Spider-Gwen Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  50+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Spider-Gwen (Ghost-Spider)</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Gwen Stacy as the amazing Ghost-Spider with her stylish white and pink costume, bringing her own
                  unique flair to web-slinging.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Stylish white and pink suit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Graceful web-swinging poses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Alternate dimension scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Unique hood design details</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Color Spider-Gwen
                </Button>
              </CardContent>
            </Card>

            {/* Spider-Man 2099 */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-red-100">
                <Image
                  src="/placeholder.svg?key=spiderman-2099"
                  alt="Spider-Man 2099 Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  40+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Spider-Man 2099</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Miguel O'Hara from the future with his high-tech blue and red suit, featuring futuristic cityscapes
                  and advanced technology.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Futuristic costume design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>High-tech cityscapes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Advanced web technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Sci-fi adventure scenes</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Color Future Spidey
                </Button>
              </CardContent>
            </Card>

            {/* Spider-Verse Team */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-purple-50 to-orange-100">
                <Image
                  src="/placeholder.svg?key=spider-verse-team"
                  alt="Spider-Verse Team Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  35+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Spider-Verse Team Adventures</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Multiple Spider-heroes working together in epic team-up adventures, featuring all your favorite
                  web-slingers in action.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Multiple Spider-heroes together</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Epic team-up scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Dimensional portal backgrounds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Complex group compositions</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Color Team Adventures
                </Button>
              </CardContent>
            </Card>

            {/* Simple Spider-Man for Kids */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-yellow-50 to-green-100">
                <Image
                  src="/placeholder.svg?key=simple-spiderman"
                  alt="Simple Spider-Man Coloring Pages for Kids"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  70+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Simple Spider-Man for Little Heroes</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Easy-to-color Spider-Man designs with thick lines and simple shapes, perfect for toddlers and
                  preschoolers just starting their coloring journey.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Thick, bold outlines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Large coloring areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Friendly, simple poses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Perfect for little hands</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Color Simple Spidey
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Age-Specific Guide */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect Spider-Man Pages for Every Young Hero</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our Spider-Man collection is carefully designed to match developmental stages, ensuring every child gets
                the perfect superhero adventure for their coloring skill level.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3-5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Little Web-Slingers</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Simple, friendly Spider-Man with thick lines and large coloring areas. Perfect for introducing
                    superhero concepts safely.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Big, easy shapes</li>
                    <li>• Friendly Spider-Man poses</li>
                    <li>• Simple web patterns</li>
                    <li>• Large coloring spaces</li>
                    <li>• Basic superhero scenes</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Develops:</strong> Color recognition, basic motor skills, superhero vocabulary
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">6-10</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Amazing Spider-Kids</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Action-packed Spider-Man adventures with web-swinging scenes and classic villains. Great for
                    building confidence and storytelling.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Dynamic action poses</li>
                    <li>• Detailed web patterns</li>
                    <li>• City skyline backgrounds</li>
                    <li>• Classic villain encounters</li>
                    <li>• Multiple Spider-heroes</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Develops:</strong> Fine motor skills, attention to detail, storytelling abilities
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">11+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Spectacular Artists</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Complex Spider-Verse scenes with intricate costume details and elaborate backgrounds. Perfect for
                    advanced coloring skills.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Intricate costume details</li>
                    <li>• Complex web patterns</li>
                    <li>• Detailed city environments</li>
                    <li>• Multi-character scenes</li>
                    <li>• Advanced shading opportunities</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Benefits:</strong> Advanced motor skills, artistic development, character appreciation
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Superhero Power of Spider-Man Coloring</h2>
              <p className="text-lg text-gray-600">
                Research shows that superhero-themed activities significantly boost children's confidence, moral
                development, and creative problem-solving abilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Character & Moral Development</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Responsibility & Ethics</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Great Power, Great Responsibility:</strong> Understanding the importance of using
                        abilities wisely
                      </li>
                      <li>
                        • <strong>Helping Others:</strong> Learning the value of putting others' needs first
                      </li>
                      <li>
                        • <strong>Making Good Choices:</strong> Following Spider-Man's moral decision-making
                      </li>
                      <li>
                        • <strong>Standing Up to Bullies:</strong> Building courage to do what's right
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Problem-Solving & Creativity</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Creative Solutions:</strong> Learning Spider-Man's inventive problem-solving
                      </li>
                      <li>
                        • <strong>Overcoming Challenges:</strong> Persistence in the face of difficulties
                      </li>
                      <li>
                        • <strong>Using Intelligence:</strong> Valuing brains over brawn like Peter Parker
                      </li>
                      <li>
                        • <strong>Teamwork:</strong> Working with other heroes to solve bigger problems
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Confidence & Self-Esteem</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Inner Strength:</strong> Finding courage even when scared
                      </li>
                      <li>
                        • <strong>Unique Abilities:</strong> Celebrating what makes each person special
                      </li>
                      <li>
                        • <strong>Overcoming Mistakes:</strong> Learning from failures like Spider-Man does
                      </li>
                      <li>
                        • <strong>Being a Hero:</strong> Understanding that anyone can make a difference
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Developmental & Therapeutic Benefits</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Emotional Regulation</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Managing Fears:</strong> Processing scary situations through superhero stories
                      </li>
                      <li>
                        • <strong>Stress Relief:</strong> Calming activity with empowering themes
                      </li>
                      <li>
                        • <strong>Emotional Expression:</strong> Using colors to express feelings and moods
                      </li>
                      <li>
                        • <strong>Anxiety Reduction:</strong> Feeling safe with protective superhero figures
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Social & Communication Skills</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Shared Interests:</strong> Connecting with other superhero fans
                      </li>
                      <li>
                        • <strong>Storytelling:</strong> Creating and sharing Spider-Man adventures
                      </li>
                      <li>
                        • <strong>Family Bonding:</strong> Multi-generational appeal of Spider-Man
                      </li>
                      <li>
                        • <strong>Peer Interaction:</strong> Common ground for making friends
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Special Needs Support</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>ADHD Focus:</strong> Engaging superhero themes maintain attention longer
                      </li>
                      <li>
                        • <strong>Autism Support:</strong> Predictable character patterns and special interests
                      </li>
                      <li>
                        • <strong>Motor Skills:</strong> Progressive difficulty levels for skill development
                      </li>
                      <li>
                        • <strong>Sensory Processing:</strong> Calming repetitive coloring motions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spider-Man Coloring Tips & Techniques */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-2xl p-8 border border-pastel-pink/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Master Spider-Man Coloring Techniques</h2>
                <p className="text-lg text-gray-600">
                  Professional tips and creative ideas to make your Spider-Man coloring pages look amazing and help
                  children develop their artistic skills.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Classic Spider-Man Colors & Techniques</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Perfect Spider-Man Color Scheme</h4>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-gray-300"></div>
                            <div>
                              <p className="font-medium text-gray-900">Spider Red</p>
                              <p className="text-xs text-gray-600">Body, mask, gloves</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-gray-300"></div>
                            <div>
                              <p className="font-medium text-gray-900">Spider Blue</p>
                              <p className="text-xs text-gray-600">Arms, legs, boots</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-300"></div>
                            <div>
                              <p className="font-medium text-gray-900">Web Black</p>
                              <p className="text-xs text-gray-600">Web lines, spider logo</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-300"></div>
                            <div>
                              <p className="font-medium text-gray-900">Eye White</p>
                              <p className="text-xs text-gray-600">Mask eyes, highlights</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Web Pattern Coloring Tips</h4>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• Start with the main costume colors first</li>
                          <li>• Use a thin black marker or crayon for web lines</li>
                          <li>• Keep web lines evenly spaced and consistent</li>
                          <li>• Make web patterns follow the body's curves</li>
                          <li>• Leave some web sections uncolored for depth</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Creative Variations & Advanced Techniques</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Alternative Spider-Man Styles</h4>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>
                            • <strong>Symbiote Spider-Man:</strong> All black with white spider and eyes
                          </li>
                          <li>
                            • <strong>Iron Spider:</strong> Red and gold with metallic highlights
                          </li>
                          <li>
                            • <strong>Stealth Suit:</strong> Black and red with tech details
                          </li>
                          <li>
                            • <strong>Future Foundation:</strong> White and black with blue accents
                          </li>
                          <li>
                            • <strong>Your Own Design:</strong> Create unique color combinations!
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Background & Environment Ideas</h4>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• New York City skyline in gray and blue tones</li>
                          <li>• Sunset sky with orange, pink, and purple</li>
                          <li>• Night scene with dark blues and city lights</li>
                          <li>• Web backgrounds with silver or gray webs</li>
                          <li>• Action scenes with motion lines and effects</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Age-Appropriate Techniques</h4>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>
                            • <strong>Ages 3-5:</strong> Focus on staying in lines, use chunky crayons
                          </li>
                          <li>
                            • <strong>Ages 6-8:</strong> Practice color blending, try markers
                          </li>
                          <li>
                            • <strong>Ages 9-12:</strong> Add shading, experiment with colored pencils
                          </li>
                          <li>
                            • <strong>Advanced:</strong> Try watercolors, add texture effects
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Spider-Man Pages Preview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Most Popular Spider-Man Coloring Pages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our top-rated Spider-Man coloring pages, loved by families and young heroes worldwide for their
              perfect balance of fun and skill development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Classic Web-Swing", downloads: "45K+", rating: "4.9" },
              { title: "Miles Morales Action", downloads: "38K+", rating: "4.8" },
              { title: "Spider-Gwen Portrait", downloads: "35K+", rating: "4.9" },
              { title: "Spider-Verse Team", downloads: "32K+", rating: "4.7" },
              { title: "NYC Skyline Swing", downloads: "28K+", rating: "4.8" },
              { title: "Green Goblin Battle", downloads: "25K+", rating: "4.9" },
              { title: "Simple Spidey Face", downloads: "42K+", rating: "4.6" },
              { title: "Web Pattern Practice", downloads: "22K+", rating: "4.8" },
            ].map((page, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-xl overflow-hidden hover:border-pastel-pink/40 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-red-50 to-blue-100">
                  <Image
                    src={`/placeholder.svg?key=featured-spidey${i}`}
                    alt={`${page.title} Spider-Man Coloring Page`}
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

       
        </section>

        {/* Comprehensive FAQ */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Everything Parents Need to Know About Spider-Man Coloring Pages
              </h2>
              <p className="text-lg text-gray-600">
                Expert answers to the most common questions about using Spider-Man coloring pages for development, fun,
                and family bonding.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Are Spider-Man coloring pages appropriate for young children, and what are the benefits?",
                  answer:
                    "Spider-Man coloring pages are excellent for children ages 3 and up, offering numerous developmental benefits. They help build fine motor skills through detailed web patterns, enhance focus and concentration, and introduce positive character values like responsibility and helping others. The superhero theme boosts confidence and provides a safe way to explore concepts of good vs. evil. Our collection includes age-appropriate designs from simple outlines for toddlers to complex scenes for older children, ensuring every child can enjoy Spider-Man coloring at their skill level.",
                },
                {
                  question: "How can Spider-Man coloring pages help with my child's character development and values?",
                  answer:
                    "Spider-Man coloring pages are powerful tools for character development because they reinforce positive values through engaging storytelling. Spider-Man's core message of 'with great power comes great responsibility' teaches children about making good choices and using their abilities to help others. The coloring activity provides opportunities to discuss themes like standing up to bullies, helping friends, and persevering through challenges. Many parents find that coloring Spider-Man pages naturally leads to conversations about being brave, kind, and responsible - values that transfer to real-life situations.",
                },
                {
                  question: "What's the difference between classic Spider-Man and newer characters like Miles Morales?",
                  answer:
                    "Our collection includes both classic Peter Parker Spider-Man and newer characters like Miles Morales and Spider-Gwen, each offering unique benefits. Classic Spider-Man features the iconic red and blue costume and traditional superhero stories that many parents grew up with. Miles Morales represents diversity and shows children that anyone can be a hero, featuring a cool black and red suit with unique powers. Spider-Gwen provides strong female representation in superhero stories. This variety allows children to see themselves reflected in different characters while learning that heroism comes in many forms.",
                },
                {
                  question: "How can I use Spider-Man coloring pages to help my child with focus and attention issues?",
                  answer:
                    "Spider-Man coloring pages are particularly effective for children with ADHD or attention challenges because the engaging superhero theme naturally captures and maintains interest longer than generic coloring pages. Start with simpler designs and gradually progress to more detailed pages as attention span improves. The repetitive motion of coloring web patterns can be calming and meditative. Set up a dedicated 'Spider-Man coloring station' to create routine and structure. Use coloring time as a reward for completing other tasks, and consider coloring together to provide gentle guidance and encouragement while building focus skills.",
                },
                {
                  question:
                    "What art supplies work best for Spider-Man coloring pages, and how should I set up a coloring area?",
                  answer:
                    "For best results, use high-quality coloring tools appropriate for your child's age. Crayons work well for younger children (ages 3-6), while colored pencils offer more precision for older kids (7+). Markers create vibrant colors but may bleed through paper. Print on heavier paper (cardstock) for better results with markers. Set up a dedicated coloring space with good lighting, comfortable seating, and easy access to supplies. Keep reference images of Spider-Man nearby to help with color choices. Consider laminating favorite pages to reuse with dry-erase markers for repeated coloring fun.",
                },
                {
                  question: "How can teachers use Spider-Man coloring pages in classroom settings effectively?",
                  answer:
                    "Teachers can integrate Spider-Man coloring pages into various educational activities beyond art time. Use them for character education lessons about responsibility, kindness, and helping others. Incorporate them into reading activities by having students create stories about their colored pages. Use Spider-Man's scientific background (Peter Parker is a scientist) to introduce STEM concepts. They work excellently as calm-down activities, early finisher tasks, or rewards for good behavior. The universal appeal of Spider-Man helps engage reluctant participants and can be particularly effective for children who struggle with traditional academic activities.",
                },
                {
                  question:
                    "Are there therapeutic benefits to Spider-Man coloring pages for children dealing with anxiety or fears?",
                  answer:
                    "Spider-Man coloring pages offer significant therapeutic benefits for children dealing with anxiety, fears, or emotional challenges. The act of coloring is naturally calming and meditative, helping reduce stress and anxiety. Spider-Man's character provides a sense of safety and protection, which can be comforting for anxious children. The superhero theme allows children to explore feelings of powerlessness in a safe way, building confidence and resilience. Coloring Spider-Man can help children process fears about safety, bullying, or feeling different. The repetitive nature of coloring web patterns can be particularly soothing for children with sensory processing needs or autism spectrum disorders.",
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Superhero Coloring Adventures</h2>
            <p className="text-gray-600">
              Discover our complete collection of superhero and character coloring activities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Batman Pages", subtitle: "Dark Knight adventures", href: "/batman-coloring-pages" },
              { title: "Superman Pages", subtitle: "Man of Steel action", href: "/superman-coloring-pages" },
              {
                title: "Wonder Woman Pages",
                subtitle: "Amazon warrior princess",
                href: "/wonder-woman-coloring-pages",
              },
              { title: "Avengers Pages", subtitle: "Earth's mightiest heroes", href: "/avengers-coloring-pages" },
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
          <div className="bg-gradient-to-r from-red-500 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Your Spider-Man Adventure Starts Now!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of young heroes coloring their way through amazing Spider-Man adventures. Download
              instantly and let the web-slinging fun begin!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Spider-Man Pack
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl bg-transparent"
              >
                Browse All Superheroes
              </Button>
            </div>

            <div className="mt-6 text-sm opacity-75">
              <span>🕷️ 300+ pages • All Spider-heroes • Ages 3-12 • Easy printing at home</span>
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
              name: "Spider-Man Coloring Pages - Free Printable Superhero Activities",
              description:
                "Download 300+ free printable Spider-Man coloring pages featuring Peter Parker, Miles Morales, Spider-Gwen, and web-slinging adventures. Perfect for kids ages 3-12.",
              keywords:
                "Spider-Man coloring pages, superhero coloring pages for kids, free printable Spider-Man, Peter Parker coloring, Miles Morales coloring pages, Spider-Gwen coloring, kids superhero activities",
              url: "https://drawgle.in/spiderman-coloring-pages",
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: 300,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Classic Spider-Man Coloring Pages",
                    url: "https://drawgle.in/spiderman-coloring-pages/classic",
                    description: "80+ classic Peter Parker Spider-Man coloring pages with iconic red and blue suit",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Miles Morales Spider-Man Pages",
                    url: "https://drawgle.in/spiderman-coloring-pages/miles-morales",
                    description: "60+ Miles Morales coloring pages featuring the black and red Spider-Man suit",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Spider-Gwen Coloring Pages",
                    url: "https://drawgle.in/spiderman-coloring-pages/spider-gwen",
                    description: "50+ Spider-Gwen coloring pages with her unique white and pink Ghost-Spider costume",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Simple Spider-Man for Kids",
                    url: "https://drawgle.in/spiderman-coloring-pages/simple",
                    description: "70+ easy Spider-Man coloring pages perfect for toddlers and preschoolers",
                  },
                ],
              },
              about: {
                "@type": "Thing",
                name: "Spider-Man Educational Activities",
                description:
                  "Free printable Spider-Man coloring pages designed for character development, motor skill development, and superhero-themed family activities",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Families, Teachers, Children, Parents, Educators, Superhero Fans",
                geographicArea: "Global",
              },
              educationalUse:
                "Character Development, Motor Skill Development, Creative Expression, Superhero Education, Family Bonding Activities",
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
