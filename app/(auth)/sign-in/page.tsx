import Link from "next/link"
import { AuthForm } from "@/components/auth/auth-form"
import PublicHeader from "@/components/layouts/public-header"
import PublicFooter from "@/components/layouts/public-footer"
import { Heart, Palette, Sparkles } from "lucide-react"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/5 via-white to-orange-50/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <section className="w-full py-12 md:py-24 lg:py-32 relative z-10">
          <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            {/* Form Column - Now First on Mobile */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-sm">
                <AuthForm view="sign-in" />
              </div>
            </div>

            {/* Content Column - Now Second on Mobile */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Fun Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-4 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20">
                <Sparkles className="w-4 h-4 text-pastel-pink" />
                <span>Join the Creative Community</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  Welcome to
                  <br />
                  <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                    Drawgle
                  </span>
                </h1>
                <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mx-auto lg:mx-0">
                  Sign in to unlock unlimited creativity! Create magical coloring pages that spark imagination for kids
                  and relaxation for adults.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-pastel-pink/10 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-pastel-pink" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Unlimited Pages</p>
                    <p className="text-xs text-gray-600">Create as many as you want</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-orange-100/50 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Family Friendly</p>
                    <p className="text-xs text-gray-600">Safe for all ages</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-pastel-pink/20 to-orange-200/20 shadow-sm"
                    ></div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">Trusted by thousands of families</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
