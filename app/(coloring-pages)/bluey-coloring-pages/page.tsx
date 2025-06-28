import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, Star, Heart, Users, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Bluey Coloring Pages | Free Printable Blue Heeler Family Fun | Drawgle",
  description:
    "Download 100+ free printable Bluey coloring pages featuring Bluey, Bingo, Bandit, and Chilli. Perfect for preschoolers and fans of the beloved Australian TV show.",
  openGraph: {
    title: "Bluey Coloring Pages | Free Printable Blue Heeler Family Fun",
    description:
      "Download 100+ free Bluey coloring pages featuring the beloved blue heeler puppy and her family from the hit Australian children's TV show.",
    images: [
      {
        url: "/placeholder.svg?key=bluey-hero",
        width: 1200,
        height: 630,
        alt: "Bluey coloring pages featuring the Heeler family",
      },
    ],
  },
}

export default function BlueyColoringPages() {
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
                Bluey Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Free Bluey
              <br />
              <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Coloring Pages
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover 100+ free printable Bluey coloring pages featuring the beloved Blue Heeler family. Perfect for
              preschoolers and fans of Australia's favorite animated family, promoting creativity and family bonding
              through imaginative play.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">100+ Pages</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">All Characters</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Preschool Perfect</span>
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
              <Link href="#character-guide">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pastel-pink/30 hover:border-pastel-pink px-8 py-6 text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300 bg-transparent"
                >
                  Character Guide
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
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Coloring Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">25K+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
                <div className="text-gray-600">Character Types</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9★</div>
                <div className="text-gray-600">Parent Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bluey Coloring Pages Matter */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Bluey Coloring Pages Are Perfect for Young Children
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bluey coloring pages combine the joy of Australia's most beloved animated family with important
              developmental benefits, helping children learn while having fun with their favorite characters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family Values & Bonding</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Positive Role Models:</strong> Bluey shows healthy family relationships
                </li>
                <li>
                  • <strong>Imaginative Play:</strong> Encourages creative thinking and storytelling
                </li>
                <li>
                  • <strong>Emotional Intelligence:</strong> Characters express feelings in healthy ways
                </li>
                <li>
                  • <strong>Problem Solving:</strong> Episodes show kids working through challenges
                </li>
                <li>
                  • <strong>Sibling Relationships:</strong> Bluey and Bingo model loving sibling bonds
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Child Development Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Fine Motor Skills:</strong> Coloring improves hand control and writing readiness
                </li>
                <li>
                  • <strong>Color Recognition:</strong> Learning character colors and creative combinations
                </li>
                <li>
                  • <strong>Focus & Patience:</strong> Completing pages builds concentration skills
                </li>
                <li>
                  • <strong>Following Directions:</strong> Simple coloring instructions develop listening
                </li>
                <li>
                  • <strong>Confidence Building:</strong> Finishing pages creates sense of accomplishment
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Connection</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Australian Culture:</strong> Learn about different countries and cultures
                </li>
                <li>
                  • <strong>Animal Learning:</strong> Discover facts about Blue Heeler dogs
                </li>
                <li>
                  • <strong>Family Structures:</strong> Understanding different family roles
                </li>
                <li>
                  • <strong>Social Skills:</strong> Learning friendship and cooperation
                </li>
                <li>
                  • <strong>Emotional Vocabulary:</strong> Naming and discussing feelings
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Coloring Pages */}
        <section id="featured-pages" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Bluey Coloring Pages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular Bluey coloring pages featuring all the beloved characters from the hit Australian TV
              show, designed specifically for preschool-aged children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bluey Character Page */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src="/placeholder.svg?key=bluey-main"
                  alt="Bluey coloring page - main character"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bluey - The Blue Heeler Puppy</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  The energetic and imaginative 6-year-old Blue Heeler who loves to play games and go on adventures with
                  her family.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Light blue body with darker patches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Perfect for ages 3-7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Simple lines for easy coloring</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </CardContent>
            </Card>

            {/* Bingo Character Page */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-orange-50 to-red-100">
                <Image
                  src="/placeholder.svg?key=bingo-main"
                  alt="Bingo coloring page - Bluey's sister"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  Fan Favorite
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bingo - The Sweet Little Sister</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Bluey's 4-year-old sister, a red heeler puppy who is thoughtful, gentle, and loves to play along with
                  Bluey's games.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Orange-red body with darker patches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Great for younger children</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Teaches sibling love</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </CardContent>
            </Card>

            {/* Family Page */}
            <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100">
                <Image
                  src="/placeholder.svg?key=heeler-family"
                  alt="Heeler family coloring page"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  Family Fun
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Heeler Family Together</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  The whole family - Bluey, Bingo, Dad (Bandit), and Mum (Chilli) - enjoying time together and showing
                  what loving families look like.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>All four family members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Perfect for family coloring time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Teaches family values</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Character Guide */}
        <section id="character-guide" className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Bluey Character Coloring Guide</h2>
                <p className="text-lg text-gray-600">
                  Learn the correct colors for each character and discover fun facts about the Heeler family to make
                  coloring time both fun and educational.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Main Characters & Their Colors</h3>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
                        Bluey (6 years old)
                      </h4>
                      <p className="text-gray-600 mb-3">
                        The main character - a bright, energetic Blue Heeler puppy who loves imaginative games and
                        adventures.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          • <strong>Body:</strong> Light blue with darker blue patches
                        </li>
                        <li>
                          • <strong>Face & Chest:</strong> White or cream
                        </li>
                        <li>
                          • <strong>Nose:</strong> Black
                        </li>
                        <li>
                          • <strong>Personality:</strong> Creative, energetic, loving big sister
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-4 h-4 bg-orange-400 rounded-full mr-3"></div>
                        Bingo (4 years old)
                      </h4>
                      <p className="text-gray-600 mb-3">
                        Bluey's younger sister - a sweet Red Heeler puppy who is thoughtful and loves to follow along
                        with games.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          • <strong>Body:</strong> Orange-red with darker red patches
                        </li>
                        <li>
                          • <strong>Face & Chest:</strong> White or cream
                        </li>
                        <li>
                          • <strong>Nose:</strong> Black
                        </li>
                        <li>
                          • <strong>Personality:</strong> Gentle, thoughtful, creative little sister
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-4 h-4 bg-gray-600 rounded-full mr-3"></div>
                        Bandit (Dad)
                      </h4>
                      <p className="text-gray-600 mb-3">
                        The girls' dad - a playful Blue Heeler who loves spending time with his family and joining in
                        their games.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          • <strong>Body:</strong> Dark blue-gray with lighter patches
                        </li>
                        <li>
                          • <strong>Face & Chest:</strong> White or cream
                        </li>
                        <li>
                          • <strong>Personality:</strong> Fun-loving, patient, involved dad
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                        Chilli (Mum)
                      </h4>
                      <p className="text-gray-600 mb-3">
                        The girls' mum - a caring Red Heeler who balances work and family while being a wonderful role
                        model.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          • <strong>Body:</strong> Reddish-orange with lighter patches
                        </li>
                        <li>
                          • <strong>Face & Chest:</strong> White or cream
                        </li>
                        <li>
                          • <strong>Personality:</strong> Caring, wise, supportive mum
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Coloring Tips for Success</h3>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Best Coloring Tools</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>
                          • <strong>Crayons:</strong> Perfect for younger children (ages 2-5)
                        </li>
                        <li>
                          • <strong>Colored Pencils:</strong> Great for older kids who want more control
                        </li>
                        <li>
                          • <strong>Washable Markers:</strong> Bright colors like the TV show
                        </li>
                        <li>
                          • <strong>Watercolors:</strong> For a softer, artistic look
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Coloring Techniques</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Start with lighter colors first</li>
                        <li>• Use different shades for the patches (light and dark)</li>
                        <li>• Color in one direction for smooth coverage</li>
                        <li>• Take breaks to avoid getting tired</li>
                        <li>• Don't worry about staying perfectly in the lines</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Making It Educational</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Talk about the characters while coloring</li>
                        <li>• Discuss what makes a good family</li>
                        <li>• Learn about Australia and Blue Heeler dogs</li>
                        <li>• Practice counting (how many characters?)</li>
                        <li>• Name the colors you're using</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Family Coloring Time</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Color together as a family activity</li>
                        <li>• Share favorite Bluey episodes while coloring</li>
                        <li>• Display finished artwork on the fridge</li>
                        <li>• Use coloring time to talk about feelings</li>
                        <li>• Make it a regular family tradition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Bluey Pages */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Bluey Coloring Collection</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our full range of Bluey coloring pages, from simple character portraits perfect for toddlers to
              detailed family scenes that older children will love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Individual Character Pages</h3>
              <p className="text-gray-600 mb-4">
                Simple, clear outlines of each character perfect for young children just learning to color.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bluey portrait pages</li>
                <li>• Bingo character sheets</li>
                <li>• Mum and Dad coloring pages</li>
                <li>• Large, easy-to-color designs</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Activity Scenes</h3>
              <p className="text-gray-600 mb-4">
                The Heeler family playing games and spending time together, just like in the TV show.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Playing in the backyard</li>
                <li>• Family game time</li>
                <li>• Beach and park adventures</li>
                <li>• Bedtime and story time</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Popular Episode Scenes</h3>
              <p className="text-gray-600 mb-4">
                Coloring pages based on favorite Bluey episodes that children love to watch and re-create.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Keepy Uppy balloon game</li>
                <li>• The Floor is Lava</li>
                <li>• Dance Mode fun</li>
                <li>• Hospital and doctor play</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bluey's Friends</h3>
              <p className="text-gray-600 mb-4">
                Meet Bluey's school friends and neighborhood pals in these fun coloring pages.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Coco the pink poodle</li>
                <li>• Snickers the sausage dog</li>
                <li>• Mackenzie the border collie</li>
                <li>• Honey the beagle</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Heeler Home</h3>
              <p className="text-gray-600 mb-4">
                Color the family's beautiful Brisbane home and backyard where so many adventures take place.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• The Queenslander house</li>
                <li>• Backyard play area</li>
                <li>• Living room scenes</li>
                <li>• Kitchen family time</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Special Occasions</h3>
              <p className="text-gray-600 mb-4">
                Celebrate holidays and special events with Bluey-themed coloring pages for every season.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Birthday party celebrations</li>
                <li>• Christmas with the Heelers</li>
                <li>• Easter egg hunts</li>
                <li>• Back to school themes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Educational Benefits */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How Bluey Coloring Pages Help Child Development</h2>
              <p className="text-lg text-gray-600">
                Beyond the fun, Bluey coloring pages offer real developmental benefits that support your child's growth
                in multiple areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Physical Development</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fine Motor Skills</h4>
                    <p className="text-sm text-gray-600">
                      Holding crayons and coloring within lines helps develop the small muscles in hands and fingers,
                      preparing children for writing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hand-Eye Coordination</h4>
                    <p className="text-sm text-gray-600">
                      Coordinating what they see with hand movements improves overall coordination and spatial
                      awareness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pencil Grip</h4>
                    <p className="text-sm text-gray-600">
                      Regular coloring practice helps children develop proper pencil grip for future writing success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cognitive & Emotional Growth</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus & Concentration</h4>
                    <p className="text-sm text-gray-600">
                      Completing coloring pages helps children develop longer attention spans and the ability to focus
                      on tasks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Color Recognition & Learning</h4>
                    <p className="text-sm text-gray-600">
                      Learning character colors and making color choices develops color recognition and decision-making
                      skills.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Emotional Connection</h4>
                    <p className="text-sm text-gray-600">
                      Coloring favorite characters creates positive emotional connections and can be calming during
                      stressful times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions About Bluey Coloring Pages</h2>
              <p className="text-lg text-gray-600">
                Everything parents need to know about using Bluey coloring pages for fun and learning.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What age are Bluey coloring pages best for?",
                  answer:
                    "Bluey coloring pages work great for children ages 2-8. We have simple designs with thick lines perfect for toddlers (2-4 years), and more detailed pages that older preschoolers and early elementary children (4-8 years) will enjoy. The characters appeal to the same age group that watches the TV show.",
                },
                {
                  question: "What colors should I use for each Bluey character?",
                  answer:
                    "Bluey has a light blue body with darker blue patches, white chest and face. Bingo is orange-red with darker red patches and white markings. Dad (Bandit) is dark blue-gray, and Mum (Chilli) is reddish-orange. All characters have black noses and white or cream on their faces and chests. But remember - creativity is encouraged, so any colors your child chooses are perfect!",
                },
                {
                  question: "How can I make Bluey coloring educational?",
                  answer:
                    "While coloring, talk about the characters and their relationships, discuss colors and counting, learn about Australia where Bluey lives, talk about Blue Heeler dogs and their characteristics, and connect the coloring to episodes your child has watched. You can also use coloring time to discuss family values and emotions that the show teaches.",
                },
                {
                  question: "What's the best way to print Bluey coloring pages?",
                  answer:
                    "Print on regular white paper or slightly thicker paper if you plan to use markers. Make sure your printer is set to high quality for clear, dark lines. If using markers or paint, put a piece of cardboard or extra paper underneath to prevent bleed-through. Standard 8.5x11 inch paper works perfectly for most coloring pages.",
                },
                {
                  question: "Can adults enjoy Bluey coloring pages too?",
                  answer:
                    "Many parents find coloring with their children relaxing and fun. It's a great way to spend quality time together, and adults often appreciate the positive family messages in Bluey. Some of our more detailed family scene pages provide enough complexity to keep adults engaged while coloring alongside their kids.",
                },
                {
                  question: "How do Bluey coloring pages help with child development?",
                  answer:
                    "Bluey coloring pages help develop fine motor skills needed for writing, improve hand-eye coordination, build focus and concentration, teach color recognition, and provide emotional benefits through connection with beloved characters. The positive family themes in Bluey also make these coloring pages great conversation starters about family relationships and emotions.",
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

        {/* About Bluey */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-2xl p-8 border border-pastel-pink/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Bluey - Australia's Beloved Family Show</h2>
                <p className="text-lg text-gray-600">
                  Learn about the award-winning Australian children's show that has captured hearts worldwide with its
                  authentic portrayal of family life.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Show</h3>
                  <p className="text-gray-600 mb-4">
                    Bluey is an Australian animated TV series that premiered in 2018 and has become a global phenomenon.
                    The show follows a 6-year-old Blue Heeler puppy named Bluey who lives in Brisbane with her family.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Each episode shows Bluey and her 4-year-old sister Bingo playing imaginative games with their
                    parents, Bandit and Chilli. The show is praised for showing realistic family life where parents
                    actively participate in their children's play and learning.
                  </p>
                  <p className="text-gray-600">
                    Bluey has won numerous awards including an International Emmy and has been praised by parents and
                    child development experts for its positive messages about family, creativity, and emotional
                    intelligence.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Parents Love Bluey</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>
                      • <strong>Realistic Family Life:</strong> Shows real parenting moments, both fun and challenging
                    </li>
                    <li>
                      • <strong>Positive Role Models:</strong> Parents who are engaged, patient, and playful
                    </li>
                    <li>
                      • <strong>Educational Value:</strong> Teaches emotional intelligence and problem-solving
                    </li>
                    <li>
                      • <strong>Imaginative Play:</strong> Encourages creativity and active play over screen time
                    </li>
                    <li>
                      • <strong>Family Values:</strong> Shows love, respect, and cooperation within families
                    </li>
                    <li>
                      • <strong>Australian Culture:</strong> Introduces children to different cultures and places
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Fun Coloring Pages</h2>
            <p className="text-gray-600">Discover other popular coloring page collections your family will love</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Kids Collection", subtitle: "All ages & characters", href: "/coloring-pages-for-kids" },
              { title: "Christmas Pages", subtitle: "Holiday family fun", href: "/christmas-coloring-pages" },
              { title: "Animal Pages", subtitle: "Dogs, cats & more", href: "/animal-coloring-pages" },
              { title: "Family Themes", subtitle: "Family activity pages", href: "/family-coloring-pages" },
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
            <h2 className="text-4xl font-bold mb-4">Start Your Bluey Coloring Adventure!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of families enjoying quality time together with our free Bluey coloring pages. Perfect for
              rainy days, quiet time, or family bonding moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard/create">
                <Button
                  size="lg"
                  className="bg-white text-pastel-pink hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Create Bluey Pages
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl bg-transparent"
                >
                  <Palette className="w-5 h-5 mr-2" />
                  Browse All Characters
                </Button>
              </Link>
            </div>

            <div className="mt-6 text-sm opacity-75">
              <span>✨ 100+ free pages • All characters • Perfect for ages 2-8 • Instant download</span>
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
              name: "Bluey Coloring Pages - Free Printable Blue Heeler Family Fun",
              description:
                "Download 100+ free printable Bluey coloring pages featuring Bluey, Bingo, Bandit, and Chilli. Perfect for preschoolers and fans of the beloved Australian TV show.",
              keywords:
                "Bluey coloring pages, free printable Bluey, Blue Heeler coloring, Bingo coloring pages, Australian kids show, preschool coloring pages, family coloring activities",
              url: "https://drawgle.in/bluey-coloring-pages",
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: 100,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Bluey Character Coloring Pages",
                    description: "Individual coloring pages featuring Bluey, the energetic Blue Heeler puppy",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Bingo Coloring Pages",
                    description: "Coloring pages of Bingo, Bluey's sweet younger sister",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Heeler Family Coloring Pages",
                    description: "Family scenes with Bluey, Bingo, Bandit, and Chilli together",
                  },
                ],
              },
              about: {
                "@type": "Thing",
                name: "Bluey Australian Children's Television Show",
                description:
                  "Free printable coloring pages based on the popular Australian animated children's TV series Bluey",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Children, Parents, Families, Preschoolers",
                suggestedMinAge: 2,
                suggestedMaxAge: 8,
              },
              isAccessibleForFree: true,
              inLanguage: "en-US",
            }),
          }}
        />
      </div>
    </div>
  )
}
