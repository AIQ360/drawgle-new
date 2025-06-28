import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, Share2, Heart, Star, Users, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Hello Kitty Coloring Pages | Free Printable Sheets | Drawgle",
  description:
    "Download free printable Hello Kitty coloring pages. Featuring Sanrio's beloved character in various cute scenes perfect for Hello Kitty fans of all ages.",
  openGraph: {
    title: "Hello Kitty Coloring Pages | Free Printable Sheets",
    description:
      "Download adorable Hello Kitty coloring pages featuring Sanrio's iconic character in various cute scenes and outfits.",
    images: [{ url: "/placeholder.svg?key=pfejj", width: 1200, height: 630 }],
  },
}

export default function HelloKittyColoringPages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4 text-sm text-gray-600 relative z-10" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-pastel-pink transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <ChevronRight className="h-3 w-3" />
            <Link href="/coloring-pages" className="hover:text-pastel-pink transition-colors">
              Coloring Pages
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <ChevronRight className="h-3 w-3" />
            <span aria-current="page" className="text-pastel-pink font-medium">
              Hello Kitty Coloring Pages
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-16 text-center relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-12 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-pastel-pink" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Hello Kitty Coloring Pages
              </h1>
              <Heart className="h-8 w-8 text-pastel-pink" />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Adorable printable coloring sheets featuring everyone's favorite kitty! Perfect for kids who love cute
              characters and creative fun.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="h-5 w-5 text-orange-400" />
                <span className="font-medium">50+ Designs</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-5 w-5 text-pastel-pink" />
                <span className="font-medium">All Ages</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Download className="h-5 w-5 text-orange-400" />
                <span className="font-medium">Free Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coloring Pages */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
              Popular Hello Kitty Pages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Start with these favorite designs that kids love to color</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coloring Page 1 */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hello Kitty with bow coloring page"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-pastel-pink/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Easy
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Hello Kitty with Bow</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Classic Hello Kitty with her signature red bow - perfect for beginners!
                </p>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0"
                  >
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coloring Page 2 */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hello Kitty with friends coloring page"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-orange-400/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Medium
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Hello Kitty & Friends</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Hello Kitty with her cute friends - more details to color and enjoy!
                </p>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0"
                  >
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coloring Page 3 */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hello Kitty birthday coloring page"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-pastel-pink/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Fun
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Birthday Hello Kitty</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Celebrate with Hello Kitty, cake, and balloons - perfect for parties!
                </p>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0"
                  >
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-pastel-pink/30 hover:bg-pastel-pink/10 bg-transparent"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0 px-8 py-3"
            >
              See All Hello Kitty Pages
            </Button>
          </div>
        </div>
      </section>

      {/* Why Kids Love Hello Kitty */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Why Kids Love Hello Kitty
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hello Kitty has been making kids smile for over 50 years!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-full flex-shrink-0">
                    <Heart className="h-6 w-6 text-pastel-pink" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Sweet and Friendly</h3>
                    <p className="text-gray-600">
                      Hello Kitty's cute design and friendly personality make her perfect for young children who love
                      adorable characters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-400/20 p-3 rounded-full flex-shrink-0">
                    <Palette className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Easy to Color</h3>
                    <p className="text-gray-600">
                      Simple shapes and clear lines make Hello Kitty perfect for little hands learning to color inside
                      the lines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-full flex-shrink-0">
                    <Star className="h-6 w-6 text-pastel-pink" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Timeless Character</h3>
                    <p className="text-gray-600">
                      Parents who grew up with Hello Kitty can now share the joy with their own children - it's a family
                      favorite!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-400/20 p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Great for Sharing</h3>
                    <p className="text-gray-600">
                      Kids love coloring Hello Kitty pages together with friends and siblings - it's a fun group
                      activity!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coloring Tips */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
              Hello Kitty Coloring Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make your Hello Kitty pages extra special with these simple tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pastel-pink/20 p-2 rounded-full">
                  <Palette className="h-5 w-5 text-pastel-pink" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Classic Colors</h3>
              </div>
              <p className="text-gray-600 mb-4">Hello Kitty looks great in her traditional colors:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded"></div>
                  <span>White body and face</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span>Red or pink bow</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                  <span>Yellow nose</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-black rounded"></div>
                  <span>Black eyes and whiskers</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                But feel free to use any colors you like - it's your artwork!
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-400/20 p-2 rounded-full">
                  <Star className="h-5 w-5 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Fun Ideas</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Try rainbow colors for Hello Kitty's bow</li>
                <li>• Add patterns to her clothes and accessories</li>
                <li>• Use glitter crayons for a sparkly effect</li>
                <li>• Color the background with your favorite scene</li>
                <li>• Make each Hello Kitty page unique and special</li>
              </ul>
              <div className="mt-6 p-4 bg-pastel-pink/10 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Parent Tip:</strong> Let kids choose their own colors - creativity is more important than
                  staying "realistic"!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Hello Kitty Pages */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
              Different Hello Kitty Styles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect Hello Kitty page for every mood and skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-pastel-pink/20 p-3 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-pastel-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Simple Hello Kitty</h3>
              <p className="text-gray-600">
                Easy designs perfect for young children just learning to color. Big shapes and simple lines.
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-400/20 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hello Kitty & Friends</h3>
              <p className="text-gray-600">
                Pages with Hello Kitty and her cute friends like My Melody and Keroppi - more fun to color!
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-pastel-pink/20 p-3 rounded-full w-fit mb-4">
                <Star className="h-6 w-6 text-pastel-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Holiday Hello Kitty</h3>
              <p className="text-gray-600">
                Special pages for Christmas, Halloween, birthdays, and other celebrations throughout the year.
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-400/20 p-3 rounded-full w-fit mb-4">
                <Palette className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Activity Pages</h3>
              <p className="text-gray-600">
                Hello Kitty doing fun activities like baking, playing, or going to school - lots to color!
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-pastel-pink/20 p-3 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-pastel-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Fashion Hello Kitty</h3>
              <p className="text-gray-600">
                Hello Kitty wearing different outfits and accessories - perfect for kids who love fashion!
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-400/20 p-3 rounded-full w-fit mb-4">
                <Star className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Detailed Scenes</h3>
              <p className="text-gray-600">
                Complex pages with Hello Kitty in beautiful settings - great for older kids who want a challenge.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Common Questions
              </h2>
              <p className="text-gray-600">Everything parents want to know about Hello Kitty coloring pages</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white/40 p-6 rounded-xl border border-pastel-pink/10">
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  What age are Hello Kitty coloring pages good for?
                </h3>
                <p className="text-gray-600">
                  Hello Kitty pages work for ages 3 and up! We have simple designs for toddlers and more detailed ones
                  for older kids. Even adults enjoy coloring Hello Kitty for relaxation.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-xl border border-pastel-pink/10">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Why doesn't Hello Kitty have a mouth?</h3>
                <p className="text-gray-600">
                  Hello Kitty was designed without a mouth so kids can imagine how she's feeling. She can be happy, sad,
                  or excited - whatever matches your child's mood!
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-xl border border-pastel-pink/10">
                <h3 className="text-lg font-bold mb-3 text-gray-800">What's the best way to print these pages?</h3>
                <p className="text-gray-600">
                  Print on regular white paper for crayons and colored pencils. For markers or paints, use thicker paper
                  so colors don't bleed through to the other side.
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-xl border border-pastel-pink/10">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Are these pages free to use?</h3>
                <p className="text-gray-600">
                  Yes! Our Hello Kitty coloring pages are free to download and print for personal use. Perfect for home,
                  school, or daycare activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pastel-pink/20 to-orange-400/20 backdrop-blur-sm border border-pastel-pink/30 rounded-3xl p-12 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
              Create Your Own Hello Kitty Pages
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Want custom Hello Kitty coloring pages? Our AI can create unique designs just for you!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white border-0 px-8 py-4 text-lg"
            >
              Create Custom Pages
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
            "@type": "Article",
            headline: "Hello Kitty Coloring Pages",
            description:
              "Download free printable Hello Kitty coloring pages featuring Sanrio's beloved character in various cute scenes perfect for Hello Kitty fans of all ages.",
            image: "/placeholder.svg?key=rda15",
            author: {
              "@type": "Organization",
              name: "Drawgle",
            },
            publisher: {
              "@type": "Organization",
              name: "Drawgle",
              logo: {
                "@type": "ImageObject",
                url: "https://drawgle.in/logo.png",
              },
            },
            datePublished: "2023-01-01T00:00:00Z",
          }),
        }}
      />
    </div>
  )
}
