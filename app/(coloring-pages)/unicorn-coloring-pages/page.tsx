import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Unicorn Coloring Pages | Free Printable Magical Unicorn Designs",
  description:
    "Download free printable unicorn coloring pages for kids and adults. Magical unicorn designs featuring rainbows, stars, and fantasy scenes perfect for unicorn lovers.",
  openGraph: {
    title: "Unicorn Coloring Pages | Free Printable Magical Unicorn Designs",
    description:
      "Download free printable unicorn coloring pages featuring magical unicorns, rainbows, and fantasy scenes.",
    images: [
      {
        url: "/placeholder.svg?key=tiwxv",
        width: 1200,
        height: 630,
        alt: "Magical unicorn coloring pages collection",
      },
    ],
  },
}

export default function UnicornColoringPages() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
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
                <span className="font-medium text-gray-900">Unicorn Coloring Pages</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 text-center shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 text-pastel-pink">
                  <Sparkles className="h-8 w-8" />
                  <Heart className="h-6 w-6" />
                  <Star className="h-7 w-7" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Unicorn Coloring Pages
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                Magical unicorn coloring pages that spark imagination and bring joy to kids of all ages
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
                >
                  <Link href="#unicorn-pages">
                    <Sparkles className="mr-2 h-5 w-5" />
                    See Magical Pages
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Kids Love Unicorns */}
          <section className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Why Kids Love Unicorn Coloring Pages
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full p-2 flex-shrink-0">
                        <Heart className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Sparks Imagination</h3>
                        <p className="text-gray-600">
                          Unicorns help kids dream big and create magical stories while they color
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full p-2 flex-shrink-0">
                        <Star className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Builds Confidence</h3>
                        <p className="text-gray-600">
                          Every unicorn they color is perfect - there's no wrong way to make magic!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full p-2 flex-shrink-0">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Calms and Focuses</h3>
                        <p className="text-gray-600">
                          Coloring unicorns is a peaceful activity that helps kids relax and concentrate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Child happily coloring unicorn pages"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Age Groups */}
          <section className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Perfect for Every Age</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <div className="text-4xl mb-4">🦄</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Ages 3-5</h3>
                  <p className="text-gray-600 mb-4">
                    Simple unicorn shapes with big areas to color. Perfect for little hands learning to stay in the
                    lines.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Big, simple shapes</li>
                    <li>• Thick lines</li>
                    <li>• Easy to color</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <div className="text-4xl mb-4">🌈</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Ages 6-10</h3>
                  <p className="text-gray-600 mb-4">
                    Unicorns with rainbows, stars, and magical scenes. Great for kids who love details and stories.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Fun backgrounds</li>
                    <li>• Rainbow manes</li>
                    <li>• Magical scenes</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Ages 11+</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed unicorn designs with intricate patterns. Perfect for older kids and adults who enjoy
                    complex coloring.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Detailed patterns</li>
                    <li>• Complex designs</li>
                    <li>• Mandala styles</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Unicorn Coloring Pages */}
          <section id="unicorn-pages" className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Beautiful Unicorn Coloring Pages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ColoringPageCard
                    key={i}
                    title={`Magical Unicorn ${i}`}
                    description={getUnicornDescription(i)}
                    imageUrl={`/placeholder.svg?height=400&width=400&query=unicorn%20coloring%20page%20${i}%20line%20art`}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button
                  asChild
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
                >
                  <Link href="/dashboard/subscription">
                    <Heart className="mr-2 h-5 w-5" />
                    Get All Unicorn Pages
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Easy Coloring Tips */}
          <section className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Easy Unicorn Coloring Tips</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Star className="h-5 w-5 text-pastel-pink" />
                    What Colors to Use
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/50 rounded-xl border border-pastel-pink/10">
                      <h4 className="font-semibold text-gray-700 mb-2">Unicorn Body</h4>
                      <p className="text-gray-600 text-sm">
                        White, light pink, or light purple work great for the unicorn's body
                      </p>
                    </div>
                    <div className="p-4 bg-white/50 rounded-xl border border-pastel-pink/10">
                      <h4 className="font-semibold text-gray-700 mb-2">Mane & Tail</h4>
                      <p className="text-gray-600 text-sm">
                        Use rainbow colors, pastels, or your favorite bright colors
                      </p>
                    </div>
                    <div className="p-4 bg-white/50 rounded-xl border border-pastel-pink/10">
                      <h4 className="font-semibold text-gray-700 mb-2">Horn</h4>
                      <p className="text-gray-600 text-sm">
                        Gold, silver, or rainbow colors make the horn look magical
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-pastel-pink" />
                    Fun Ideas to Try
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/50 rounded-xl border border-pastel-pink/10">
                      <h4 className="font-semibold text-gray-700 mb-2">Add Glitter</h4>
                      <p className="text-gray-600 text-sm">Use glitter glue or stickers to make your unicorn sparkle</p>
                    </div>
                    <div className="p-4 bg-white/50 rounded-xl border border-pastel-pink/10">
                      <h4 className="font-semibold text-gray-700 mb-2">Create Patterns</h4>
                      <p className="text-gray-600 text-sm">Draw dots, stripes, or hearts on the unicorn's body</p>
                    </div>
                    <div className="p-4 bg-white/50 rounded-xl border border-pastel-pink/10">
                      <h4 className="font-semibold text-gray-700 mb-2">Color the Background</h4>
                      <p className="text-gray-600 text-sm">Add rainbows, clouds, stars, or a magical castle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits for Kids */}
          <section className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Great for Learning & Growing</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Hand Strength</h3>
                  <p className="text-gray-600 text-sm">Helps kids develop the muscles needed for writing</p>
                </div>
                <div className="text-center p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Focus Time</h3>
                  <p className="text-gray-600 text-sm">Teaches kids to concentrate on one activity</p>
                </div>
                <div className="text-center p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Color Learning</h3>
                  <p className="text-gray-600 text-sm">Helps kids learn color names and mixing</p>
                </div>
                <div className="text-center p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Calm Feelings</h3>
                  <p className="text-gray-600 text-sm">Coloring helps kids feel peaceful and happy</p>
                </div>
              </div>
            </div>
          </section>

          {/* Simple FAQ */}
          <section className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Common Questions</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">How do I print these unicorn pages?</h3>
                  <p className="text-gray-600">
                    Click the page you want, then click "Print." Make sure you have white paper in your printer. That's
                    it!
                  </p>
                </div>
                <div className="p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Are these free to use?</h3>
                  <p className="text-gray-600">
                    Yes! These unicorn coloring pages are free for families to print and enjoy at home.
                  </p>
                </div>
                <div className="p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">What age kids will like these?</h3>
                  <p className="text-gray-600">
                    Kids from age 3 to 12+ love unicorn coloring pages. We have simple ones for little kids and detailed
                    ones for older kids.
                  </p>
                </div>
                <div className="p-6 bg-white/50 rounded-2xl border border-pastel-pink/10">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">What should I use to color them?</h3>
                  <p className="text-gray-600">
                    Crayons, colored pencils, or markers all work great. For extra sparkle, try glitter glue or gel
                    pens!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">More Magical Coloring Fun</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <RelatedPageCard
                  title="Hello Kitty Coloring Pages"
                  href="/hello-kitty-coloring-pages"
                  imageUrl="/placeholder.svg?height=300&width=300"
                />
                <RelatedPageCard
                  title="Cute Coloring Pages"
                  href="/cute-coloring-pages"
                  imageUrl="/placeholder.svg?height=300&width=300"
                />
                <RelatedPageCard
                  title="Free Coloring Pages"
                  href="/free-coloring-pages"
                  imageUrl="/placeholder.svg?height=300&width=300"
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-pastel-pink/20 to-orange-100/30 backdrop-blur-sm border border-pastel-pink/20 rounded-3xl p-8 md:p-12 text-center shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 text-pastel-pink">
                  <Sparkles className="h-8 w-8" />
                  <Heart className="h-6 w-6" />
                  <Star className="h-7 w-7" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Create Your Own Magical Pages</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Want custom unicorn coloring pages? Our AI can create unique designs just for you!
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
              >
                <Link href="/dashboard/create">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Make Custom Unicorns
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function ColoringPageCard({
  title,
  description,
  imageUrl,
}: {
  title: string
  description: string
  imageUrl: string
}) {
  return (
    <div className="bg-white/50 backdrop-blur-sm border border-pastel-pink/20 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-square relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-contain p-4" />
        <div className="absolute inset-0 bg-gradient-to-t from-pastel-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <Button
            size="sm"
            className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-full"
          >
            <Heart className="mr-2 h-4 w-4" />
            Color This
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function RelatedPageCard({ title, href, imageUrl }: { title: string; href: string; imageUrl: string }) {
  return (
    <Link href={href} className="group">
      <div className="bg-white/50 backdrop-blur-sm border border-pastel-pink/20 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="aspect-video relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold group-hover:text-pastel-pink transition text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

// Helper function to generate different descriptions for unicorn coloring pages
function getUnicornDescription(index: number): string {
  const descriptions = [
    "A beautiful unicorn with flowing mane, perfect for rainbow colors.",
    "Cute baby unicorn with stars and hearts, great for little ones.",
    "Unicorn with rainbow and clouds in a magical sky scene.",
    "Detailed unicorn design with pretty patterns for older kids.",
    "Unicorn in a flower garden with butterflies and magic.",
    "Happy cartoon unicorn with a big smile, easy and fun to color.",
  ]
  return descriptions[index - 1] || "Beautiful unicorn coloring page for all ages."
}
