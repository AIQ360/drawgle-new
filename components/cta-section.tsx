import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
     
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-pastel-pink/10 via-white to-orange-50/30 rounded-3xl p-8 md:p-12 border border-pastel-pink/20 shadow-sm overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-r from-pastel-pink/20 to-orange-400/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-orange-400/20 to-pastel-pink/20 rounded-full blur-xl"></div>

            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20 mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-pastel-pink" />
                Start Creating Today
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Ready to Create Coloring Pages{" "}
                <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                  Your Kids Will Love?
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                Join thousands of parents and teachers who are creating custom coloring pages with AI. Turn any idea
                into beautiful coloring pages in seconds.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sign-up" passHref>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Create Your First Page Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/gallery" passHref>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 hover:border-pastel-pink px-8 py-4 text-base sm:text-lg font-medium rounded-xl hover:bg-pastel-pink/5 transition-all duration-300"
                  >
                    Browse Gallery
                  </Button>
                </Link>
              </div>

              {/* Trust Indicator */}
              <div className="mt-8 pt-6 border-t border-gray-200/50">
                <p className="text-sm text-gray-500 mb-3">Trusted by educators and families worldwide</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-pastel-pink/30 to-orange-400/30"
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">and thousands more</span>
                </div>
              </div>
            </div>
          </div>


      </div>
    </section>
  )
}
