import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SchemaWebPage } from "@/components/seo/schema"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Download,
  Printer,
  CheckCircle,
  Star,
  Home,
  Heart,
  Users,
  Clock,
  Zap,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Perfect Printable Coloring Pages | Print at Home with Perfect Results",
  description:
    "Download coloring pages designed specifically for home printing. Perfect lines, proper sizing, and ink-saving tips. No more blurry or cut-off pages!",
  openGraph: {
    title: "Perfect Printable Coloring Pages | Print at Home with Perfect Results",
    description:
      "Download coloring pages designed specifically for home printing. Perfect lines, proper sizing, and ink-saving tips.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Perfect printable coloring pages collection",
      },
    ],
  },
}

export default function PrintableColoringPages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100">
      <SchemaWebPage
        name="Printable Coloring Pages"
        description="High-quality printable coloring pages designed specifically for home printing with perfect results every time."
      />

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-orange-600 transition-colors flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <span aria-current="page" className="text-orange-600 font-medium">
                Printable Coloring Pages
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm bg-gradient-to-r from-pink-200/80 to-orange-200/80 border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-orange-300/20" />
            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Printer className="h-4 w-4 mr-2" />
                    Perfect Print Quality Guaranteed
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                    Perfect Printable Coloring Pages
                  </h1>
                  <p className="text-xl mb-8 text-gray-700 leading-relaxed">
                    Coloring pages designed specifically for home printing. Clean lines, perfect sizing, and no more
                    blurry or cut-off pages. Every page prints beautifully on any home printer!
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                      <div className="text-2xl font-bold text-orange-600">100%</div>
                      <div className="text-sm text-gray-600">Print Success</div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                      <div className="text-2xl font-bold text-pink-600">Any</div>
                      <div className="text-sm text-gray-600">Home Printer</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl">
                      <Download className="h-5 w-5 mr-2" />
                      Browse Printable Pages
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl bg-transparent"
                    >
                      <Printer className="h-5 w-5 mr-2" />
                      Printing Guide
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Perfect printable coloring pages printing at home"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Pages Print Better */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Why Our Pages Print Perfectly Every Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We design every coloring page specifically for home printing, so you never have to worry about poor
              results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Perfect Line Thickness</h3>
                <p className="text-gray-600">
                  Lines that are exactly the right thickness - not too thin (prints faintly) or too thick (wastes ink).
                  Perfect for all coloring tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Printer className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Home Printer Tested</h3>
                <p className="text-gray-600">
                  Every design is tested on common home printers to ensure clean, crisp lines. No more blurry edges or
                  pages that don't fit properly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ink-Saving Smart Design</h3>
                <p className="text-gray-600">
                  Designed to use less ink while maintaining perfect quality. Save money on printer cartridges without
                  sacrificing the coloring experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Popular Printable Collections */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Most Popular Printable Collections</h2>
            <p className="text-xl text-gray-600">
              These collections are designed specifically for perfect home printing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PrintableCollectionCard
              title="Printable Kids Pages"
              href="/coloring-pages-for-kids"
              image="/placeholder.svg?height=300&width=400"
              description="Simple designs with thick lines that print perfectly for little hands. Ages 3-8 love these!"
              count="500+"
              difficulty="Easy to Print"
              color="bg-blue-100 text-blue-800"
            />

            <PrintableCollectionCard
              title="Printable Christmas Pages"
              href="/christmas-coloring-pages"
              image="/placeholder.svg?height=300&width=400"
              description="Festive holiday designs optimized for home printing. Perfect for family activities."
              count="200+"
              difficulty="Family Friendly"
              color="bg-red-100 text-red-800"
            />

            <PrintableCollectionCard
              title="Printable Adult Pages"
              href="/adult-coloring-pages"
              image="/placeholder.svg?height=300&width=400"
              description="Detailed designs that print with crisp, clear lines for stress-relief coloring."
              count="300+"
              difficulty="Detailed"
              color="bg-purple-100 text-purple-800"
            />

            <PrintableCollectionCard
              title="Printable Animal Pages"
              href="/animal-coloring-pages"
              image="/placeholder.svg?height=300&width=400"
              description="Cute animals with clean lines that print beautifully on any home printer."
              count="400+"
              difficulty="All Ages"
              color="bg-green-100 text-green-800"
            />

            <PrintableCollectionCard
              title="Printable Pokemon Pages"
              href="/pokemon-coloring-pages"
              image="/placeholder.svg?height=300&width=400"
              description="Popular Pokemon characters designed for perfect printing results."
              count="150+"
              difficulty="Kid Favorite"
              color="bg-yellow-100 text-yellow-800"
            />

            <PrintableCollectionCard
              title="Printable Halloween Pages"
              href="/halloween-coloring-pages"
              image="/placeholder.svg?height=300&width=400"
              description="Spooky fun designs that print clearly for Halloween activities."
              count="120+"
              difficulty="Seasonal"
              color="bg-orange-100 text-orange-800"
            />
          </div>
        </section>

        {/* Complete Printing Guide */}
        <section className="mb-16">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Complete Guide to Perfect Printing</h2>
              <p className="text-xl text-gray-600">Everything you need to know to get perfect results at home</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Paper Guide */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Choosing the Right Paper</h3>
                <div className="space-y-6">
                  <PaperTypeCard
                    name="Regular Copy Paper"
                    description="Perfect for everyday coloring with crayons and colored pencils. Cheap and works great!"
                    weight="20-24 lb"
                    bestFor="Crayons, colored pencils, light markers"
                    cost="$"
                    icon="📄"
                  />
                  <PaperTypeCard
                    name="Cardstock Paper"
                    description="Thicker paper that won't tear easily. Great for markers and when you want to keep the artwork."
                    weight="60-110 lb"
                    bestFor="Markers, gel pens, watercolors"
                    cost="$$"
                    icon="📋"
                  />
                  <PaperTypeCard
                    name="Marker Paper"
                    description="Special paper that prevents markers from bleeding through. Perfect for detailed work."
                    weight="70-90 lb"
                    bestFor="Alcohol markers, fine tip pens"
                    cost="$$$"
                    icon="🎨"
                  />
                </div>
              </div>

              {/* Printer Settings */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Perfect Printer Settings</h3>
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                      <Star className="h-5 w-5 text-green-600 mr-2" />
                      For Best Quality:
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Select "High Quality" or "Best" in print settings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Choose "Actual Size" or "100%" scaling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Print from PDF viewer, not web browser</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Use "Portrait" orientation for most pages</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                      <Zap className="h-5 w-5 text-orange-600 mr-2" />
                      To Save Ink:
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Use "Draft" or "Fast" print mode</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Select "Grayscale" or "Black & White"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Adjust brightness to make lines lighter</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fix Common Problems */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Fix Common Printing Problems</h2>
            <p className="text-xl text-gray-600">Quick solutions to the most common issues families face</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-white/60 backdrop-blur-sm border-white/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-red-500 mr-2" />
                    Lines Are Too Light or Faint
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• Switch from "Draft" to "Normal" or "High Quality" mode</p>
                    <p>• Check if your ink cartridge is running low</p>
                    <p>• Increase contrast in printer settings</p>
                    <p>• Make sure you're printing from PDF, not web browser</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border-white/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-blue-500 mr-2" />
                    Page Gets Cut Off
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• Select "Fit to Page" or "Shrink to Fit" in print settings</p>
                    <p>• Check that paper size matches (Letter or A4)</p>
                    <p>• Reduce margins in printer settings</p>
                    <p>• Make sure page orientation is correct</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/60 backdrop-blur-sm border-white/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-purple-500 mr-2" />
                    Lines Are Blurry or Fuzzy
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• Clean your printer heads (check printer manual)</p>
                    <p>• Use "High Quality" or "Best" print setting</p>
                    <p>• Try a different paper type</p>
                    <p>• Make sure paper isn't damp or wrinkled</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border-white/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-2" />
                    Using Too Much Ink
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• Switch to "Draft" or "Fast" print mode</p>
                    <p>• Use "Grayscale" instead of color printing</p>
                    <p>• Adjust brightness to make lines lighter</p>
                    <p>• Consider buying compatible ink cartridges</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Age-Specific Printing Tips */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Printing Tips for Every Age</h2>
            <p className="text-xl text-gray-600">
              Different ages need different approaches to get the best coloring experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3-5</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Little Ones</h3>
                  <p className="text-gray-600">Ages 3-5 years</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Best Printing Settings:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use thicker paper (cardstock) - less likely to tear</li>
                      <li>• Print slightly larger (110% scale) for easier coloring</li>
                      <li>• Choose designs with thick, bold lines</li>
                      <li>• Print multiple copies - they'll want to color again!</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Why This Works:</h4>
                    <p className="text-sm text-gray-600">
                      Little hands need bigger spaces and stronger paper that won't tear when they press hard with
                      crayons.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">6-10</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">School Age</h3>
                  <p className="text-gray-600">Ages 6-10 years</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Best Printing Settings:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Regular copy paper works great</li>
                      <li>• Standard size (100% scale) is perfect</li>
                      <li>• Normal quality setting saves ink</li>
                      <li>• Can handle more detailed designs</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Why This Works:</h4>
                    <p className="text-sm text-gray-600">
                      School-age kids have better motor control and can handle standard-sized pages with moderate
                      detail.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">11+</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Older Kids & Adults</h3>
                  <p className="text-gray-600">Ages 11+ years</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Best Printing Settings:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• High-quality setting for crisp details</li>
                      <li>• Cardstock for marker-friendly pages</li>
                      <li>• Can handle complex, detailed designs</li>
                      <li>• Consider borderless printing for full-page art</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Why This Works:</h4>
                    <p className="text-sm text-gray-600">
                      Older colorists appreciate fine details and often use advanced coloring tools like markers and gel
                      pens.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits for Families */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-100/50 to-pink-100/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Perfect for Every Family</h2>
              <p className="text-xl text-gray-600">Why families love our printable coloring pages</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">No More Printing Frustration</h3>
                <p className="text-gray-600">
                  Every page prints perfectly the first time. No more wasted paper, ink, or disappointed kids.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Family Activity Ready</h3>
                <p className="text-gray-600">
                  Print multiple copies instantly for family coloring time. Everyone can color the same design together.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Entertainment</h3>
                <p className="text-gray-600">
                  Download and print in minutes. Perfect for last-minute activities, rainy days, or quiet time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Teacher Approved</h3>
                <p className="text-gray-600">
                  Teachers love these for classroom activities. Print as many copies as needed without quality loss.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Saves Money</h3>
                <p className="text-gray-600">
                  Ink-saving designs mean you spend less on cartridges while getting better results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Works on Any Printer</h3>
                <p className="text-gray-600">
                  Tested on all major home printer brands. Inkjet, laser, old or new - they all work perfectly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* More Collections */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">More Printable Collections</h2>
            <p className="text-gray-600">Explore our complete collection of printer-optimized coloring pages</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Unicorn Pages", href: "/unicorn-coloring-pages" },
              { title: "Hello Kitty Pages", href: "/hello-kitty-coloring-pages" },
              { title: "Bluey Pages", href: "/bluey-coloring-pages" },
              { title: "Sonic Pages", href: "/sonic-coloring-pages" },
              { title: "Spiderman Pages", href: "/spiderman-coloring-pages" },
              { title: "Free Pages", href: "/free-coloring-pages" },
              { title: "Cute Pages", href: "/cute-coloring-pages" },
              { title: "Mandala Pages", href: "/mandala-coloring-pages" },
            ].map((category, i) => (
              <Link key={i} href={category.href} className="group">
                <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center hover:bg-white/80 transition-all duration-300">
                  <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {category.title}
                  </h3>
                  <div className="text-xs text-green-600 font-medium mt-2">Print Ready</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Common Printing Questions</h2>
            <p className="text-xl text-gray-600">Answers to the questions families ask most about printing at home</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">What's the best paper for printing coloring pages at home?</h3>
                <p className="text-gray-600">
                  Regular copy paper (20-24 lb) works great for most coloring tools like crayons and colored pencils. If
                  you're using markers or want the artwork to last longer, try cardstock (60-80 lb). It's thicker and
                  won't tear as easily, plus markers won't bleed through as much.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">
                  How can I save money on ink when printing lots of coloring pages?
                </h3>
                <p className="text-gray-600">
                  Use 'Draft' or 'Fast' print mode, which uses less ink but still gives clear lines. Print in grayscale
                  instead of color, and consider buying compatible ink cartridges which cost less than brand-name ones.
                  You can also adjust the brightness to make lines lighter while still visible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">
                  Why do my coloring pages sometimes get cut off when I print them?
                </h3>
                <p className="text-gray-600">
                  This usually happens when the page size doesn't match your printer settings. Make sure your printer is
                  set to the same paper size as the coloring page (usually Letter or A4). Try selecting 'Fit to Page' or
                  'Shrink to Fit' in your print settings to automatically adjust the size.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">
                  Can I make the coloring pages bigger or smaller when I print them?
                </h3>
                <p className="text-gray-600">
                  Yes! In your print settings, look for 'Scale' or 'Zoom' options. For bigger pages, try 110-125%. For
                  smaller pages, try 75-90%. Just remember that making them too big or small might affect the line
                  quality, so test with one page first.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">What should I do if the lines print too light or faint?</h3>
                <p className="text-gray-600">
                  First, check if your ink cartridge is running low. If ink is fine, switch from 'Draft' to 'Normal' or
                  'High Quality' mode. You can also increase the contrast in your printer settings. Make sure you're
                  printing from a PDF viewer rather than a web browser for the best quality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">Is it better to print from my phone or computer?</h3>
                <p className="text-gray-600">
                  Printing from a computer usually gives better results because you have more control over print
                  settings. If you must print from your phone, save the coloring page as a PDF first, then print from
                  your phone's PDF app rather than directly from a web browser.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-200/80 to-pink-200/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Ready to Print Perfect Coloring Pages?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Browse our collection of printer-optimized coloring pages designed to give you perfect results every time
              you print at home. No more frustration, just beautiful coloring pages!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl">
                <Download className="h-5 w-5 mr-2" />
                Browse All Printable Pages
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl bg-transparent"
              >
                <Printer className="h-5 w-5 mr-2" />
                Create Custom Pages
              </Button>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <span>✨ Perfect print quality • Home printer friendly • Ink-saving tips included</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function PrintableCollectionCard({
  title,
  href,
  image,
  description,
  count,
  difficulty,
  color,
}: {
  title: string
  href: string
  image: string
  description: string
  count: string
  difficulty: string
  color: string
}) {
  return (
    <Link href={href} className="group">
      <Card className="bg-white/60 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300 overflow-hidden">
        <div className="aspect-video relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`absolute top-3 right-3 ${color} px-3 py-1 rounded-full text-sm font-medium`}>{count}</div>
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            {difficulty}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            <Download className="h-4 w-4 mr-2" />
            View Printable Pages
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}

function PaperTypeCard({
  name,
  description,
  weight,
  bestFor,
  cost,
  icon,
}: {
  name: string
  description: string
  weight: string
  bestFor: string
  cost: string
  icon: string
}) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h4 className="font-bold text-gray-800">{name}</h4>
        </div>
        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">{cost}</span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="space-y-2 text-xs text-gray-600">
        <div>
          <span className="font-medium">Weight:</span> {weight}
        </div>
        <div>
          <span className="font-medium">Best for:</span> {bestFor}
        </div>
      </div>
    </div>
  )
}
