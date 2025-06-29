import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Download,
  Heart,
  Star,
  Users,
  Gift,
  Cake,
  PartyPopper,
  Palette,
  Clock,
  BookOpen,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Happy Birthday Coloring Pages | Free Printable Birthday Fun | Drawgle",
  description:
    "Free Happy Birthday coloring pages for kids & adults! Print birthday cakes, balloons, dinosaurs, Bluey & more. Perfect for birthday parties & celebrations. Easy PDF downloads.",
  keywords:
    "happy birthday coloring pages, birthday coloring pages printable, birthday coloring pages for adults, birthday coloring pages pdf, birthday coloring pages boy, birthday coloring pages bluey, easy birthday coloring pages, cute birthday coloring pages, birthday coloring pages dinosaur",
  openGraph: {
    title: "Happy Birthday Coloring Pages | Free Printable Birthday Fun",
    description:
      "Free Happy Birthday coloring pages for kids & adults! Print birthday cakes, balloons, dinosaurs, Bluey & more. Perfect for birthday parties & celebrations.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Happy Birthday Coloring Pages Collection",
      },
    ],
  },
}

export default function HappyBirthdayColoringPages() {
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
              <Link href="/coloring-pages" className="hover:text-pastel-pink transition-colors">
                Coloring Pages
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900 font-medium" aria-current="page">
                Happy Birthday Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Happy Birthday Coloring Pages
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Make every birthday extra special with our magical collection of birthday coloring pages! From birthday
                cakes to party balloons, create unforgettable celebration memories.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-pink-100 to-pink-200 px-4 py-2 rounded-full text-sm font-medium text-pink-800 border border-pink-200">
                  <Gift className="h-4 w-4 inline mr-2" />
                  Free PDF Downloads
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 rounded-full text-sm font-medium text-purple-800 border border-purple-200">
                  <Cake className="h-4 w-4 inline mr-2" />
                  Birthday Party Ready
                </div>
                <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 px-4 py-2 rounded-full text-sm font-medium text-yellow-800 border border-yellow-200">
                  <PartyPopper className="h-4 w-4 inline mr-2" />
                  All Ages Welcome
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full text-sm font-medium text-green-800 border border-green-200">
                  <Sparkles className="h-4 w-4 inline mr-2" />
                  Instant Print
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0 shadow-lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Free Birthday Pages
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-white/50 backdrop-blur-sm"
                >
                  <Palette className="h-5 w-5 mr-2" />
                  Browse All Categories
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
                <div className="text-3xl font-bold text-pastel-pink">500+</div>
                <div className="text-sm text-gray-600">Birthday Pages</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-400">15</div>
                <div className="text-sm text-gray-600">Party Themes</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-500">All Ages</div>
                <div className="text-sm text-gray-600">From 2 to 99</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-500">Free</div>
                <div className="text-sm text-gray-600">Always Free</div>
              </div>
            </div>
          </div>
        </section>

        {/* Birthday Categories */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Birthday Coloring Categories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Birthday Cakes */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Birthday Cake Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Cake Pages
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Birthday Cakes</h3>
                  <p className="text-gray-600 mb-4">Delicious birthday cakes with candles, frosting, and decorations</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>80+ designs</span>
                    <span>All skill levels</span>
                  </div>
                </CardContent>
              </Card>

              {/* Party Balloons */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Birthday Balloon Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Balloon Pages
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Party Balloons</h3>
                  <p className="text-gray-600 mb-4">Colorful balloons, balloon animals, and party decorations</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>60+ designs</span>
                    <span>Easy to color</span>
                  </div>
                </CardContent>
              </Card>

              {/* Birthday Boy Pages */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Birthday Boy Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Boy Pages
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Birthday Boy</h3>
                  <p className="text-gray-600 mb-4">
                    Special birthday boy celebrations with cars, sports, and adventures
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>50+ designs</span>
                    <span>Boy-themed fun</span>
                  </div>
                </CardContent>
              </Card>

              {/* Bluey Birthday */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Bluey Birthday Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Bluey Pages
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Bluey Birthday</h3>
                  <p className="text-gray-600 mb-4">Bluey and Bingo celebrating birthdays with family fun</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>40+ designs</span>
                    <span>Family favorite</span>
                  </div>
                </CardContent>
              </Card>

              {/* Dinosaur Birthday */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Dinosaur Birthday Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0">
                        <Download className="h-4 w-4 mr-2" />
                        Print Dino Pages
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Dinosaur Birthday</h3>
                  <p className="text-gray-600 mb-4">
                    Prehistoric birthday parties with T-Rex, Triceratops, and friends
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>45+ designs</span>
                    <span>Dino-mite fun</span>
                  </div>
                </CardContent>
              </Card>

              {/* Adult Birthday Pages */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Adult Birthday Coloring Pages"
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
                  <h3 className="text-xl font-semibold mb-2">Adult Birthday</h3>
                  <p className="text-gray-600 mb-4">
                    Sophisticated birthday designs with intricate patterns and details
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>70+ designs</span>
                    <span>Complex patterns</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Age-Specific Recommendations */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect Birthday Pages for Every Age</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Toddlers & Preschoolers */}
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">2-5</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Little Birthday Stars</h3>
                <p className="text-gray-600 mb-4">
                  Simple birthday designs with big shapes and thick lines. Perfect for tiny hands learning to celebrate!
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li>• Large birthday cakes with simple decorations</li>
                  <li>• Big balloon shapes easy to color</li>
                  <li>• Simple "Happy Birthday" text</li>
                  <li>• Basic party hat designs</li>
                  <li>• Chunky crayon-friendly lines</li>
                </ul>
              </div>

              {/* School Age */}
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">6-12</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Birthday Party Planners</h3>
                <p className="text-gray-600 mb-4">
                  Detailed birthday scenes with characters, decorations, and party activities. Perfect for creative
                  celebration planning!
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li>• Multi-layer birthday cakes with candles</li>
                  <li>• Party scenes with friends and family</li>
                  <li>• Birthday presents and gift boxes</li>
                  <li>• Themed party decorations</li>
                  <li>• Character birthday celebrations</li>
                </ul>
              </div>

              {/* Teens & Adults */}
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">13+</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Celebration Artists</h3>
                <p className="text-gray-600 mb-4">
                  Intricate birthday mandala designs, sophisticated patterns, and detailed celebration scenes for
                  mindful coloring.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li>• Complex birthday mandala patterns</li>
                  <li>• Detailed floral birthday arrangements</li>
                  <li>• Sophisticated party scene illustrations</li>
                  <li>• Inspirational birthday quotes to color</li>
                  <li>• Therapeutic celebration designs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Benefits */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Birthday Coloring Pages Are Amazing for Development
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Social & Emotional Development */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-pastel-pink mb-4">🎉 Social & Emotional Growth</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Celebration & Joy</h4>
                      <p className="text-gray-600 text-sm">
                        Learn about celebrations, traditions, and the importance of marking special occasions with
                        family and friends.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Family Bonding</h4>
                      <p className="text-gray-600 text-sm">
                        Create birthday cards and decorations together, strengthening family relationships through
                        shared creative activities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Gift className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Giving & Gratitude</h4>
                      <p className="text-gray-600 text-sm">
                        Understand the joy of giving through creating personalized birthday gifts and expressing
                        gratitude for special people.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cognitive & Creative Development */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">🧠 Cognitive & Creative Skills</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Palette className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Color Theory & Design</h4>
                      <p className="text-gray-600 text-sm">
                        Learn about festive color combinations, party themes, and how colors create celebratory moods
                        and atmospheres.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Planning & Sequencing</h4>
                      <p className="text-gray-600 text-sm">
                        Develop organizational skills by coloring birthday party sequences and understanding event
                        planning concepts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-6 w-6 text-indigo-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Cultural Awareness</h4>
                      <p className="text-gray-600 text-sm">
                        Explore different birthday traditions and celebrations from around the world through diverse
                        coloring themes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Benefits */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Therapeutic Benefits of Birthday Coloring</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold mb-2">Mood Enhancement</h3>
                <p className="text-sm text-gray-600">
                  Birthday themes naturally boost happiness and create positive associations with celebration and joy.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Anxiety Relief</h3>
                <p className="text-sm text-gray-600">
                  Repetitive coloring motions and festive imagery help reduce stress and create calming, meditative
                  experiences.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Social Connection</h3>
                <p className="text-sm text-gray-600">
                  Creating birthday cards and decorations fosters social bonds and encourages thoughtful gift-giving
                  behaviors.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Self-Esteem</h3>
                <p className="text-sm text-gray-600">
                  Completing birthday artwork builds confidence and creates meaningful gifts that bring joy to others.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Printing & Usage Guide */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Complete Birthday Coloring Guide</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Printing Tips */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">🖨️ Perfect Printing Tips</h3>
                <div className="space-y-4">
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Paper Selection</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Standard:</strong> 20lb copy paper for everyday coloring
                      </li>
                      <li>
                        • <strong>Premium:</strong> 24lb paper for special birthday cards
                      </li>
                      <li>
                        • <strong>Cardstock:</strong> Heavy paper for birthday decorations
                      </li>
                      <li>
                        • <strong>Photo paper:</strong> Glossy finish for gift-quality prints
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Print Settings</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use "Actual Size" or 100% scaling</li>
                      <li>• Select "Black & White" or "Grayscale"</li>
                      <li>• Choose "Best" or "High Quality" print mode</li>
                      <li>• Enable "Borderless" for full-page designs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Coloring Techniques */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">🎨 Birthday Coloring Techniques</h3>
                <div className="space-y-4">
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Classic Birthday Colors</h4>
                    <div className="grid grid-cols-4 gap-2 mb-2">
                      <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-600">Bright, festive colors create joyful birthday celebrations</p>
                  </div>
                  <div className="bg-white/40 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Creative Ideas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Add glitter or stickers to birthday cakes</li>
                      <li>• Use metallic markers for candle flames</li>
                      <li>• Create rainbow balloon bouquets</li>
                      <li>• Add personal messages and names</li>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Birthday Coloring Pages FAQ</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">🎂 Are these birthday coloring pages completely free?</h3>
                <p className="text-gray-600 mb-3">
                  Yes! All our birthday coloring pages are 100% free to download and print. We believe every birthday
                  should be special, regardless of budget.
                </p>
                <p className="text-gray-600">
                  You can print as many copies as you need for personal use, birthday parties, classrooms, or family
                  celebrations.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">🎈 What formats are available for download?</h3>
                <p className="text-gray-600 mb-3">
                  Our birthday coloring pages are available in high-quality PDF format, optimized for home printing on
                  standard 8.5" x 11" paper.
                </p>
                <p className="text-gray-600">
                  PDF format ensures crisp, clear lines that print perfectly every time, whether you're using a basic
                  inkjet or laser printer.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">🎁 Can I use these for birthday party activities?</h3>
                <p className="text-gray-600 mb-3">
                  Our birthday coloring pages are perfect for party activities, goody bags, and keeping kids entertained
                  during celebrations.
                </p>
                <p className="text-gray-600">
                  Print multiple copies for party guests, create coloring stations, or use them as quiet activities
                  during cake time.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">
                  🎨 What age groups are these birthday pages suitable for?
                </h3>
                <p className="text-gray-600 mb-3">We have birthday coloring pages for all ages:</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>
                    • <strong>Ages 2-5:</strong> Simple birthday cakes and balloons with thick lines
                  </li>
                  <li>
                    • <strong>Ages 6-12:</strong> Detailed party scenes with characters and decorations
                  </li>
                  <li>
                    • <strong>Ages 13+:</strong> Complex mandala birthday designs and sophisticated patterns
                  </li>
                  <li>
                    • <strong>Adults:</strong> Therapeutic birthday-themed designs for stress relief
                  </li>
                </ul>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">
                  🦕 Do you have themed birthday pages like dinosaurs and Bluey?
                </h3>
                <p className="text-gray-600 mb-3">
                  Yes! We offer birthday coloring pages featuring popular themes including:
                </p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>
                    • <strong>Dinosaur birthdays:</strong> T-Rex, Triceratops, and friends celebrating
                  </li>
                  <li>
                    • <strong>Bluey birthdays:</strong> Bluey and Bingo family birthday parties
                  </li>
                  <li>
                    • <strong>Superhero birthdays:</strong> Spider-Man, Batman, and hero celebrations
                  </li>
                  <li>
                    • <strong>Princess birthdays:</strong> Royal birthday parties and castle celebrations
                  </li>
                </ul>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">🖍️ What supplies work best for birthday coloring pages?</h3>
                <p className="text-gray-600 mb-3">Different supplies work better for different ages and purposes:</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>
                    • <strong>Crayons:</strong> Perfect for young children, easy to grip and control
                  </li>
                  <li>
                    • <strong>Colored pencils:</strong> Great for detailed work and older kids
                  </li>
                  <li>
                    • <strong>Markers:</strong> Bright colors perfect for party decorations
                  </li>
                  <li>
                    • <strong>Watercolors:</strong> Beautiful effects for special birthday cards
                  </li>
                </ul>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">🎊 Can teachers use these in classrooms?</h3>
                <p className="text-gray-600 mb-3">Yes! Teachers can freely use our birthday coloring pages for:</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Birthday celebrations for students</li>
                  <li>• Classroom party activities</li>
                  <li>• Teaching about celebrations and traditions</li>
                  <li>• Quiet time activities and early finisher tasks</li>
                  <li>• Creating personalized birthday cards for classmates</li>
                </ul>
              </div>

              <div className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">
                  💝 How can coloring help with birthday anxiety or excitement?
                </h3>
                <p className="text-gray-600 mb-3">
                  Birthday coloring pages can be therapeutic for children who feel overwhelmed by birthday excitement or
                  anxiety:
                </p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>
                    • <strong>Calming effect:</strong> Repetitive coloring motions reduce stress and anxiety
                  </li>
                  <li>
                    • <strong>Focus:</strong> Concentrating on coloring helps manage overwhelming emotions
                  </li>
                  <li>
                    • <strong>Positive association:</strong> Creates happy memories around birthday celebrations
                  </li>
                  <li>
                    • <strong>Control:</strong> Gives children a sense of control during exciting times
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Make Every Birthday Extra Special! 🎉</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Download our amazing collection of birthday coloring pages and create magical celebration memories that
              last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0 shadow-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Free Birthday Pages
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-white/50 backdrop-blur-sm"
              >
                <Link href="/coloring-pages-for-kids">Explore More Themes</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">More Celebration Coloring Pages</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Christmas Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Christmas Coloring Pages</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Magical Christmas celebrations with Santa, reindeer, and holiday joy
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Link href="/christmas-coloring-pages">Color Christmas</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Halloween Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Halloween Coloring Pages</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Spooky fun with pumpkins, ghosts, and Halloween celebrations
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Link href="/halloween-coloring-pages">Color Halloween</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Cute Coloring Pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Cute Coloring Pages</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Adorable animals, kawaii characters, and sweet celebrations
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Link href="/cute-coloring-pages">Color Cute Things</Link>
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
              name: "Happy Birthday Coloring Pages | Free Printable Birthday Fun",
              description:
                "Free Happy Birthday coloring pages for kids & adults! Print birthday cakes, balloons, dinosaurs, Bluey & more. Perfect for birthday parties & celebrations. Easy PDF downloads.",
              keywords:
                "happy birthday coloring pages, birthday coloring pages printable, birthday coloring pages for adults, birthday coloring pages pdf, birthday coloring pages boy, birthday coloring pages bluey, easy birthday coloring pages, cute birthday coloring pages, birthday coloring pages dinosaur",
              image: "/placeholder.svg?height=630&width=1200",
              url: "https://drawgle.in/happy-birthday-coloring-pages",
              mainEntity: {
                "@type": "CreativeWork",
                name: "Happy Birthday Coloring Pages Collection",
                description: "Comprehensive collection of birthday-themed coloring pages for all ages and celebrations",
                keywords: "birthday coloring, party activities, celebration coloring pages, printable birthday pages",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Children and Adults",
                  suggestedMinAge: 2,
                },
                educationalUse:
                  "Creative expression, fine motor skills, celebration education, social emotional learning",
                learningResourceType: "Activity",
                isAccessibleForFree: true,
              },
            }),
          }}
        />
      </div>
    </div>
  )
}
