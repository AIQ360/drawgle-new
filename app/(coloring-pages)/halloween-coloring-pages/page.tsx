import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, Star, Heart, Users, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Halloween Coloring Pages | Free Spooky Fun Printables for Kids & Adults",
  description:
    "Download 200+ free printable Halloween coloring pages featuring friendly ghosts, pumpkins, witches, and spooky-fun designs. Perfect for kids, classrooms, and Halloween parties.",
  openGraph: {
    title: "Halloween Coloring Pages | Free Spooky Fun Printables",
    description:
      "Discover 200+ free Halloween coloring pages with pumpkins, friendly ghosts, witches, and educational spooky designs for all ages.",
    images: [
      {
        url: "/placeholder.svg?key=halloween-hero",
        width: 1200,
        height: 630,
        alt: "Halloween Coloring Pages Collection",
      },
    ],
  },
}

export default function HalloweenColoringPages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50">
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
                Halloween Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Halloween
              <br />
              <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Coloring Pages
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover 200+ free printable Halloween coloring pages featuring friendly ghosts, carved pumpkins, magical
              witches, and spooky-fun designs. Perfect for Halloween parties, classroom activities, and family bonding
              time during the spooky season.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">200+ Designs</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">All Ages</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Family Friendly</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Free Download</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#featured-pages">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Browse Free Pages
                </Button>
              </Link>
              <Link href="#categories">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pastel-pink/30 hover:border-pastel-pink px-8 py-6 text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300 bg-transparent"
                >
                  View Categories
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
                <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-gray-600">Halloween Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">35K+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
                <div className="text-gray-600">Spooky Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9★</div>
                <div className="text-gray-600">Parent Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Halloween Coloring Pages Matter */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Halloween Coloring Pages Are Perfect for Seasonal Learning
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Halloween coloring pages combine seasonal excitement with valuable learning opportunities, helping
              children develop creativity while exploring cultural traditions and overcoming fears in a safe, fun
              environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emotional Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Fear Management:</strong> Friendly Halloween characters help children process scary themes
                  safely
                </li>
                <li>
                  • <strong>Seasonal Excitement:</strong> Channel Halloween enthusiasm into creative, productive
                  activities
                </li>
                <li>
                  • <strong>Cultural Understanding:</strong> Learn about Halloween traditions and their meanings
                </li>
                <li>
                  • <strong>Self-Expression:</strong> Choose colors and styles to personalize spooky characters
                </li>
                <li>
                  • <strong>Confidence Building:</strong> Complete challenging Halloween scenes for sense of
                  accomplishment
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social & Family Bonding</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Party Activities:</strong> Perfect for Halloween parties and group celebrations
                </li>
                <li>
                  • <strong>Family Traditions:</strong> Create annual Halloween coloring traditions and memories
                </li>
                <li>
                  • <strong>Classroom Fun:</strong> Engage students in seasonal learning activities
                </li>
                <li>
                  • <strong>Decoration Making:</strong> Turn completed pages into Halloween decorations
                </li>
                <li>
                  • <strong>Storytelling:</strong> Use colored pages to create Halloween stories and adventures
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Fine Motor Skills:</strong> Detailed Halloween designs improve hand control and precision
                </li>
                <li>
                  • <strong>Color Theory:</strong> Learn about Halloween colors - orange, black, purple, and green
                </li>
                <li>
                  • <strong>Pattern Recognition:</strong> Identify patterns in spider webs, pumpkin carvings, and
                  decorations
                </li>
                <li>
                  • <strong>Vocabulary Building:</strong> Learn Halloween-specific words and seasonal terminology
                </li>
                <li>
                  • <strong>Cultural Literacy:</strong> Understand Halloween symbols and their historical significance
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Halloween Categories */}
        <section id="categories" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Halloween Coloring Collection</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our carefully curated Halloween collection covers every spooky theme, from friendly characters perfect for
              young children to detailed scenes that challenge older kids and adults.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Friendly Ghosts */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src="/placeholder.svg?key=friendly-ghosts"
                  alt="Friendly Ghost Halloween Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  35+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Friendly Ghosts & Spirits</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Cute, non-scary ghosts perfect for young children. These friendly spirits help kids overcome fears
                  while having Halloween fun.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Smiling ghost families</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Ghosts playing games</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Simple, bold outlines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Perfect for ages 3-6</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Browse Ghost Pages
                </Button>
              </CardContent>
            </Card>

            {/* Pumpkins & Jack-o-lanterns */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-orange-50 to-orange-100">
                <Image
                  src="/placeholder.svg?key=pumpkins"
                  alt="Pumpkin Jack-o-lantern Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  40+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pumpkins & Jack-o-lanterns</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Classic Halloween pumpkins with various carved faces and expressions. Great for teaching about harvest
                  traditions and seasonal changes.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Carved jack-o-lantern faces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Pumpkin patch scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Harvest festival themes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Educational elements</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  View Pumpkin Pages
                </Button>
              </CardContent>
            </Card>

            {/* Witches & Magic */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-purple-50 to-purple-100">
                <Image
                  src="/placeholder.svg?key=witches"
                  alt="Witch and Magic Halloween Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  30+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Witches & Magical Scenes</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Friendly witches with broomsticks, cauldrons, and magical spells. Perfect for sparking imagination and
                  creativity.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Kind witch characters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Magic potion brewing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Flying broomstick scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Magical spell ingredients</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Explore Witch Pages
                </Button>
              </CardContent>
            </Card>

            {/* Halloween Animals */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-amber-50 to-amber-100">
                <Image
                  src="/placeholder.svg?key=halloween-animals"
                  alt="Halloween Animals Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  25+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Halloween Animals & Creatures</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Black cats, bats, spiders, and owls in Halloween settings. Great for learning about nocturnal animals
                  and their habitats.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Friendly black cats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Flying bats and owls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Cute spider families</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Educational animal facts</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Meet Halloween Animals
                </Button>
              </CardContent>
            </Card>

            {/* Halloween Costumes */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src="/placeholder.svg?key=costumes"
                  alt="Halloween Costume Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  20+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Halloween Costumes & Dress-Up</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Children in various Halloween costumes, from superheroes to princesses. Perfect for costume planning
                  and creative inspiration.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Popular costume ideas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Trick-or-treat scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Costume accessories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Creative inspiration</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  Browse Costume Pages
                </Button>
              </CardContent>
            </Card>

            {/* Haunted Houses */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src="/placeholder.svg?key=haunted-houses"
                  alt="Haunted House Halloween Coloring Pages"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  15+ Pages
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Haunted Houses & Spooky Scenes</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Mildly spooky houses and Halloween scenes designed to be fun rather than frightening. Perfect for
                  older children who enjoy more detailed coloring.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Victorian-style houses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Halloween decorations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Detailed architectural elements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                    <span>Ages 7+ recommended</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  View Spooky Houses
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Age-Specific Guide */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect Halloween Coloring Pages for Every Age</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our Halloween collection is carefully designed to match developmental stages, ensuring every child gets
                the perfect balance of fun and challenge for their age group.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3-5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Preschool Halloween Fun</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Simple, friendly Halloween characters with large coloring areas perfect for developing fine motor
                    skills.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Smiling pumpkins with big faces</li>
                    <li>• Friendly ghosts (not scary)</li>
                    <li>• Simple witch hats and brooms</li>
                    <li>• Large black cats and bats</li>
                    <li>• Bold, thick outlines</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Develops:</strong> Hand control, color recognition, Halloween vocabulary
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">6-8</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Elementary Halloween Adventures</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    More detailed Halloween scenes that challenge growing skills while teaching about traditions and
                    overcoming fears.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Trick-or-treat neighborhood scenes</li>
                    <li>• Witches brewing magical potions</li>
                    <li>• Detailed jack-o-lantern carvings</li>
                    <li>• Halloween costume parties</li>
                    <li>• Moderate complexity patterns</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Develops:</strong> Attention to detail, cultural understanding, patience
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">9+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Halloween Art</h3>
                <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Intricate Halloween designs and detailed scenes for advanced colorists seeking creative challenges
                    and stress relief.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Detailed haunted house architecture</li>
                    <li>• Complex spider web patterns</li>
                    <li>• Intricate witch and wizard scenes</li>
                    <li>• Halloween mandala designs</li>
                    <li>• Advanced shading opportunities</li>
                  </ul>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong>Benefits:</strong> Stress relief, artistic expression, focus improvement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Applications */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Educational Halloween Coloring Activities</h2>
              <p className="text-lg text-gray-600">
                Transform Halloween coloring time into valuable learning experiences with these educational approaches
                and cross-curricular connections.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Classroom Integration Ideas</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">History & Social Studies</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Halloween Origins:</strong> Learn about Celtic Samhain traditions
                      </li>
                      <li>
                        • <strong>Cultural Celebrations:</strong> Compare Halloween worldwide
                      </li>
                      <li>
                        • <strong>Harvest Festivals:</strong> Connect to agricultural history
                      </li>
                      <li>
                        • <strong>Immigration Stories:</strong> How Halloween came to America
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Science Connections</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Nocturnal Animals:</strong> Study bats, owls, and spiders
                      </li>
                      <li>
                        • <strong>Plant Life Cycles:</strong> How pumpkins grow and develop
                      </li>
                      <li>
                        • <strong>Seasonal Changes:</strong> Why leaves change color in fall
                      </li>
                      <li>
                        • <strong>Light and Shadow:</strong> Physics of spooky effects
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Language Arts Enhancement</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Vocabulary Building:</strong> Halloween-specific terminology
                      </li>
                      <li>
                        • <strong>Creative Writing:</strong> Stories about colored characters
                      </li>
                      <li>
                        • <strong>Poetry Creation:</strong> Halloween haikus and rhymes
                      </li>
                      <li>
                        • <strong>Reading Comprehension:</strong> Halloween-themed stories
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Home Learning Activities</h3>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Family Bonding Projects</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Halloween Story Time:</strong> Color while listening to spooky stories
                      </li>
                      <li>
                        • <strong>Decoration Making:</strong> Turn pages into Halloween decorations
                      </li>
                      <li>
                        • <strong>Costume Planning:</strong> Use coloring pages for costume inspiration
                      </li>
                      <li>
                        • <strong>Memory Books:</strong> Create annual Halloween coloring albums
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Party & Event Activities</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Coloring Contests:</strong> Age-appropriate competition categories
                      </li>
                      <li>
                        • <strong>Group Projects:</strong> Collaborative Halloween murals
                      </li>
                      <li>
                        • <strong>Quiet Activities:</strong> Calm alternatives to high-energy games
                      </li>
                      <li>
                        • <strong>Take-Home Favors:</strong> Personalized coloring page packets
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Therapeutic Applications</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <strong>Fear Processing:</strong> Safe way to explore scary themes
                      </li>
                      <li>
                        • <strong>Anxiety Relief:</strong> Calming activity during exciting season
                      </li>
                      <li>
                        • <strong>Focus Building:</strong> Concentration practice through detailed work
                      </li>
                      <li>
                        • <strong>Emotional Expression:</strong> Color choices reflect feelings
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Pages Preview */}
        <section id="featured-pages" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Most Popular Halloween Coloring Pages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our top-rated Halloween coloring pages, loved by families and educators for their perfect balance
              of spooky fun and age-appropriate design.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Friendly Ghost Family", downloads: "12K+", rating: "4.9", age: "Ages 3-6" },
              { title: "Pumpkin Patch Scene", downloads: "15K+", rating: "4.8", age: "Ages 4-8" },
              { title: "Witch's Magical Garden", downloads: "10K+", rating: "4.9", age: "Ages 6-10" },
              { title: "Halloween Costume Party", downloads: "8K+", rating: "4.7", age: "Ages 5-9" },
              { title: "Spooky Haunted House", downloads: "9K+", rating: "4.8", age: "Ages 8+" },
              { title: "Black Cat & Bats", downloads: "11K+", rating: "4.9", age: "Ages 4-7" },
              { title: "Trick-or-Treat Street", downloads: "13K+", rating: "4.8", age: "Ages 5-10" },
              { title: "Halloween Animals", downloads: "7K+", rating: "4.6", age: "Ages 3-6" },
            ].map((page, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-xl overflow-hidden hover:border-pastel-pink/40 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={`/placeholder.svg?key=halloween${i}`}
                    alt={`${page.title} Halloween Coloring Page`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                    {page.rating}★
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                    {page.age}
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

        {/* Halloween History & Traditions */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-2xl p-8 border border-pastel-pink/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Halloween History & Educational Value</h2>
                <p className="text-lg text-gray-600">
                  Learn about Halloween traditions while coloring, making this spooky season both fun and educational
                  for children of all ages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Origins of Halloween</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Halloween traces its roots to the ancient Celtic festival of Samhain, celebrated over 2,000 years
                      ago. The Celts believed that on October 31st, the boundary between the living and dead became
                      blurred, and ghosts returned to earth.
                    </p>
                    <p>
                      When the Romans conquered Celtic lands, they combined Samhain with their own festivals. Later,
                      Christian influence transformed it into All Hallows' Eve, the night before All Saints' Day.
                    </p>
                    <p>
                      Irish immigrants brought Halloween traditions to America in the 1840s, where it evolved into the
                      community-centered holiday we know today, focused on costumes, trick-or-treating, and family fun.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Educational Benefits of Halloween Coloring</h3>
                  <div className="space-y-4">
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                      <h4 className="font-semibold text-gray-900 mb-2">Cultural Literacy</h4>
                      <p className="text-sm text-gray-600">
                        Understanding Halloween symbols and traditions helps children connect with cultural heritage and
                        develop appreciation for historical celebrations.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                      <h4 className="font-semibold text-gray-900 mb-2">Fear Management</h4>
                      <p className="text-sm text-gray-600">
                        Coloring friendly versions of traditionally scary characters helps children process and overcome
                        fears in a safe, controlled environment.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-pastel-pink/20">
                      <h4 className="font-semibold text-gray-900 mb-2">Seasonal Awareness</h4>
                      <p className="text-sm text-gray-600">
                        Halloween coloring pages teach about autumn changes, harvest time, and the natural cycles that
                        influenced ancient celebrations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive FAQ */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Know About Halloween Coloring Pages
              </h2>
              <p className="text-lg text-gray-600">
                Expert answers to common questions about using Halloween coloring pages for education, parties, and
                family fun.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Are these Halloween coloring pages too scary for young children?",
                  answer:
                    "Our Halloween coloring pages are carefully designed with age-appropriate content. For children ages 3-6, we focus on friendly ghosts, smiling pumpkins, and cute witches that aren't frightening. We clearly label each page with recommended age ranges, and our 'friendly' category specifically features non-scary designs that help children enjoy Halloween themes without fear. Parents can preview all pages before printing to ensure they match their child's comfort level.",
                },
                {
                  question: "How can I use Halloween coloring pages for educational purposes in my classroom?",
                  answer:
                    "Halloween coloring pages offer excellent cross-curricular learning opportunities. Use them to teach about cultural traditions and history, discussing how Halloween evolved from ancient Celtic festivals. In science class, explore nocturnal animals like bats and owls, or study pumpkin life cycles. For language arts, encourage creative writing about colored characters or build Halloween vocabulary. Math activities can include counting pumpkins, measuring jack-o-lantern faces, or creating patterns with Halloween symbols. The seasonal theme naturally engages students while supporting academic learning.",
                },
                {
                  question: "What's the best way to organize Halloween coloring activities for a party or classroom?",
                  answer:
                    "Set up different coloring stations based on age groups and skill levels. Provide a variety of coloring tools including crayons, colored pencils, and washable markers. Create a 'gallery wall' where children can display their completed work. Consider organizing a friendly coloring contest with categories like 'Most Creative Colors' or 'Best Halloween Story' to encourage participation without pressure. Prepare take-home packets with extra coloring pages as party favors. For large groups, print multiple copies of popular designs to avoid conflicts over favorite pages.",
                },
                {
                  question: "How can Halloween coloring pages help children who are afraid of Halloween?",
                  answer:
                    "Halloween coloring pages provide a gentle, controlled way for children to explore Halloween themes at their own pace. Start with the friendliest designs - smiling ghosts, happy pumpkins, and kind witches. Let children choose their own colors, which gives them control over the experience. Use coloring time to talk about Halloween in positive ways, explaining that it's all pretend and meant to be fun. Gradually introduce slightly more detailed designs as children become comfortable. The act of coloring itself is calming and can help reduce anxiety while building positive associations with Halloween imagery.",
                },
                {
                  question: "What coloring supplies work best for Halloween coloring pages?",
                  answer:
                    "For best results, use a variety of coloring tools to match different age groups and preferences. Crayons work well for younger children (ages 3-6) as they're easy to grip and provide good coverage. Colored pencils are perfect for older children who want more control and detail work. Washable markers create vibrant colors that match the Halloween spirit. For special effects, consider metallic markers or gel pens to add shimmer to spider webs, witch cauldrons, or ghost outlines. Always use quality paper (at least 20lb weight) to prevent bleed-through, especially with markers.",
                },
                {
                  question: "Can I use these Halloween coloring pages to create decorations for my home or classroom?",
                  answer:
                    "Completed Halloween coloring pages make wonderful decorations and give children pride in displaying their artwork. Laminate finished pages to create reusable decorations for future years. String multiple pages together to create Halloween bunting or garlands. Frame particularly special pieces as seasonal art displays. Use completed pages as placemats for Halloween meals or party tables. Create a collaborative Halloween mural by having multiple children color different pages that tell a story when displayed together. This transforms coloring from a simple activity into meaningful home or classroom décor.",
                },
                {
                  question: "How do I choose the right Halloween coloring pages for different age groups?",
                  answer:
                    "Age-appropriate selection is crucial for engagement and success. For ages 3-5, choose pages with large, simple shapes, thick outlines, and friendly characters. Avoid intricate details that might frustrate developing fine motor skills. Ages 6-8 can handle moderate complexity with more detailed scenes but still need clear, defined areas to color. Ages 9 and up can enjoy intricate designs with small details, complex patterns, and realistic proportions. Always consider the individual child's skill level and attention span rather than just chronological age. Provide options so children can choose their preferred challenge level.",
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Seasonal Coloring Pages</h2>
            <p className="text-gray-600">
              Discover our complete collection of seasonal and holiday coloring activities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Fall Coloring Pages", subtitle: "Autumn leaves & harvest", href: "/fall-coloring-pages" },
              { title: "Christmas Pages", subtitle: "Holiday celebrations", href: "/christmas-coloring-pages" },
              { title: "Kids Collection", subtitle: "All age groups", href: "/coloring-pages-for-kids" },
              { title: "Animal Pages", subtitle: "Wildlife & pets", href: "/animal-coloring-pages" },
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
            <h2 className="text-4xl font-bold mb-4">Ready for Spooky Halloween Fun?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Download our free Halloween coloring pages and add some creative spooky fun to your celebration! Perfect
              for parties, classrooms, and family bonding time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-pastel-pink hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Halloween Pages
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl bg-transparent"
              >
                <Palette className="w-5 h-5 mr-2" />
                Create Custom Halloween Pages
              </Button>
            </div>

            <div className="mt-6 text-sm opacity-75">
              <span>✨ 200+ spooky designs • All ages • Educational value • Instant download</span>
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
              name: "Halloween Coloring Pages - Free Spooky Fun Printables",
              description:
                "Download 200+ free printable Halloween coloring pages featuring friendly ghosts, pumpkins, witches, and educational spooky designs for all ages.",
              keywords:
                "Halloween coloring pages, pumpkin coloring pages, ghost coloring pages, witch coloring pages, printable Halloween activities, Halloween party activities, educational Halloween pages",
              url: "https://drawgle.in/halloween-coloring-pages",
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: 200,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Friendly Ghost Halloween Coloring Pages",
                    url: "https://drawgle.in/halloween-coloring-pages/ghosts",
                    description: "35+ friendly ghost coloring pages perfect for young children",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Pumpkin & Jack-o-lantern Coloring Pages",
                    url: "https://drawgle.in/halloween-coloring-pages/pumpkins",
                    description: "40+ pumpkin coloring pages with various carved faces and harvest scenes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Halloween Witch Coloring Pages",
                    url: "https://drawgle.in/halloween-coloring-pages/witches",
                    description: "30+ magical witch coloring pages with broomsticks and cauldrons",
                  },
                ],
              },
              about: {
                "@type": "Thing",
                name: "Halloween Educational Activities",
                description:
                  "Free printable Halloween coloring pages designed for child development, education, and family bonding during Halloween season",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Families, Teachers, Children, Parents, Educators",
                geographicArea: "Global",
              },
              educationalUse:
                "Art Education, Cultural Learning, Halloween Activities, Seasonal Education, Fear Management, Fine Motor Skill Development",
              isAccessibleForFree: true,
              inLanguage: "en-US",
            }),
          }}
        />
      </div>
    </div>
  )
}
