import type React from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SchemaWebPage } from "@/components/seo/schema"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Download, Star, Palette, Heart, Sparkles, Trophy, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Coloring Book Generator | Create Custom PDF Coloring Books for Kids",
  description:
    "Create and download custom coloring books for kids with our free coloring book generator. Make PDF coloring books for 3-7 year olds with beautiful designs. Free jumbo coloring book PDF download.",
  keywords: [
    "coloring book generator",
    "coloring book for kids pdf",
    "jumbo colouring book pdf",
    "coloring book for kids free",
    "coloring book for kids online",
    "colouring book for 3 year old pdf",
    "coloring book for kids PDF free download",
    "coloring book for kids",
    "colouring books for 7 year olds",
  ],
  openGraph: {
    title: "Create Custom Coloring Books for Kids | Free PDF Download",
    description:
      "Generate personalized coloring books for children of all ages. Perfect for parents, teachers, and kids who love coloring activities.",
    images: [
      {
        url: "/coloring-book-generator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Coloring Book Generator Preview",
      },
    ],
    type: "website",
  },
}

export default function ColoringBookGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50">
      <SchemaWebPage
        name="Coloring Book Generator | Create Custom Coloring Books for Kids"
        description="Create and download custom coloring books for kids with our free coloring book generator. Make PDF coloring books for 3-7 year olds with beautiful designs."
      />

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
                Coloring Book Generator
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Create Custom
              <br />
              <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                Coloring Books
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Generate beautiful, personalized coloring books for kids in seconds. Download as PDF or print directly -
              perfect for ages 3-7 years old and beyond! Create themed books, add custom pages, and make learning fun.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Free PDF Download</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">All Ages</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Custom Themes</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pastel-pink/20">
                <span className="text-sm font-medium text-gray-700">Instant Creation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Palette className="w-5 h-5 mr-2" />
                  Create Your Book
                </Button>
              </Link>
              <Link href="#examples">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pastel-pink/30 hover:border-pastel-pink px-8 py-6 text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300 bg-transparent"
                >
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is a Coloring Book Generator */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Coloring Book Generator?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A coloring book generator is an online tool that allows you to create custom coloring books for kids and
                adults. With our free coloring book generator, you can design personalized PDF coloring books featuring
                various themes, choose from hundreds of designs, and download printable coloring pages instantly.
                Perfect for parents, teachers, and anyone looking to create unique coloring activities for children aged
                3-7 years old or beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-gray-600">Books Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Design Templates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
                <div className="text-gray-600">Theme Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.8★</div>
                <div className="text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Our Coloring Book Generator Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Create professional-quality coloring books in just three simple steps. No design experience needed!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              number="1"
              title="Choose Your Theme"
              description="Select from animals, fantasy, educational content, or seasonal themes. Perfect for creating themed jumbo coloring books that kids will love."
              color="pastel-pink"
            />
            <FeatureCard
              number="2"
              title="Customize Pages"
              description="Add as many pages as you want, arrange them in any order, and preview your coloring book before downloading. Mix different complexity levels for various ages."
              color="orange"
            />
            <FeatureCard
              number="3"
              title="Download & Print"
              description="Get your coloring book as a free PDF download, ready to print at home or share digitally with friends and family. High-quality, print-ready files."
              color="pastel-pink"
            />
          </div>
        </section>

        {/* Age-Specific Benefits */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect for Children of All Ages</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our coloring book generator creates age-appropriate designs that support child development at every stage,
              from toddlers learning to hold crayons to older children developing artistic skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AgeCard
              age="3 Year Olds"
              description="Simple, bold outlines with larger spaces perfect for toddlers just learning to color and developing hand control."
            />
            <AgeCard
              age="5 Year Olds"
              description="Balanced designs with moderate detail, ideal for kindergarten-aged children building focus and fine motor skills."
            />
            <AgeCard
              age="7 Year Olds"
              description="More detailed illustrations that challenge growing artistic skills and help develop concentration and patience."
            />
            <AgeCard
              age="All Ages"
              description="Mixed complexity levels in one book, perfect for siblings or classrooms with children of different ages and abilities."
            />
          </div>
        </section>

        {/* Benefits of Coloring */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of Coloring for Child Development</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Research shows that coloring activities provide numerous developmental benefits for children, supporting
              both cognitive and physical growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DevelopmentBenefitCard
              title="Fine Motor Skills"
              description="Coloring helps children develop the small muscles in their hands, improving handwriting and other fine motor skills essential for academic success."
              icon={<Palette className="w-6 h-6 text-white" />}
            />
            <DevelopmentBenefitCard
              title="Focus & Concentration"
              description="Regular coloring activities help children practice focus and attention to detail, skills that transfer to classroom learning and homework."
              icon={<Eye className="w-6 h-6 text-white" />}
            />
            <DevelopmentBenefitCard
              title="Creativity & Self-Expression"
              description="Custom coloring books encourage creative thinking and provide a safe outlet for emotional expression through color choices and artistic decisions."
              icon={<Sparkles className="w-6 h-6 text-white" />}
            />
            <DevelopmentBenefitCard
              title="Stress Reduction"
              description="Coloring has been shown to reduce anxiety and stress in children, providing a calming activity that promotes mindfulness and relaxation."
              icon={<Heart className="w-6 h-6 text-white" />}
            />
            <DevelopmentBenefitCard
              title="Color Recognition"
              description="For younger children, coloring books help reinforce color recognition and understanding of color relationships and combinations."
              icon={<Star className="w-6 h-6 text-white" />}
            />
            <DevelopmentBenefitCard
              title="Confidence Building"
              description="Completing coloring pages gives children a sense of accomplishment and builds confidence in their artistic abilities and decision-making."
              icon={<Trophy className="w-6 h-6 text-white" />}
            />
          </div>
        </section>

        {/* Example Coloring Books */}
        <section id="examples" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Example Coloring Books</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here are some sample coloring books created with our generator, showing the variety and quality you can
              achieve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ExampleBook
              title="Animal Adventure"
              age="For Ages 3-5"
              description="Simple animal designs perfect for young children learning to color"
              features={["Large coloring areas", "Bold outlines", "Familiar animals", "20+ pages"]}
            />
            <ExampleBook
              title="Fantasy World"
              age="For Ages 5-7"
              description="Magical creatures and fantasy scenes with moderate detail"
              features={["Unicorns & dragons", "Castle scenes", "Moderate detail", "Educational elements"]}
            />
            <ExampleBook
              title="Detailed Designs"
              age="For Ages 7+"
              description="Intricate patterns and complex scenes for older children"
              features={["Complex patterns", "Detailed scenes", "Educational themes", "Challenge level"]}
            />
          </div>
        </section>

        {/* Popular Themes */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Coloring Book Themes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most-loved themes or create something completely unique for your child's interests.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ThemeCard title="Animals & Nature" link="/animal-coloring-pages" />
            <ThemeCard title="Fantasy & Magic" link="/unicorn-coloring-pages" />
            <ThemeCard title="Seasonal" link="/christmas-coloring-pages" />
            <ThemeCard title="Educational" link="/coloring-pages-for-kids" />
            <ThemeCard title="Cartoon Characters" link="/bluey-coloring-pages" />
            <ThemeCard title="Vehicles & Transport" link="/coloring-pages-for-kids" />
            <ThemeCard title="Space & Science" link="/coloring-pages-for-kids" />
            <ThemeCard title="Custom Photos" link="#" />
          </div>
        </section>

        {/* Why Create Custom Books */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Create a Custom Coloring Book?</h2>
                <p className="text-lg text-gray-600">
                  Custom coloring books offer unique advantages over store-bought options, providing personalized
                  experiences that engage children more effectively.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <BenefitItem
                    title="Educational Value"
                    description="Customize coloring books with educational themes to make learning fun. Perfect for teachers and homeschooling parents who want to reinforce specific concepts."
                  />
                  <BenefitItem
                    title="Personalized Experience"
                    description="Create books featuring children's names, favorite characters, or family photos transformed into coloring pages for a truly unique experience."
                  />
                  <BenefitItem
                    title="Cost-Effective"
                    description="Generate unlimited coloring books for free, saving money compared to store-bought options while getting exactly what you want."
                  />
                </div>

                <div className="space-y-6">
                  <BenefitItem
                    title="Instantly Available"
                    description="No waiting for shipping - download your PDF coloring book immediately and start coloring right away, perfect for last-minute activities."
                  />
                  <BenefitItem
                    title="Perfect Fit"
                    description="Choose exactly the right complexity level and themes for your child's interests and developmental stage, ensuring engagement and success."
                  />
                  <BenefitItem
                    title="Unlimited Printing"
                    description="Print as many copies as needed for multiple children, classroom use, or to replace pages that get damaged or completed."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Create Guide */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Create the Perfect Coloring Book</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these expert tips to create engaging coloring books that children will love and that support their
              development.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <HowToStep
              number="1"
              title="Choose Age-Appropriate Designs"
              description="For 3-year-olds, select simple designs with large coloring areas. For 5-7 year olds, include more details but keep them manageable. For older children, you can add intricate patterns and more complex scenes that challenge their growing skills."
            />
            <HowToStep
              number="2"
              title="Select a Cohesive Theme"
              description="Whether it's animals, fantasy, or educational content, sticking to a theme creates a more engaging coloring experience. Consider creating themed jumbo coloring books with 20+ pages for extended enjoyment."
            />
            <HowToStep
              number="3"
              title="Add Personal Elements"
              description="Include the child's name, favorite characters, or convert family photos into coloring pages for a truly personalized experience they'll treasure and want to complete."
            />
            <HowToStep
              number="4"
              title="Consider Paper Quality"
              description="When printing your PDF coloring book, use thicker paper (at least 80lb) to prevent markers or watercolors from bleeding through to other pages, ensuring a better coloring experience."
            />
            <HowToStep
              number="5"
              title="Create a Custom Cover"
              description="Add a personalized cover with the child's name and favorite characters to make the coloring book feel special and gift-worthy, increasing their excitement to use it."
            />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom PDF vs. Store-Bought Coloring Books</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our free coloring book generator compares to traditional store-bought options.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-pastel-pink/20">
                  <th className="p-4 text-left font-bold text-gray-900">Feature</th>
                  <th className="p-4 text-left font-bold text-gray-900">Custom PDF Coloring Books</th>
                  <th className="p-4 text-left font-bold text-gray-900">Store-Bought Coloring Books</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-pastel-pink/10">
                  <td className="p-4 font-medium">Personalization</td>
                  <td className="p-4">Fully customizable themes, characters, and content</td>
                  <td className="p-4">Limited to what's available in stores</td>
                </tr>
                <tr className="border-b border-pastel-pink/10">
                  <td className="p-4 font-medium">Cost</td>
                  <td className="p-4">Free basic version, affordable premium options</td>
                  <td className="p-4">$5-15 per book</td>
                </tr>
                <tr className="border-b border-pastel-pink/10">
                  <td className="p-4 font-medium">Availability</td>
                  <td className="p-4">Instant download, 24/7 access</td>
                  <td className="p-4">Requires store visit or shipping time</td>
                </tr>
                <tr className="border-b border-pastel-pink/10">
                  <td className="p-4 font-medium">Reusability</td>
                  <td className="p-4">Print as many copies as needed</td>
                  <td className="p-4">One-time use</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Age Appropriateness</td>
                  <td className="p-4">Customizable for any age (3-7 years and beyond)</td>
                  <td className="p-4">Fixed age targeting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about creating custom coloring books for kids.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Is the coloring book generator really free?",
                  answer:
                    "Yes! You can create and download basic coloring books completely free. Our core generator allows you to create personalized coloring books with various themes and download them as PDF files without any cost.",
                },
                {
                  question: "What format do I receive my coloring book in?",
                  answer:
                    "Your coloring book will be delivered as a high-quality PDF file that you can download immediately. This makes it easy to print at home on any standard printer or take to a local print shop for professional printing.",
                },
                {
                  question: "Can I create coloring books for different age groups?",
                  answer:
                    "Our generator allows you to select complexity levels appropriate for different ages, from simple designs for 3-year-olds with large coloring areas to more intricate patterns for older children and even adults.",
                },
                {
                  question: "How many pages can I add to my coloring book?",
                  answer:
                    "You can create coloring books with multiple pages featuring different designs and themes. Mix and match various complexity levels to create the perfect book for your child's interests and abilities.",
                },
                {
                  question: "What themes are available for coloring books?",
                  answer:
                    "We offer a wide variety of themes including animals, fantasy creatures, educational content, seasonal designs, vehicles, space themes, and more. You can also create themed books focusing on specific interests like dinosaurs, princesses, or nature.",
                },
                {
                  question: "Can I print the coloring books at home?",
                  answer:
                    "Yes! Our PDF coloring books are designed to print perfectly on standard home printers. For best results, use white paper that's at least 80lb weight to prevent bleed-through when using markers or watercolors.",
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

        {/* Related Resources */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Coloring Resources</h2>
            <p className="text-gray-600">Discover our complete collection of coloring pages and activities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Kids Coloring Pages", subtitle: "Age-appropriate designs", href: "/coloring-pages-for-kids" },
              { title: "Christmas Pages", subtitle: "Holiday themed fun", href: "/christmas-coloring-pages" },
              { title: "Animal Pages", subtitle: "Wildlife & pets", href: "/animal-coloring-pages" },
              { title: "Bluey Collection", subtitle: "Popular TV characters", href: "/bluey-coloring-pages" },
              { title: "Unicorn Magic", subtitle: "Fantasy & dreams", href: "/unicorn-coloring-pages" },
              { title: "Adult Coloring", subtitle: "Complex designs", href: "/adult-coloring-pages" },
            ].map((resource, i) => (
              <Link key={i} href={resource.href} className="group">
                <div className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 rounded-xl p-6 text-center hover:border-pastel-pink/40 transition-all duration-300">
                  <h3 className="font-semibold text-gray-900 group-hover:text-pastel-pink transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{resource.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Create Your Custom Coloring Book?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of parents and teachers who are creating personalized coloring experiences for kids of all
              ages. Start creating your unique coloring book today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-pastel-pink hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Create Free Coloring Book
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl bg-transparent"
              >
                <Palette className="w-5 h-5 mr-2" />
                Browse Templates
              </Button>
            </div>

            <div className="mt-6 text-sm opacity-75">
              <span>✨ Free PDF download • Custom themes • Perfect for all ages • Instant creation</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// Component for feature cards
function FeatureCard({
  number,
  title,
  description,
  color,
}: {
  number: string
  title: string
  description: string
  color: string
}) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-6">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

// Component for age-specific cards
function AgeCard({ age, description }: { age: string; description: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20 text-center hover:border-pastel-pink/40 transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{age}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

// Component for benefit items
function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

// Component for theme cards
function ThemeCard({ title, link }: { title: string; link: string }) {
  return (
    <Link href={link} className="group">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20 text-center hover:border-pastel-pink/40 transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Palette className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-semibold text-gray-900 group-hover:text-pastel-pink transition-colors">{title}</h3>
      </div>
    </Link>
  )
}

// Component for example coloring books
function ExampleBook({
  title,
  age,
  description,
  features,
}: {
  title: string
  age: string
  description: string
  features: string[]
}) {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border border-pastel-pink/20 hover:border-pastel-pink/40 transition-all duration-300 overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src="/placeholder.svg?key=example-book"
          alt={`${title} coloring book example`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
          {age}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="space-y-2 text-sm text-gray-600 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white rounded-xl">
          View Example
        </Button>
      </CardContent>
    </Card>
  )
}

// Component for development benefit cards
function DevelopmentBenefitCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-pastel-pink/20 text-center hover:border-pastel-pink/40 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

// Component for how-to steps
function HowToStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="w-10 h-10 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
