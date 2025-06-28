import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SchemaWebPage } from "@/components/seo/schema"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download, Heart, Users, Star, Gift, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "100% Free Coloring Pages to Download and Print | No Sign-Up Required",
  description:
    "Download thousands of completely free coloring pages for kids and adults. No registration, no payment, no catch - just print and color! Updated weekly with new designs.",
  openGraph: {
    title: "100% Free Coloring Pages - No Sign-Up Required",
    description:
      "Download thousands of completely free coloring pages for kids and adults. No registration, no payment, no catch - just print and color!",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Free Coloring Pages Collection",
      },
    ],
  },
}

export default function FreeColoringPages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50">
      <SchemaWebPage
        name="Free Coloring Pages"
        description="Download thousands of completely free coloring pages for kids and adults. No registration, no payment, no catch - just print and color!"
      />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
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
              <span aria-current="page" className="text-gray-900 font-medium">
                Free Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4 mr-2" />
              100% Free Forever - No Catch!
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Free
              <br />
              <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Coloring Pages
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Download thousands of beautiful coloring pages that cost absolutely nothing. No sign-up, no email, no
              catch - just click, print, and start coloring! Perfect for families, teachers, and anyone who loves to
              create.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">2,500+ Free Pages</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">No Sign-Up</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">All Ages</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Weekly Updates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#collections">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Browse Free Pages
                </Button>
              </Link>
              <Link href="#why-free">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pastel-pink/30 hover:border-pastel-pink px-8 py-6 text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300 bg-transparent"
                >
                  Why Choose Free?
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
                <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
                <div className="text-gray-600">Free Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100K+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-gray-600">Hidden Costs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9★</div>
                <div className="text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Free Pages Matter */}
        <section id="why-free" className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why We Believe in Free Coloring Pages</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every child deserves access to creative activities, regardless of their family's budget. That's why we
              offer thousands of high-quality coloring pages completely free - no strings attached.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessible to Everyone</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>No Financial Barriers:</strong> Creative fun shouldn't depend on family income
                </li>
                <li>
                  • <strong>Equal Opportunities:</strong> Every child can enjoy the same quality activities
                </li>
                <li>
                  • <strong>Community Support:</strong> Teachers can print unlimited copies for their students
                </li>
                <li>
                  • <strong>Instant Access:</strong> No waiting for shipping or store visits
                </li>
                <li>
                  • <strong>Try Everything:</strong> Explore all themes and styles without cost concerns
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect for Families</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Budget-Friendly Fun:</strong> Entertainment that doesn't strain family finances
                </li>
                <li>
                  • <strong>Screen-Free Time:</strong> Healthy alternative to digital entertainment
                </li>
                <li>
                  • <strong>Family Bonding:</strong> Activities everyone can enjoy together
                </li>
                <li>
                  • <strong>Educational Value:</strong> Learning disguised as fun
                </li>
                <li>
                  • <strong>Confidence Building:</strong> Every completed page is an achievement
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">No Strings Attached</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Truly Free:</strong> No hidden costs or surprise charges
                </li>
                <li>
                  • <strong>No Registration:</strong> Click, download, print - that's it!
                </li>
                <li>
                  • <strong>Privacy Respected:</strong> No email addresses or personal information required
                </li>
                <li>
                  • <strong>High Quality:</strong> Professional designs that print beautifully
                </li>
                <li>
                  • <strong>Regular Updates:</strong> New free content added weekly
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Popular Free Collections */}
        <section id="collections" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Most Popular Free Collections</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These collections are downloaded thousands of times every week by families and teachers around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free Kids Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src="/placeholder.svg?key=free-kids"
                  alt="Free Kids Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  500+ Free
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Kids Coloring Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Simple, fun designs perfect for little hands. Ages 3-8 will love these easy-to-color pages with their
                  favorite characters and themes.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Animals, vehicles, and everyday objects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Large, simple shapes for easy coloring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Perfect for developing fine motor skills</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free Kids Pages
                </Button>
              </CardContent>
            </Card>

            {/* Free Christmas Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-red-50 to-red-100">
                <Image
                  src="/placeholder.svg?key=free-christmas"
                  alt="Free Christmas Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  200+ Free
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Christmas Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Make the holidays magical with Santa, reindeer, Christmas trees, and festive scenes. Perfect for
                  family traditions and classroom activities.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Santa, reindeer, and Christmas characters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Holiday decorations and winter scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Perfect for holiday parties and gifts</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Christmas Pages
                </Button>
              </CardContent>
            </Card>

            {/* Free Animal Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100">
                <Image
                  src="/placeholder.svg?key=free-animals"
                  alt="Free Animal Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  400+ Free
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Animal Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Cats, dogs, elephants, lions, and more! Perfect for animal lovers and great for teaching about
                  different creatures and their habitats.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Farm animals, pets, and wild creatures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Realistic and cartoon-style designs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Great for learning about nature</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Animal Pages
                </Button>
              </CardContent>
            </Card>

            {/* Free Halloween Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-orange-50 to-orange-100">
                <Image
                  src="/placeholder.svg?key=free-halloween"
                  alt="Free Halloween Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  150+ Free
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Halloween Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Friendly ghosts, smiling pumpkins, and cute witches - Halloween fun that's not too scary for little
                  ones!
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Non-scary Halloween characters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Pumpkins, ghosts, and autumn themes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Perfect for Halloween parties</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Halloween Pages
                </Button>
              </CardContent>
            </Card>

            {/* Free Unicorn Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-purple-50 to-purple-100">
                <Image
                  src="/placeholder.svg?key=free-unicorns"
                  alt="Free Unicorn Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  100+ Free
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Unicorn Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Magical unicorns with rainbows, stars, and sparkles. Perfect for dreamers who love fantasy and magic!
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Beautiful unicorns with flowing manes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Rainbows, stars, and magical elements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Perfect for imaginative play</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Unicorn Pages
                </Button>
              </CardContent>
            </Card>

            {/* Free Adult Pages */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-pink-50 to-pink-100">
                <Image
                  src="/placeholder.svg?key=free-adult"
                  alt="Free Adult Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  300+ Free
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Adult Pages</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Complex patterns and intricate designs for grown-ups who love to color. Perfect for stress relief and
                  relaxation.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Detailed mandalas and patterns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Intricate designs for advanced colorists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Perfect for stress relief and mindfulness</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Adult Pages
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Age-Specific Guide */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect Free Pages for Every Age</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our free collection includes designs for every age and skill level, ensuring everyone can find pages
                they'll love to color.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3-5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Little Ones</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Big, simple shapes with thick lines perfect for small hands just learning to color and stay within
                    the lines.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Large animals and familiar objects</li>
                    <li>• Thick, bold outlines</li>
                    <li>• Simple shapes and patterns</li>
                    <li>• Short attention span friendly</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Perfect for:</strong> Hand control, color recognition, following directions
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">6-8</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">School Age</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    More detailed designs that challenge growing skills while still being achievable and fun for
                    elementary-aged children.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Characters from favorite shows</li>
                    <li>• Scenes with multiple elements</li>
                    <li>• Moderate detail level</li>
                    <li>• Educational themes</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Perfect for:</strong> Focus building, creativity, learning about the world
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">9+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Older Kids & Adults</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Intricate designs and complex patterns for advanced colorists who want a real challenge and stress
                    relief.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Detailed mandalas and patterns</li>
                    <li>• Complex illustrations</li>
                    <li>• Realistic designs</li>
                    <li>• Therapeutic complexity</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Perfect for:</strong> Stress relief, mindfulness, artistic expression
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Free Pages */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Get the Most from Free Coloring Pages</h2>
              <p className="text-lg text-gray-600">
                Simple tips to make your free coloring pages even more valuable for your family or classroom.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">For Families at Home</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Create a Coloring Station</h4>
                    <p className="text-gray-600 mb-3">
                      Set up a special spot with good lighting, comfortable seating, and all supplies organized. This
                      makes coloring time feel special and encourages regular use.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Good lighting (natural light is best)</li>
                      <li>• Comfortable chair and table</li>
                      <li>• Organized supply storage</li>
                      <li>• Display area for finished work</li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Make it Social</h4>
                    <p className="text-gray-600 mb-3">
                      Color together as a family! Put on music, chat about your day, and enjoy each other's company
                      while creating.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Family coloring nights</li>
                      <li>• Background music or audiobooks</li>
                      <li>• Share and discuss your work</li>
                      <li>• Take photos of finished pages</li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Use as Rewards</h4>
                    <p className="text-gray-600 mb-3">
                      Let kids choose special coloring pages after completing chores, homework, or good behavior. It's a
                      reward that's both fun and beneficial.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Homework completion rewards</li>
                      <li>• Good behavior incentives</li>
                      <li>• Quiet time activities</li>
                      <li>• Screen-free time alternatives</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">For Teachers & Educators</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Classroom Management Tool</h4>
                    <p className="text-gray-600 mb-3">
                      Use free coloring pages as a versatile classroom management tool for various situations throughout
                      the school day.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Early finisher activities</li>
                      <li>• Indoor recess options</li>
                      <li>• Calm-down time for upset students</li>
                      <li>• Transition activities</li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Subject Integration</h4>
                    <p className="text-gray-600 mb-3">
                      Choose coloring pages that connect to your lessons. This reinforces learning while providing a fun
                      break from traditional instruction.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Animals for science lessons</li>
                      <li>• Historical figures for social studies</li>
                      <li>• Seasonal pages for calendar time</li>
                      <li>• Character pages for reading units</li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Budget-Friendly Resources</h4>
                    <p className="text-gray-600 mb-3">
                      Free coloring pages help stretch your classroom budget while still providing high-quality
                      activities for your students.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Print unlimited copies</li>
                      <li>• No per-student costs</li>
                      <li>• Always available when needed</li>
                      <li>• Share with other teachers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Free Additions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Brand New Free Pages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fresh designs added this week - completely free to download and print at home.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-xl overflow-hidden hover:border-pastel-pink/40 transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={`/placeholder.svg?key=new${i}`}
                    alt={`New free coloring page ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">New Design {i}</h3>
                  <div className="flex justify-between items-center text-xs text-gray-600 mb-3">
                    <span>Added this week</span>
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
              View All New Free Pages
            </Button>
          </div>
        </section>

        {/* Comprehensive FAQ */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions About Free Coloring Pages</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about downloading and using our free coloring pages.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Are these coloring pages really 100% free?",
                  answer:
                    "Yes! These pages are completely free forever. No hidden fees, no 'free trial' that charges you later, no subscription required. We believe every child should have access to creative activities regardless of their family's budget. There's absolutely no catch - just click, download, and print!",
                },
                {
                  question: "Do I need to create an account or give my email address?",
                  answer:
                    "Nope! Just click the download button and the page will save to your computer. No sign-up, no email address, no personal information required. We respect your privacy and want to make this as simple as possible for busy families and teachers.",
                },
                {
                  question: "Can teachers use these for their classrooms?",
                  answer:
                    "Teachers can download and print as many copies as they need for their students. These pages are perfect for early finishers, quiet time, art class, indoor recess, or just adding some fun to the school day. Share them with other teachers too - the more kids who benefit, the better!",
                },
                {
                  question: "How often do you add new free coloring pages?",
                  answer:
                    "We add new free coloring pages every week! Our team is constantly creating fresh designs, seasonal content, and responding to requests from families and teachers. Check back regularly to see what's new, or follow us to get notified when we release new collections.",
                },
                {
                  question: "What's the best way to print these pages at home?",
                  answer:
                    "Regular copy paper works great for most coloring tools! For best results, use the 'high quality' setting on your printer to get clear, dark lines. If you want pages that last longer or work better with markers, try cardstock or heavier paper. Most home printers handle these files perfectly.",
                },
                {
                  question: "Can I share these pages with other families?",
                  answer:
                    "Yes! Feel free to share our website with other parents, teachers, and caregivers. The more families who know about our free resources, the better. Just please don't sell the pages or claim them as your own work. They're meant to be shared freely to help as many kids as possible.",
                },
                {
                  question: "What makes your free pages different from others online?",
                  answer:
                    "Our free pages are professionally designed with clean lines that print beautifully. We focus on age-appropriate content that's both fun and educational. Plus, we're committed to keeping them truly free - no tricks, no upsells, just quality coloring pages that families and teachers can rely on.",
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Free Coloring Categories</h2>
            <p className="text-gray-600">Explore our complete collection of free coloring pages by theme</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Cute Coloring Pages", subtitle: "Adorable designs", href: "/cute-coloring-pages" },
              { title: "Bluey Pages", subtitle: "Popular TV show", href: "/bluey-coloring-pages" },
              { title: "Pokemon Pages", subtitle: "Catch them all", href: "/pokemon-coloring-pages" },
              { title: "Printable Pages", subtitle: "Ready to print", href: "/printable-coloring-pages" },
            ].map((category, i) => (
              <Link key={i} href={category.href} className="group">
                <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-xl p-6 text-center hover:border-pastel-pink/40 transition-all duration-300">
                  <h3 className="font-semibold text-gray-900 group-hover:text-pastel-pink transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{category.subtitle}</p>
                  <div className="text-xs text-green-600 font-medium mt-2">Free Collection</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Coloring for Free?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Browse our huge collection of completely free coloring pages and find the perfect designs for your family
              or classroom. No catch, no cost - just pure creative fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gallery">
                <Button
                  size="lg"
                  className="bg-white text-pastel-pink hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Browse All Free Pages
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl bg-transparent"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Create Custom Pages
                </Button>
              </Link>
            </div>

            <div className="mt-6 text-sm opacity-75">
              <span>✨ 2,500+ free pages • No sign-up required • Updated weekly • Always free</span>
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
              name: "Free Coloring Pages - No Sign-Up Required",
              description:
                "Download thousands of completely free coloring pages for kids and adults. No registration, no payment, no catch - just print and color!",
              keywords:
                "free coloring pages, printable coloring pages, kids coloring pages, adult coloring pages, no registration coloring pages",
              url: "https://drawgle.in/free-coloring-pages",
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: 2500,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Free Kids Coloring Pages",
                    url: "https://drawgle.in/sonic-coloring-pages",
                    description: "500+ free coloring pages designed specifically for children ages 3-8",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Free Christmas Coloring Pages",
                    url: "https://drawgle.in/christmas-coloring-pages",
                    description: "200+ free Christmas coloring pages with Santa, reindeer, and holiday themes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Free Animal Coloring Pages",
                    url: "https://drawgle.in/unicorn-coloring-pages",
                    description: "400+ free animal coloring pages featuring pets, farm animals, and wildlife",
                  },
                ],
              },
              about: {
                "@type": "Thing",
                name: "Free Educational Coloring Activities",
                description:
                  "Completely free printable coloring pages designed for child development, education, and family bonding",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Families, Teachers, Children, Parents, Educators",
                geographicArea: "Global",
              },
              educationalUse:
                "Art Education, Fine Motor Skill Development, Creative Expression, Classroom Activities, Family Bonding",
              isAccessibleForFree: true,
              inLanguage: "en-US",
            }),
          }}
        />
      </div>
    </div>
  )
}
