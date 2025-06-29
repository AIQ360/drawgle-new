import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Printer,
  Download,
  ChevronRight,
  Heart,
  Star,
  Users,
  Palette,
  Clock,
  Award,
  BookOpen,
  Zap,
  Droplets,
  Leaf,
  Flame,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Pokemon Coloring Pages | Free Printable Pikachu & Friends | Drawgle",
  description:
    "Free printable Pokemon coloring pages for kids! Download Pikachu, Charizard, Eevee and more. Perfect for Pokemon fans ages 3-12. Print at home instantly.",
  openGraph: {
    title: "Pokemon Coloring Pages | Free Printable Pikachu & Friends",
    description: "Free printable Pokemon coloring pages for kids! Download Pikachu, Charizard, Eevee and more.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Pokemon coloring pages collection featuring Pikachu and friends",
      },
    ],
  },
}

export default function PokemonColoringPages() {
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
              <Link href="/" className="hover:text-pastel-pink transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/coloring-pages-for-kids" className="hover:text-pastel-pink transition-colors">
                Kids Coloring Pages
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium text-gray-900">Pokemon Pages</span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Gotta Color 'Em All!</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
              Pokemon Coloring Pages
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Free printable Pokemon coloring pages your kids will love! Print Pikachu, Charizard, and all their
              favorite pocket monsters at home. Perfect for Pokemon fans ages 3-12.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                asChild
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#pokemon-collection">
                  <Download className="h-5 w-5 mr-2" />
                  Get Free Pages
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-2 border-pastel-pink/30 hover:bg-pastel-pink/10 px-8 py-3 rounded-full text-lg font-medium bg-white/60 backdrop-blur-sm"
              >
                <Link href="#printing-guide">
                  <Printer className="h-5 w-5 mr-2" />
                  Printing Tips
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-pastel-pink" />
                <span>Print in 30 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-pastel-pink" />
                <span>Perfect for ages 3-12</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-pastel-pink" />
                <span>Teacher approved</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Pokemon Coloring is Great for Kids */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Why Kids Love Pokemon Coloring
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Pokemon coloring pages combine creativity with beloved characters, making art time extra special for your
              little ones.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Their Favorite Characters</h3>
                <p className="text-gray-600">
                  Kids already know and love Pikachu, Charizard, and friends from games and shows. Coloring them feels
                  like playing with old friends!
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Easy to Color</h3>
                <p className="text-gray-600">
                  Simple, clear lines that are perfect for little hands. No tiny details to frustrate young artists -
                  just pure coloring fun!
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Learning Through Play</h3>
                <p className="text-gray-600">
                  Kids learn colors, improve hand coordination, and practice staying in lines - all while having fun
                  with Pokemon!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pokemon Collection */}
        <section id="pokemon-collection" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Popular Pokemon to Color</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Start with these fan-favorite Pokemon that kids love most. Each page is designed to be fun and easy to
            color.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {pokemonData.map((pokemon, index) => (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="aspect-square relative p-4">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&query=${encodeURIComponent(pokemon.name + " pokemon coloring page line art simple")}`}
                    alt={`${pokemon.name} coloring page for kids`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-4 right-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${pokemon.typeColor}`}>
                      {pokemon.typeIcon}
                    </div>
                  </div>

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
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{pokemon.name}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {pokemon.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{pokemon.description}</p>
                  <p className="text-xs text-pastel-pink font-medium">{pokemon.ageRange}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#download-all">
                <Download className="h-5 w-5 mr-2" />
                Download All Pokemon Pages
              </Link>
            </Button>
          </div>
        </section>

        {/* Pokemon Types Guide */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Pokemon Types & Colors</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Help your kids learn about different Pokemon types while they color. Each type has special colors that
              make them unique!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Electric</h3>
                <p className="text-sm text-gray-600 mb-2">Yellow & bright colors</p>
                <p className="text-xs text-gray-500">Pikachu, Raichu</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-100 rounded-2xl border border-red-200">
                <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Flame className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Fire</h3>
                <p className="text-sm text-gray-600 mb-2">Red, orange & yellow</p>
                <p className="text-xs text-gray-500">Charizard, Charmander</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Water</h3>
                <p className="text-sm text-gray-600 mb-2">Blue & aqua colors</p>
                <p className="text-xs text-gray-500">Squirtle, Gyarados</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Grass</h3>
                <p className="text-sm text-gray-600 mb-2">Green & nature colors</p>
                <p className="text-xs text-gray-500">Bulbasaur, Leafeon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Age-Specific Guide */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Perfect Pokemon for Every Age
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the right Pokemon coloring pages based on your child's age and skill level for the best experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👶</div>
                <h3 className="text-xl font-semibold text-gray-800">Ages 3-5</h3>
                <p className="text-sm text-pastel-pink font-medium">Toddlers & Preschoolers</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-pastel-pink text-sm">•</span>
                  <span className="text-sm text-gray-600">
                    <strong>Best Pokemon:</strong> Pikachu, Jigglypuff - big, simple shapes
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pastel-pink text-sm">•</span>
                  <span className="text-sm text-gray-600">
                    <strong>What they learn:</strong> Basic colors, staying in lines
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pastel-pink text-sm">•</span>
                  <span className="text-sm text-gray-600">
                    <strong>Perfect for:</strong> First coloring experiences
                  </span>
                </div>
              </div>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🧒</div>
                <h3 className="text-xl font-semibold text-gray-800">Ages 6-9</h3>
                <p className="text-sm text-pastel-pink font-medium">Elementary Kids</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-pastel-pink text-sm">•</span>
                  <span className="text-sm text-gray-600">
                    <strong>Best Pokemon:</strong> Charizard, Eevee - more details
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pastel-pink text-sm">•</span>
                  <span className="text-sm text-gray-600">
                    <strong>What they learn:</strong> Color mixing, pattern recognition
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pastel-pink text-sm">•</span>
                  <span className="text-sm text-gray-600">
                    <strong>Perfect for:</strong> After-school activities, quiet time
                  </span>
                </div>
              </div>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👦</div>
                <h3 className="text-xl font-semibold text-gray-800">Ages 10-12</h3>
                <p className="text-sm text-pastel-pink font-medium">Older Kids</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-pastel-pink text-sm">•</span>
                  <span className="text-sm text-gray-600">
                    <strong>Best Pokemon:</strong> Mewtwo, battle scenes - complex designs
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pastel-pink text-sm">•</span>
                  <span className="text-sm text-gray-600">
                    <strong>What they learn:</strong> Shading, artistic techniques
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pastel-pink text-sm">•</span>
                  <span className="text-sm text-gray-600">
                    <strong>Perfect for:</strong> Art projects, creative challenges
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Coloring Tips & Printing Guide */}
        <section id="printing-guide" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Easy Pokemon Coloring Tips</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Palette className="h-5 w-5 text-pastel-pink" />
                Fun Coloring Ideas
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Use real Pokemon colors:</strong> Yellow Pikachu, orange Charizard - kids love accuracy!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Try rainbow Pokemon:</strong> Let kids create their own special color versions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Add backgrounds:</strong> Draw grass, sky, or Pokemon centers around them
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Make it personal:</strong> Let kids choose their favorite colors - there's no wrong way!
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Printer className="h-5 w-5 text-pastel-pink" />
                Printing Made Simple
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Paper:</strong> Regular white printer paper works perfectly
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Settings:</strong> Print at 100% size for best results
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Quality:</strong> Normal print quality is fine - saves ink too!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pastel-pink">•</span>
                  <span>
                    <strong>Pro tip:</strong> Print multiple copies so kids can try different color combinations
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Benefits for Parents & Teachers */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-pastel-pink/10 to-orange-100/20 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Great for Parents & Teachers
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Pokemon coloring pages aren't just fun - they're educational tools that help kids develop important
              skills.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Perfect for Parents</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-pastel-pink">✓</span>
                    <span>Quiet activity for car rides and waiting rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pastel-pink">✓</span>
                    <span>Screen-free entertainment that kids actually want to do</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pastel-pink">✓</span>
                    <span>Bonding time - color together and share Pokemon stories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pastel-pink">✓</span>
                    <span>Builds focus and patience in a fun way</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Great for Teachers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-pastel-pink">✓</span>
                    <span>Reward system - kids love earning Pokemon pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pastel-pink">✓</span>
                    <span>Art class activities that engage reluctant artists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pastel-pink">✓</span>
                    <span>Indoor recess activity when weather doesn't cooperate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pastel-pink">✓</span>
                    <span>Helps develop fine motor skills and hand-eye coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download-all" className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-pastel-pink/20 to-orange-100/30 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Get All Pokemon Coloring Pages</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Download our complete Pokemon collection! Over 50 different Pokemon characters, all ready to print and
              color at home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button
                asChild
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/free-coloring-pages">
                  <Download className="h-5 w-5 mr-2" />
                  Get Free Pokemon Pages
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-pastel-pink/30 hover:bg-pastel-pink/10 px-8 py-4 rounded-full text-lg font-medium bg-white/60 backdrop-blur-sm"
              >
                <Link href="/coloring-pages-for-kids">
                  <Star className="h-5 w-5 mr-2" />
                  See All Kids Pages
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-600">
              Want even more? Check out our{" "}
              <Link href="/premium-coloring-pages" className="text-pastel-pink hover:underline font-medium">
                premium collection
              </Link>{" "}
              with exclusive Pokemon designs!
            </p>
          </div>
        </section>

        {/* Simple FAQ */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Common Questions About Pokemon Coloring
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Are these Pokemon coloring pages really free?
              </h3>
              <p className="text-gray-600">
                Yes! We offer many free Pokemon coloring pages that you can download and print at home right away. No
                hidden costs or sign-ups required.
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">What age are these Pokemon pages best for?</h3>
              <p className="text-gray-600">
                Our Pokemon coloring pages work great for kids ages 3-12. We have simple designs for little ones and
                more detailed ones for older kids who want a challenge.
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Can teachers use these in their classrooms?</h3>
              <p className="text-gray-600">
                These are perfect for classroom activities, art time, rewards for good behavior, or indoor recess when
                kids need a quiet activity.
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                What's the best way to print these Pokemon pages?
              </h3>
              <p className="text-gray-600">
                Regular white printer paper works perfectly! Print at 100% size for the best experience. You can use
                normal print quality to save ink - the lines will still be clear and easy to color.
              </p>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Do you have all the popular Pokemon characters?
              </h3>
              <p className="text-gray-600">
                We have all the favorites that kids love most - Pikachu, Charizard, Eevee, Squirtle, Bulbasaur, and many
                more! We're always adding new Pokemon to our collection.
              </p>
            </Card>
          </div>
        </section>

        {/* Related Pages */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            More Fun Character Coloring Pages
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            If your kids love Pokemon, they'll also enjoy these other popular character coloring pages!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <Link href="/bluey-coloring-pages">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Bluey coloring pages for kids"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pastel-pink transition-colors">
                    Bluey Coloring Pages
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Fun family adventures with Bluey and Bingo</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <Link href="/sonic-coloring-pages">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sonic coloring pages for kids"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pastel-pink transition-colors">
                    Sonic Coloring Pages
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Fast-paced fun with Sonic the Hedgehog</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <Link href="/minecraft-coloring-pages">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Minecraft coloring pages for kids"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pastel-pink transition-colors">
                    Minecraft Coloring Pages
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Blocky adventures and creative building</p>
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
              name: "Pokemon Coloring Pages for Kids",
              description:
                "Free printable Pokemon coloring pages for kids! Download Pikachu, Charizard, Eevee and more. Perfect for Pokemon fans ages 3-12. Print at home instantly.",
              url: "https://drawgle.in/pokemon-coloring-pages",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    url: "https://drawgle.in/pokemon-coloring-pages#pokemon-collection",
                    name: "Free Pokemon Coloring Pages Collection",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    url: "https://drawgle.in/pokemon-coloring-pages#printing-guide",
                    name: "Pokemon Coloring Tips and Printing Guide",
                  },
                ],
              },
              audience: {
                "@type": "Audience",
                audienceType: "Children",
                suggestedMinAge: 3,
                suggestedMaxAge: 12,
              },
            }),
          }}
        />
      </div>
    </div>
  )
}

// Pokemon data for the featured coloring pages
const pokemonData = [
  {
    name: "Pikachu",
    description: "The most famous Pokemon! Perfect for beginners with simple, friendly shapes.",
    difficulty: "Easy",
    ageRange: "Perfect for ages 3+",
    typeColor: "bg-yellow-400",
    typeIcon: <Zap className="h-4 w-4 text-white" />,
  },
  {
    name: "Charizard",
    description: "A majestic fire dragon that kids love to color orange and red.",
    difficulty: "Medium",
    ageRange: "Great for ages 6+",
    typeColor: "bg-red-500",
    typeIcon: <Flame className="h-4 w-4 text-white" />,
  },
  {
    name: "Bulbasaur",
    description: "A cute grass Pokemon with simple shapes, perfect for nature lovers!",
    difficulty: "Easy",
    ageRange: "Perfect for ages 4+",
    typeColor: "bg-green-500",
    typeIcon: <Leaf className="h-4 w-4 text-white" />,
  },
  {
    name: "Squirtle",
    description: "A happy water Pokemon that's always smiling - kids love the shell pattern!",
    difficulty: "Easy",
    ageRange: "Perfect for ages 4+",
    typeColor: "bg-blue-500",
    typeIcon: <Droplets className="h-4 w-4 text-white" />,
  },
  {
    name: "Eevee",
    description: "A fluffy Pokemon with lots of evolution possibilities - so many color options!",
    difficulty: "Medium",
    ageRange: "Great for ages 5+",
    typeColor: "bg-amber-600",
    typeIcon: <Heart className="h-4 w-4 text-white" />,
  },
  {
    name: "Mewtwo",
    description: "A powerful psychic Pokemon that older kids love to color with detail.",
    difficulty: "Hard",
    ageRange: "Best for ages 8+",
    typeColor: "bg-purple-500",
    typeIcon: <Star className="h-4 w-4 text-white" />,
  },
]
