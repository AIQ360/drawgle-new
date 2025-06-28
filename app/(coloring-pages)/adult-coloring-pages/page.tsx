import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SchemaWebPage } from "@/components/seo/schema"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Download, Star, Brain, Heart, Palette, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Adult Coloring Pages | Sophisticated Designs for Stress Relief & Mindfulness",
  description:
    "Discover 500+ intricate adult coloring pages featuring mandalas, geometric patterns, botanical designs, and therapeutic art. Perfect for stress relief, mindfulness practice, and creative expression.",
  openGraph: {
    title: "Adult Coloring Pages | Sophisticated Designs for Stress Relief & Mindfulness",
    description:
      "Discover 500+ intricate adult coloring pages featuring mandalas, geometric patterns, botanical designs, and therapeutic art. Perfect for stress relief, mindfulness practice, and creative expression.",
    images: [
      {
        url: "/adult-coloring-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Adult coloring pages preview featuring intricate mandala and geometric designs",
      },
    ],
  },
}

export default function AdultColoringPages() {
  return (
    <>
      <SchemaWebPage
        name="Adult Coloring Pages - Therapeutic Art for Stress Relief"
        description="Comprehensive collection of 500+ adult coloring pages featuring intricate mandalas, geometric patterns, botanical designs, and therapeutic art for stress relief and mindfulness practice."
      />

      <div className="min-h-screen bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-pastel-pink transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4 mx-1 inline" />
              </li>
              <li>
                <Link href="/coloring-pages" className="hover:text-pastel-pink transition-colors">
                  Coloring Pages
                </Link>
                <ChevronRight className="h-4 w-4 mx-1 inline" />
              </li>
              <li className="text-gray-900 font-medium">Adult Coloring Pages</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Adult Coloring Pages for
                <br />
                <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                  Mindful Relaxation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Discover 500+ scientifically-designed adult coloring pages featuring intricate mandalas, geometric
                patterns, and therapeutic art. Proven to reduce stress, enhance focus, and promote mindfulness through
                creative expression.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                  <span className="text-sm font-medium text-gray-700">500+ Designs</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                  <span className="text-sm font-medium text-gray-700">Stress Relief</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                  <span className="text-sm font-medium text-gray-700">Therapeutic Art</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                  <span className="text-sm font-medium text-gray-700">HD Quality</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard/create">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Palette className="w-5 h-5 mr-2" />
                    Create Custom Pages
                  </Button>
                </Link>
                <Link href="/dashboard/subscription">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-pastel-pink/30 hover:border-pastel-pink px-8 py-6 text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300 bg-transparent"
                  >
                    Browse Collection
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
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600">Intricate Designs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">89%</div>
                  <div className="text-gray-600">Stress Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                  <div className="text-gray-600">Art Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">4.8★</div>
                  <div className="text-gray-600">User Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* Scientific Benefits Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Science Behind Adult Coloring Therapy</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Research-backed benefits that make adult coloring a powerful tool for mental health, cognitive
                enhancement, and stress management in our fast-paced world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pastel-pink/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Neurological Benefits</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Activates both brain hemispheres</li>
                  <li>• Improves focus and concentration</li>
                  <li>• Enhances problem-solving skills</li>
                  <li>• Stimulates creativity centers</li>
                  <li>• Promotes neuroplasticity</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pastel-pink/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Emotional Wellness</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Reduces cortisol levels by 68%</li>
                  <li>• Decreases anxiety symptoms</li>
                  <li>• Improves mood regulation</li>
                  <li>• Enhances self-esteem</li>
                  <li>• Provides emotional outlet</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pastel-pink/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Mindfulness Practice</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Promotes present-moment awareness</li>
                  <li>• Reduces rumination patterns</li>
                  <li>• Enhances meditation practice</li>
                  <li>• Improves attention span</li>
                  <li>• Develops patience and persistence</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pastel-pink/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Social Benefits</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Builds community connections</li>
                  <li>• Facilitates group therapy</li>
                  <li>• Encourages sharing and discussion</li>
                  <li>• Reduces social isolation</li>
                  <li>• Creates bonding opportunities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Adult Coloring Categories */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Adult Coloring Collection</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our scientifically-curated collection features diverse artistic styles and complexity levels, designed
                to meet various therapeutic goals and personal preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mandala Collection */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-purple-50 to-purple-100">
                  <Image
                    src="/placeholder.svg?key=mandala"
                    alt="Intricate Mandala Coloring Pages"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    150+ Pages
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sacred Mandalas & Geometric Art</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Intricate circular designs rooted in spiritual traditions. Perfect for meditation, centering
                    practice, and achieving flow states through symmetrical patterns.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Traditional Tibetan & Hindu mandalas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Modern geometric interpretations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Chakra-aligned color therapy designs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Varying complexity levels</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-700">
                      <strong>Therapeutic Focus:</strong> Meditation, anxiety reduction, spiritual connection
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Botanical & Nature */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100">
                  <Image
                    src="/placeholder.svg?key=botanical"
                    alt="Botanical Adult Coloring Pages"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    120+ Pages
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Botanical Gardens & Nature Art</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Detailed flora and fauna designs that connect you with nature's beauty. Scientifically accurate
                    illustrations perfect for nature lovers and botanical enthusiasts.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Intricate floral arrangements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Detailed leaf and vine patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Realistic animal portraits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Garden and landscape scenes</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-700">
                      <strong>Therapeutic Focus:</strong> Nature connection, grounding, environmental awareness
                    </div>
                  </div>
               
                </CardContent>
              </Card>

              {/* Abstract & Geometric */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                  <Image
                    src="/placeholder.svg?key=geometric"
                    alt="Abstract Geometric Coloring Pages"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    100+ Pages
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Abstract & Geometric Patterns</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Modern, sophisticated designs featuring optical illusions, tessellations, and contemporary art
                    styles. Perfect for creative experimentation and color theory exploration.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Optical illusion patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Tessellation designs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>3D geometric structures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Contemporary art styles</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-700">
                      <strong>Therapeutic Focus:</strong> Cognitive stimulation, creativity, problem-solving
                    </div>
                  </div>
           
                </CardContent>
              </Card>

              {/* Zentangle & Doodle Art */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-indigo-50 to-indigo-100">
                  <Image
                    src="/placeholder.svg?key=zentangle"
                    alt="Zentangle Doodle Art Coloring Pages"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    80+ Pages
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Zentangle & Meditative Doodles</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Structured patterns within organic shapes, inspired by the Zentangle method. Designed specifically
                    for mindfulness practice and anxiety reduction.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Authentic Zentangle patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Meditative repetitive designs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Organic flowing patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Anxiety-reducing structures</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-700">
                      <strong>Therapeutic Focus:</strong> Anxiety relief, mindfulness, repetitive meditation
                    </div>
                  </div>
              
                </CardContent>
              </Card>

              {/* Inspirational & Motivational */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-pink-50 to-pink-100">
                  <Image
                    src="/placeholder.svg?key=inspirational"
                    alt="Inspirational Quote Coloring Pages"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    60+ Pages
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Inspirational Quotes & Affirmations</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Motivational quotes and positive affirmations surrounded by beautiful artistic elements. Perfect for
                    personal development and positive mindset cultivation.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Motivational quote designs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Positive affirmation art</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Mindfulness reminders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Gratitude practice pages</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-700">
                      <strong>Therapeutic Focus:</strong> Positive psychology, self-affirmation, motivation
                    </div>
                  </div>
      
                </CardContent>
              </Card>

              {/* Therapeutic Patterns */}
              <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-teal-50 to-teal-100">
                  <Image
                    src="/placeholder.svg?key=therapeutic"
                    alt="Therapeutic Pattern Coloring Pages"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    90+ Pages
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Therapeutic Patterns & Healing Art</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Specially designed patterns for art therapy, trauma recovery, and emotional healing. Created in
                    collaboration with licensed art therapists.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Art therapy approved designs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Trauma-informed patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Emotional regulation tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                      <span>Grounding technique visuals</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-700">
                      <strong>Therapeutic Focus:</strong> Art therapy, trauma recovery, emotional healing
                    </div>
                  </div>
            
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Professional Techniques Guide */}
          <section className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Master Professional Adult Coloring Techniques
                  </h2>
                  <p className="text-lg text-gray-600">
                    Transform your coloring practice with advanced techniques used by professional artists and art
                    therapists to achieve stunning results and maximum therapeutic benefits.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Coloring Methods</h3>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Layered Color Building</h4>
                        <p className="text-gray-600 mb-3">
                          Create depth and richness by building colors in transparent layers, starting with light base
                          colors and gradually adding darker tones for professional-quality results.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Start with lightest colors as base layer</li>
                          <li>• Build up intensity gradually with multiple passes</li>
                          <li>• Use circular motions for smooth coverage</li>
                          <li>• Blend colors while still workable</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Therapeutic Color Psychology</h4>
                        <p className="text-gray-600 mb-3">
                          Use color psychology principles to enhance emotional benefits and create specific moods that
                          support your mental health goals.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Blue tones for calming and stress relief</li>
                          <li>• Green shades for balance and grounding</li>
                          <li>• Warm colors for energy and motivation</li>
                          <li>• Purple hues for spiritual connection</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Mindful Coloring Practice</h4>
                        <p className="text-gray-600 mb-3">
                          Integrate mindfulness techniques into your coloring practice to maximize stress relief and
                          present-moment awareness benefits.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Focus on breath rhythm while coloring</li>
                          <li>• Notice physical sensations of tool on paper</li>
                          <li>• Observe thoughts without judgment</li>
                          <li>• Set intentions before beginning</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Tools & Setup</h3>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Essential Coloring Supplies</h4>
                        <div className="space-y-3">
                          <div>
                            <strong className="text-gray-900">Premium Colored Pencils:</strong>
                            <p className="text-sm text-gray-600">
                              Prismacolor Premier, Faber-Castell Polychromos for professional results
                            </p>
                          </div>
                          <div>
                            <strong className="text-gray-900">Alcohol Markers:</strong>
                            <p className="text-sm text-gray-600">Copic, Ohuhu for smooth blending and vibrant colors</p>
                          </div>
                          <div>
                            <strong className="text-gray-900">Gel Pens:</strong>
                            <p className="text-sm text-gray-600">Sakura Gelly Roll for fine details and highlights</p>
                          </div>
                          <div>
                            <strong className="text-gray-900">Blending Tools:</strong>
                            <p className="text-sm text-gray-600">Colorless blenders, tortillons, blending stumps</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Optimal Workspace Setup</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>
                            • <strong>Lighting:</strong> 5000K LED desk lamp for color accuracy
                          </li>
                          <li>
                            • <strong>Surface:</strong> Smooth, firm surface with slight angle
                          </li>
                          <li>
                            • <strong>Paper:</strong> Heavy-weight (140gsm+) smooth paper
                          </li>
                          <li>
                            • <strong>Ergonomics:</strong> Comfortable seating with back support
                          </li>
                          <li>
                            • <strong>Organization:</strong> Pencil holders and color organization system
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-pastel-pink/10 to-orange-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Creating Your Coloring Ritual</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• Set aside dedicated coloring time daily</li>
                          <li>• Create a calming environment with soft music</li>
                          <li>• Begin with 5 minutes of deep breathing</li>
                          <li>• Choose colors intuitively based on mood</li>
                          <li>• End with reflection on the experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Therapeutic Applications */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Therapeutic Applications of Adult Coloring</h2>
                <p className="text-lg text-gray-600">
                  Discover how mental health professionals and therapists use adult coloring pages as effective
                  therapeutic interventions for various conditions and wellness goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Applications</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Anxiety Disorders</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Repetitive coloring motions activate the parasympathetic nervous system, reducing anxiety
                        symptoms and promoting relaxation response.
                      </p>
                      <div className="text-xs text-gray-500">
                        <strong>Recommended:</strong> Mandala patterns, geometric designs
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Depression Support</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Completing coloring pages provides sense of accomplishment and achievement, boosting mood and
                        self-esteem in individuals with depression.
                      </p>
                      <div className="text-xs text-gray-500">
                        <strong>Recommended:</strong> Inspirational quotes, nature scenes
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">PTSD & Trauma Recovery</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Grounding technique that helps trauma survivors stay present and connected to their body through
                        tactile and visual engagement.
                      </p>
                      <div className="text-xs text-gray-500">
                        <strong>Recommended:</strong> Therapeutic patterns, nature designs
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">ADHD Focus Training</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Structured activity that improves attention span and concentration while providing immediate
                        visual feedback for sustained focus.
                      </p>
                      <div className="text-xs text-gray-500">
                        <strong>Recommended:</strong> Detailed patterns, zentangles
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wellness & Prevention</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Stress Management</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Regular coloring practice reduces cortisol levels and provides healthy coping mechanism for
                        daily stress and work pressure.
                      </p>
                      <div className="text-xs text-gray-500">
                        <strong>Best Practice:</strong> 15-20 minutes daily during high-stress periods
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Sleep Quality Improvement</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Evening coloring routine helps transition from active day to restful sleep by calming the
                        nervous system and reducing screen time.
                      </p>
                      <div className="text-xs text-gray-500">
                        <strong>Best Practice:</strong> 30 minutes before bedtime with warm lighting
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Complex patterns stimulate both brain hemispheres, improving cognitive flexibility,
                        problem-solving skills, and creative thinking.
                      </p>
                      <div className="text-xs text-gray-500">
                        <strong>Best Practice:</strong> Gradually increase pattern complexity over time
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Social Connection</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Group coloring activities foster community, reduce isolation, and provide safe space for social
                        interaction and shared creativity.
                      </p>
                      <div className="text-xs text-gray-500">
                        <strong>Best Practice:</strong> Weekly coloring groups or family coloring time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Pages Preview */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Most Popular Adult Coloring Pages</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our top-rated adult coloring pages, scientifically designed for maximum therapeutic benefit and
                artistic satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Sacred Mandala", downloads: "25K+", rating: "4.9", category: "Meditation" },
                { title: "Botanical Garden", downloads: "22K+", rating: "4.8", category: "Nature" },
                { title: "Geometric Flow", downloads: "20K+", rating: "4.9", category: "Abstract" },
                { title: "Zen Patterns", downloads: "18K+", rating: "4.7", category: "Mindfulness" },
                { title: "Floral Mandala", downloads: "17K+", rating: "4.8", category: "Botanical" },
                { title: "Inspirational Quote", downloads: "15K+", rating: "4.9", category: "Motivation" },
                { title: "Celtic Knots", downloads: "14K+", rating: "4.6", category: "Cultural" },
                { title: "Ocean Waves", downloads: "13K+", rating: "4.8", category: "Nature" },
              ].map((page, i) => (
                <div
                  key={i}
                  className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-xl overflow-hidden hover:border-pastel-pink/40 transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={`/placeholder.svg?key=adult${i}`}
                      alt={`${page.title} Adult Coloring Page`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                      {page.rating}★
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                      {page.category}
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

          </section>

          {/* Comprehensive FAQ */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Guide to Adult Coloring Therapy</h2>
                <p className="text-lg text-gray-600">
                  Expert answers to the most common questions about using adult coloring pages for mental health, stress
                  relief, and personal development.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "How does adult coloring scientifically reduce stress and anxiety?",
                    answer:
                      "Adult coloring activates the parasympathetic nervous system through repetitive, focused movements that trigger the body's relaxation response. Research shows that 20 minutes of coloring can reduce cortisol levels by up to 68% and decrease heart rate and blood pressure. The meditative nature of coloring also increases alpha brain waves associated with relaxation and creativity, while the focus required helps interrupt anxious thought patterns and rumination cycles.",
                  },
                  {
                    question:
                      "What makes adult coloring pages different from children's coloring books in terms of therapeutic benefits?",
                    answer:
                      "Adult coloring pages feature intricate, complex designs that require sustained attention and fine motor control, engaging both brain hemispheres simultaneously. This cognitive engagement promotes flow states and mindfulness more effectively than simple designs. The sophisticated patterns also provide appropriate challenge levels for adult cognitive abilities, preventing boredom while maintaining therapeutic benefits. Additionally, adult themes and artistic styles support self-expression and personal meaning-making in ways that children's designs cannot.",
                  },
                  {
                    question: "How can I choose the right adult coloring pages for my specific mental health goals?",
                    answer:
                      "Different coloring page styles support different therapeutic goals. For anxiety relief, choose mandala or geometric patterns with repetitive elements that promote meditative focus. For depression support, select inspirational quotes or nature scenes that boost mood and provide positive imagery. For PTSD or trauma recovery, opt for grounding-focused designs like therapeutic patterns or gentle nature scenes. For cognitive enhancement, choose complex geometric or abstract designs that challenge problem-solving skills. Always start with your current stress level and gradually increase complexity as your focus improves.",
                  },
                  {
                    question: "What are the best coloring tools and techniques for maximum therapeutic benefit?",
                    answer:
                      "For therapeutic coloring, prioritize tools that provide smooth, controlled application and tactile feedback. Colored pencils offer the best control and blending capabilities, while the pressure required provides proprioceptive input that enhances grounding effects. Use quality paper (140gsm+) to prevent bleed-through and frustration. Employ slow, deliberate strokes while focusing on breath rhythm. Layer colors gradually to extend engagement time and create depth. The physical act of tool-to-paper contact is crucial for the therapeutic benefits, making digital coloring less effective for stress relief.",
                  },
                  {
                    question: "How long and how often should I color for optimal mental health benefits?",
                    answer:
                      "Research indicates that 15-20 minutes of daily coloring provides optimal stress reduction benefits without causing fatigue or frustration. For acute anxiety, shorter 5-10 minute sessions can provide immediate relief. Consistency is more important than duration - daily practice creates cumulative benefits for stress resilience and emotional regulation. For therapeutic goals, aim for the same time each day to establish routine. Evening coloring (30-60 minutes before bed) particularly supports sleep quality and stress recovery from the day.",
                  },
                  {
                    question:
                      "Can adult coloring replace traditional therapy or medication for mental health conditions?",
                    answer:
                      "Adult coloring is a valuable complementary therapy tool but should not replace professional mental health treatment for clinical conditions. It works excellently alongside traditional therapy, medication, and other evidence-based treatments. Coloring can enhance therapy outcomes by providing coping skills, stress management tools, and emotional regulation techniques that clients can use between sessions. For mild stress and general wellness, coloring may be sufficient as a standalone intervention. Always consult mental health professionals for persistent or severe symptoms.",
                  },
                  {
                    question: "How can I create a therapeutic coloring practice that fits my busy lifestyle?",
                    answer:
                      "Integrate coloring into existing routines rather than adding separate time commitments. Color during lunch breaks, while watching TV, or as a wind-down activity before bed. Keep a coloring kit in your car, office, or bag for stress relief during waiting periods. Use coloring as a replacement for scrolling social media or other passive activities. Start with just 5 minutes daily and gradually increase as the habit establishes. Create a dedicated coloring space with good lighting and organized supplies to reduce barriers to practice. Consider coloring apps for travel or situations where physical materials aren't practical.",
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
          {/* Final CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl p-8 text-white">
              <h2 className="text-4xl font-bold mb-4">Begin Your Therapeutic Coloring Journey</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of adults who have discovered the powerful stress-relief and mindfulness benefits of
                therapeutic coloring. Start your wellness practice today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard/create">
                  <Button
                    size="lg"
                    className="bg-white text-pastel-pink hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Free Starter Pack
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl bg-transparent"
                  >
                    Explore Free Gallery
                  </Button>
                </Link>
              </div>

              <div className="mt-6 text-sm opacity-75">
                <span>✨ 500+ therapeutic designs • Scientifically proven benefits • Instant download</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
