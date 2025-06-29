import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Download, Printer, Heart, Star, Users, Home, Zap, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sonic Coloring Pages | Free Printable Sonic the Hedgehog Coloring Sheets | Drawgle",
  description:
    "Download free printable Sonic the Hedgehog coloring pages featuring Sonic, Tails, Knuckles, Shadow and more. Perfect for kids who love speed and adventure!",
  openGraph: {
    title: "Sonic Coloring Pages | Free Printable Sonic the Hedgehog Coloring Sheets",
    description:
      "Download free printable Sonic the Hedgehog coloring pages featuring Sonic, Tails, Knuckles, Shadow and more. Perfect for kids who love speed and adventure!",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Sonic the Hedgehog coloring pages collection",
      },
    ],
  },
}

export default function SonicColoringPages() {
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

      <div className="relative">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-pastel-pink transition-colors flex items-center">
                <Home className="h-4 w-4 mr-1" />
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
              <span className="font-medium text-gray-900">Sonic Coloring Pages</span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Gotta Go Fast!</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Sonic Coloring Pages
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Free printable Sonic the Hedgehog coloring pages featuring everyone's favorite speedy blue hero and his
              friends. Perfect for kids who love adventure and fast-paced fun!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#sonic-pages">
                  <Download className="h-5 w-5 mr-2" />
                  Get Free Pages
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-pastel-pink/30 hover:bg-pastel-pink/10 px-8 py-3 rounded-full text-lg font-medium bg-transparent"
              >
                <Link href="#coloring-tips">
                  <Star className="h-5 w-5 mr-2" />
                  Coloring Tips
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Kids Love Sonic Coloring */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Why Kids Love Sonic Coloring Pages
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Super Speed Adventure</h3>
                <p className="text-gray-600">
                  Kids love Sonic's fast-paced world! Coloring speed lines and action scenes makes them feel part of the
                  adventure.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Friendship & Teamwork</h3>
                <p className="text-gray-600">
                  Sonic and his friends show kids how teamwork and friendship help solve problems and have fun together.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Bright, Fun Colors</h3>
                <p className="text-gray-600">
                  Sonic's world is full of vibrant blues, oranges, and greens that make coloring exciting and help kids
                  learn about colors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sonic Characters */}
        <section id="sonic-pages" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Popular Sonic Characters to Color
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sonicCharacters.map((character, index) => (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="aspect-square relative p-4">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&query=${encodeURIComponent(character.name + " sonic coloring page line art")}`}
                    alt={`${character.name} coloring page`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-white/90 text-gray-800 hover:bg-white">
                        <Download className="h-4 w-4 mr-1" />
                        Get
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 border-white/50 text-gray-800 hover:bg-white"
                      >
                        <Printer className="h-4 w-4 mr-1" />
                        Print
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{character.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{character.description}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${character.colorClass}`}></div>
                    <span className="text-xs text-gray-500">{character.mainColor}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#download">
                <Download className="h-5 w-5 mr-2" />
                Download All Sonic Pages
              </Link>
            </Button>
          </div>
        </section>

        {/* Sonic's World Guide */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Explore Sonic's Amazing World
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-2xl border border-green-100">
                <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-green-600 font-bold">🌴</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Green Hill Zone</h3>
                <p className="text-xs text-gray-600">Grassy hills and loops</p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">💧</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Labyrinth Zone</h3>
                <p className="text-xs text-gray-600">Underwater mazes</p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-2xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">🌟</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Star Light Zone</h3>
                <p className="text-xs text-gray-600">Sparkling night scenes</p>
              </div>

              <div className="text-center p-4 bg-red-50 rounded-2xl border border-red-100">
                <div className="w-12 h-12 bg-red-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-red-600 font-bold">🔥</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Marble Zone</h3>
                <p className="text-xs text-gray-600">Ancient ruins and lava</p>
              </div>
            </div>
          </div>
        </section>

        {/* Age-Specific Guide */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Perfect for Every Age</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Ages 3-5</h3>
                <p className="text-gray-600 mb-4">
                  Simple Sonic designs with thick lines and big spaces. Perfect for little speedsters learning to color!
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-700 font-medium">Best: Basic Sonic running</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Ages 6-9</h3>
                <p className="text-gray-600 mb-4">
                  Action scenes with Sonic and friends. Great for kids who love adventure stories and detailed coloring.
                </p>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm text-orange-700 font-medium">Best: Sonic with Tails adventures</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Ages 10-12</h3>
                <p className="text-gray-600 mb-4">
                  Complex battle scenes and detailed character designs. Perfect for older kids and Sonic game fans!
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-sm text-purple-700 font-medium">Best: Epic Sonic vs Shadow battles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coloring Tips */}
        <section id="coloring-tips" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Easy Sonic Coloring Tips</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Sonic's True Colors</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                  <span>
                    <strong>Sonic:</strong> Bright blue body, peach belly and arms
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white shadow-sm"></div>
                  <span>
                    <strong>Tails:</strong> Orange fur, white chest and twin tails
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
                  <span>
                    <strong>Knuckles:</strong> Red fur, white chest crescent
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-pink-400 rounded-full border-2 border-white shadow-sm"></div>
                  <span>
                    <strong>Amy:</strong> Pink fur, red dress and boots
                  </span>
                </div>
              </div>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Fun Coloring Ideas</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Add speed lines:</strong> Draw swoosh marks to show Sonic running fast
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Color the rings:</strong> Make them bright gold or yellow
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Try rainbow colors:</strong> Make your own special Sonic!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Add backgrounds:</strong> Green hills, blue skies, or space scenes
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Benefits for Kids */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Why Parents Love Sonic Coloring Pages
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Learning Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-600">Improves hand-eye coordination and fine motor skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-600">Teaches patience and focus through completing pictures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-600">Helps kids learn about colors and color combinations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-600">Builds confidence when they complete their artwork</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Family Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Perfect quiet activity for rainy days or calm time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Great way for families to spend quality time together</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Screen-free entertainment that sparks creativity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Easy to pack for travel and restaurant visits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Printing Guide */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Easy Printing Guide for Parents
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">What You Need</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Regular copy paper:</strong> Works great for crayons and colored pencils
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Cardstock paper:</strong> Better for markers (won't bleed through)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Any home printer:</strong> Inkjet or laser both work fine
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Black ink:</strong> That's all you need for the outlines
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Best Print Settings</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Quality:</strong> "Normal" or "High" for clear lines
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Size:</strong> "Fit to Page" so it fills the whole paper
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Color:</strong> "Black & White" to save colored ink
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Orientation:</strong> "Portrait" for most Sonic pages
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Get All Sonic Coloring Pages</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Download our complete collection of Sonic coloring pages. All your favorite characters and scenes in one
              place!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/dashboard/subscription">
                  <Download className="h-5 w-5 mr-2" />
                  Get Premium Access
                </Link>
              </Button>
              <p className="text-sm text-gray-600">
                Already a member?{" "}
                <Link href="/sign-in" className="text-pastel-pink hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Simple FAQ */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Common Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Are these Sonic pages really free?</h3>
              <p className="text-gray-600">
                Yes! We offer many free Sonic coloring pages that you can download and print at home right away. Perfect
                for trying out before getting our premium collection.
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">What age are these good for?</h3>
              <p className="text-gray-600">
                Our Sonic pages work for kids ages 3 and up! We have simple designs for little ones and detailed action
                scenes for older kids. Even adults who love Sonic enjoy coloring these pages.
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Can teachers use these in class?</h3>
              <p className="text-gray-600">
                These are perfect for classroom activities, art time, indoor recess, or as rewards for good behavior.
                Kids love getting Sonic pages to color.
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Do you have all the Sonic characters?</h3>
              <p className="text-gray-600">
                We have all the popular characters kids love - Sonic, Tails, Knuckles, Amy, Shadow, and more! We're
                always adding new characters and scenes to our collection.
              </p>
            </Card>
          </div>
        </section>

        {/* Related Pages */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">More Fun Coloring Pages</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <Link href="/pokemon-coloring-pages">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Pokemon coloring pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pastel-pink transition-colors">
                    Pokemon Coloring Pages
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Catch 'em all with Pikachu and friends</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <Link href="/minecraft-coloring-pages">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Minecraft coloring pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pastel-pink transition-colors">
                    Minecraft Coloring Pages
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Blocky adventures and pixelated fun</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <Link href="/coloring-pages-for-kids">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Kids coloring pages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pastel-pink transition-colors">
                    More Kids Pages
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Hundreds of fun designs for children</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </section>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Sonic Coloring Pages",
              description:
                "Download free printable Sonic the Hedgehog coloring pages featuring Sonic, Tails, Knuckles, Shadow and more. Perfect for kids who love speed and adventure!",
              url: "https://drawgle.in/sonic-coloring-pages",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    url: "https://drawgle.in/sonic-coloring-pages#sonic-pages",
                    name: "Printable Sonic Coloring Pages",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    url: "https://drawgle.in/sonic-coloring-pages#download",
                    name: "Download Sonic Coloring Pages",
                  },
                ],
              },
            }),
          }}
        />
      </div>
    </div>
  )
}

// Sonic characters data for the featured coloring pages
const sonicCharacters = [
  {
    name: "Sonic the Hedgehog",
    description: "The speedy blue hero everyone loves! Perfect for kids who want to color their favorite character.",
    mainColor: "Bright Blue",
    colorClass: "bg-blue-500",
  },
  {
    name: "Tails the Fox",
    description: "Sonic's best friend with twin tails that help him fly! Great for younger kids to color.",
    mainColor: "Orange",
    colorClass: "bg-orange-400",
  },
  {
    name: "Knuckles the Echidna",
    description: "The strong guardian who protects the Master Emerald. Fun red character to color!",
    mainColor: "Red",
    colorClass: "bg-red-500",
  },
  {
    name: "Amy Rose",
    description: "Sonic's friend who loves adventure and has a big heart. Perfect pink character for kids.",
    mainColor: "Pink",
    colorClass: "bg-pink-400",
  },
  {
    name: "Shadow the Hedgehog",
    description: "The ultimate life form with super speed. Cool black and red design for older kids.",
    mainColor: "Black & Red",
    colorClass: "bg-gray-800",
  },
  {
    name: "Dr. Eggman",
    description: "Sonic's silly enemy who builds robots. Fun villain character that's not too scary.",
    mainColor: "Red & Yellow",
    colorClass: "bg-yellow-400",
  },
]
