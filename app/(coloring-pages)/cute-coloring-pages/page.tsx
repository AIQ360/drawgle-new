import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Heart, Star, Sparkles, Download, Users, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Cute Coloring Pages - Adorable Free Printables for Kids & Adults",
  description:
    "Download 500+ free cute coloring pages! Kawaii animals, sweet treats, magical creatures, and adorable characters. Perfect for all ages who love heartwarming designs.",
  openGraph: {
    title: "Cute Coloring Pages - Adorable Free Printables",
    description:
      "Download 500+ free cute coloring pages featuring kawaii animals, sweet treats, and magical creatures. Perfect for kids and adults who love adorable designs.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Cute Coloring Pages Collection",
      },
    ],
  },
}

export default function CuteColoringPages() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-pink-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link href="/coloring-pages" className="hover:text-pink-600 transition-colors">
                Coloring Pages
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <span aria-current="page" className="text-pink-600 font-medium">
                Cute Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="relative rounded-3xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/90 via-purple-200/90 to-orange-200/90 backdrop-blur-sm z-10" />
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-100 to-orange-100"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ec4899' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Cute Coloring Pages Hero"
              width={1200}
              height={500}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
                <Sparkles className="h-6 w-6 text-purple-600" />
                <Star className="h-7 w-7 text-orange-500" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">Cute Coloring Pages</h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
                Adorable designs that make everyone smile! From kawaii animals to sweet treats, discover coloring pages
                that warm your heart.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white/70 backdrop-blur-sm border-pink-100 hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Download className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Cute Designs</div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-purple-100 hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">All Ages</div>
                <div className="text-sm text-gray-600">Kid to Adult</div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-orange-100 hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">Instant</div>
                <div className="text-sm text-gray-600">Download</div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-pink-100 hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">Free</div>
                <div className="text-sm text-gray-600">Always</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-white/70 backdrop-blur-sm border-pink-100">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Everyone Loves Cute Coloring Pages</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  There's something magical about cute coloring pages. Those big sparkly eyes, sweet smiles, and
                  adorable poses just make you feel happy! Whether you're 5 or 95, these charming designs bring out your
                  playful side and create moments of pure joy.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From kawaii animals with rosy cheeks to smiling cupcakes and magical unicorns, our cute coloring pages
                  are perfect for anyone who believes the world needs more sweetness.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Adorable Coloring Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kawaii Animals */}
            <Card className="bg-white/70 backdrop-blur-sm border-pink-100 hover:bg-white/80 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Kawaii Animals Coloring Pages"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Kawaii Animals</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Adorable animals with big sparkly eyes, tiny noses, and the sweetest expressions. Perfect for anyone
                  who loves cute creatures!
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>• Sleepy pandas and playful kittens</li>
                  <li>• Baby foxes and smiling bunnies</li>
                  <li>• Tiny hedgehogs and happy puppies</li>
                </ul>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">View Kawaii Animals</Button>
              </CardContent>
            </Card>

            {/* Sweet Treats */}
            <Card className="bg-white/70 backdrop-blur-sm border-purple-100 hover:bg-white/80 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Sweet Treats Coloring Pages"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Sweet Treats</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Yummy foods with the cutest faces! These smiling treats will make you hungry for both snacks and
                  coloring fun.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>• Smiling cupcakes with cherry tops</li>
                  <li>• Happy ice cream cones</li>
                  <li>• Giggling donuts and cookies</li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">View Sweet Treats</Button>
              </CardContent>
            </Card>

            {/* Magical Creatures */}
            <Card className="bg-white/70 backdrop-blur-sm border-orange-100 hover:bg-white/80 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Magical Creatures Coloring Pages"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Magical Creatures</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Enchanting friends from fairy tale lands! These magical beings bring wonder and sparkle to every
                  coloring session.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>• Baby unicorns with rainbow manes</li>
                  <li>• Tiny fairies with butterfly wings</li>
                  <li>• Friendly dragons and mermaids</li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">View Magical Creatures</Button>
              </CardContent>
            </Card>

            {/* Everyday Objects */}
            <Card className="bg-white/70 backdrop-blur-sm border-green-100 hover:bg-white/80 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Everyday Objects Coloring Pages"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Happy Objects</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Who knew everyday things could be so cute? These smiling objects turn ordinary items into adorable
                  friends.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>• Smiling suns and happy clouds</li>
                  <li>• Cute school supplies</li>
                  <li>• Friendly household items</li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">View Happy Objects</Button>
              </CardContent>
            </Card>

            {/* Nature & Flowers */}
            <Card className="bg-white/70 backdrop-blur-sm border-blue-100 hover:bg-white/80 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Nature Coloring Pages"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Sweet Nature</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Nature gets extra cute with these adorable designs! Flowers, trees, and garden friends with the
                  sweetest personalities.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>• Smiling flowers and happy trees</li>
                  <li>• Cute mushrooms and plants</li>
                  <li>• Garden creatures with big eyes</li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">View Sweet Nature</Button>
              </CardContent>
            </Card>

            {/* Seasonal Cute */}
            <Card className="bg-white/70 backdrop-blur-sm border-yellow-100 hover:bg-white/80 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Seasonal Cute Coloring Pages"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Holiday Cuties</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Celebrate every season with adorable holiday friends! These cute characters make every celebration
                  extra special.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>• Christmas kawaii characters</li>
                  <li>• Easter bunnies and spring friends</li>
                  <li>• Halloween cuties (not scary!)</li>
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">View Holiday Cuties</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Age-Specific Benefits */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-pink-100/50 to-purple-100/50 backdrop-blur-sm border-pink-100">
            <CardContent className="p-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Perfect for Every Age</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-pink-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-pink-700">3-6</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Little Ones</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Big, simple shapes with thick lines make it easy for small hands to color. Cute faces help kids
                    learn about emotions and expressions while having fun.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-700">7-12</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">School Kids</h3>
                  <p className="text-gray-600 leading-relaxed">
                    More detailed designs let kids practice staying in the lines and choosing colors. Perfect for quiet
                    time, rewards, or sharing with friends.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-orange-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-700">13+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Teens & Adults</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Intricate kawaii designs offer relaxing stress relief. Great for unwinding after school or work, and
                    perfect for social media sharing!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Featured Coloring Pages */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Most Loved Cute Coloring Pages</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "Sleepy Panda", category: "Animals", difficulty: "Easy" },
              { title: "Smiling Cupcake", category: "Treats", difficulty: "Easy" },
              { title: "Baby Unicorn", category: "Magic", difficulty: "Medium" },
              { title: "Happy Sun", category: "Nature", difficulty: "Easy" },
              { title: "Kawaii Cat", category: "Animals", difficulty: "Medium" },
              { title: "Ice Cream Cone", category: "Treats", difficulty: "Easy" },
              { title: "Tiny Fairy", category: "Magic", difficulty: "Hard" },
              { title: "Smiling Flower", category: "Nature", difficulty: "Easy" },
            ].map((page, i) => (
              <Card
                key={i}
                className="bg-white/70 backdrop-blur-sm border-pink-100 hover:bg-white/80 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&query=Cute%20kawaii%20${page.title.toLowerCase()}%20coloring%20page`}
                    alt={`${page.title} Coloring Page`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        page.difficulty === "Easy"
                          ? "bg-green-100 text-green-700"
                          : page.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {page.difficulty}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{page.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{page.category}</p>
                  <Button size="sm" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3"
            >
              View All 500+ Cute Pages
            </Button>
          </div>
        </section>

        {/* Coloring Tips */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-orange-100/50 to-pink-100/50 backdrop-blur-sm border-orange-100">
            <CardContent className="p-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Make Your Cute Pages Extra Special</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Heart className="h-6 w-6 text-pink-500 mr-2" />
                    Color Choices That Pop
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Pastel Paradise</h4>
                      <p className="text-gray-600">
                        Soft pinks, baby blues, and mint greens make everything look dreamy and sweet.
                      </p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Bright & Happy</h4>
                      <p className="text-gray-600">
                        Bold colors like sunshine yellow and cherry red make cute characters come alive!
                      </p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Rainbow Magic</h4>
                      <p className="text-gray-600">
                        Use all the colors! Cute pages look amazing with rainbow gradients and color mixing.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
                    Special Touches
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Rosy Cheeks</h4>
                      <p className="text-gray-600">
                        Add pink circles on cheeks to make characters extra adorable and kawaii-style!
                      </p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Sparkle Effects</h4>
                      <p className="text-gray-600">
                        Use white gel pens or leave white spots for magical sparkles and shine.
                      </p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Pattern Fun</h4>
                      <p className="text-gray-600">
                        Add polka dots, stripes, or hearts to clothes and backgrounds for extra cuteness!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Cute Coloring Pages Are Amazing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/70 backdrop-blur-sm border-pink-100 text-center">
              <CardContent className="p-6">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Instant Happiness</h3>
                <p className="text-gray-600">
                  Those sweet faces and adorable designs just make you smile! Perfect for brightening any day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-purple-100 text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Family Bonding</h3>
                <p className="text-gray-600">
                  Everyone loves cute things! Perfect activity for parents, kids, and grandparents to enjoy together.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-orange-100 text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Stress Relief</h3>
                <p className="text-gray-600">
                  Coloring cute characters is like meditation! Helps you relax and forget about worries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-green-100 text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Creativity Boost</h3>
                <p className="text-gray-600">
                  No rules with cute coloring! Try wild color combinations and let your imagination run free.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-blue-100 text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Skill Building</h3>
                <p className="text-gray-600">
                  Improves hand control, focus, and color recognition while having tons of fun!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-yellow-100 text-center">
              <CardContent className="p-6">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Screen-Free Fun</h3>
                <p className="text-gray-600">
                  Give your eyes a break from screens! Enjoy quiet, peaceful coloring time instead.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Makes Kawaii Special */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-purple-100/50 to-pink-100/50 backdrop-blur-sm border-purple-100">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                  What Makes Kawaii Style So Special?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Kawaii Style Features"
                      width={500}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      "Kawaii" means "cute" in Japanese, and it's become a worldwide style that makes everything
                      adorable! Here's what makes kawaii characters so irresistibly cute:
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-pink-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <span className="text-pink-700 font-bold">👀</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Big Sparkly Eyes</h4>
                          <p className="text-gray-600">
                            Huge eyes that take up lots of space on the face - they look innocent and sweet!
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-purple-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-700 font-bold">😊</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Simple Happy Faces</h4>
                          <p className="text-gray-600">
                            Small mouths, tiny noses, and rosy cheeks that make you want to smile back!
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-orange-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                          <span className="text-orange-700 font-bold">🎨</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Soft Round Shapes</h4>
                          <p className="text-gray-600">
                            Everything is round and squishy-looking, like you want to give it a hug!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ideas for Using Cute Coloring Pages */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Fun Ways to Use Your Cute Coloring Pages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/70 backdrop-blur-sm border-pink-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">At Home</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Make greeting cards for friends and family</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Decorate your room with finished artwork</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create a family coloring night tradition</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Make bookmarks for your favorite books</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Turn them into stickers or magnets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">At School & Parties</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quiet activity during indoor recess</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Party favors that keep kids busy</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Rewards for good behavior or completed work</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Art class projects and creativity time</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Calm-down activity for upset children</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <Card className="bg-white/70 backdrop-blur-sm border-pink-100">
            <CardContent className="p-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Questions About Cute Coloring Pages
              </h2>

              <div className="max-w-4xl mx-auto space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">What age is best for cute coloring pages?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Everyone! Little kids (3+) love the simple, happy faces. School kids enjoy the details and patterns.
                    Teens and adults find them relaxing and fun to share on social media. There's no age limit on cute!
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    What's the difference between cute and kawaii coloring pages?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kawaii is a specific Japanese style of cute with big eyes, small mouths, and round shapes. "Cute"
                    coloring pages include kawaii style plus other adorable designs like realistic baby animals, sweet
                    cartoon characters, and charming objects with faces.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    What colors work best for cute coloring pages?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pastels (soft pink, baby blue, mint green) are perfect for that sweet kawaii look. Bright colors
                    (hot pink, sunshine yellow, sky blue) make characters pop and look happy. Don't be afraid to use
                    rainbow colors - cute pages look amazing with lots of color!
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Can I use these for school projects or parties?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our cute coloring pages are perfect for classroom activities, birthday parties, playdates, and
                    family gatherings. They're great for keeping kids happy and engaged during events.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">How do I make my coloring look extra kawaii?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Add rosy pink cheeks, use soft pastel colors, leave white highlights in the eyes for sparkle, and
                    don't forget to add little hearts or stars around your characters. The key is keeping everything
                    soft, round, and sweet-looking!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Categories */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">More Adorable Coloring Fun</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Unicorn Coloring Pages", href: "/unicorn-coloring-pages", color: "purple" },
              { name: "Hello Kitty Pages", href: "/hello-kitty-coloring-pages", color: "pink" },
              { name: "Pokemon Coloring", href: "/pokemon-coloring-pages", color: "yellow" },
              { name: "Animal Coloring Pages", href: "/animal-coloring-pages", color: "green" },
            ].map((category, i) => (
              <Link key={i} href={category.href} className="group">
                <Card
                  className={`bg-white/70 backdrop-blur-sm border-${category.color}-100 hover:bg-white/80 hover:shadow-lg transition-all duration-300`}
                >
                  <CardContent className="p-4 text-center">
                    <h3 className={`font-bold text-${category.color}-700 group-hover:text-${category.color}-800`}>
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-pink-200/80 to-purple-200/80 backdrop-blur-sm border-pink-200">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center items-center gap-2 mb-6">
                <Heart className="h-8 w-8 text-pink-600" />
                <Sparkles className="h-6 w-6 text-purple-600" />
                <Star className="h-7 w-7 text-orange-500" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready for Cute Coloring Fun?</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Download our adorable coloring pages and start creating happiness today! Perfect for kids, adults, and
                anyone who believes the world needs more cuteness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Free Cute Pages
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-3 bg-transparent"
                >
                  Create Custom Cute Pages
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Cute Coloring Pages",
              description:
                "Download 500+ free cute coloring pages featuring kawaii animals, sweet treats, magical creatures, and adorable characters. Perfect for all ages who love heartwarming designs.",
              keywords:
                "cute coloring pages, kawaii coloring pages, adorable coloring pages, sweet coloring pages, printable cute designs",
              url: "https://example.com/cute-coloring-pages",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Kawaii Animals Coloring Pages",
                    url: "https://example.com/cute-coloring-pages/kawaii-animals",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Sweet Treats Coloring Pages",
                    url: "https://example.com/cute-coloring-pages/sweet-treats",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Magical Creatures Coloring Pages",
                    url: "https://example.com/cute-coloring-pages/magical-creatures",
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
