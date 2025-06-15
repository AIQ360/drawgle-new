"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, Minus, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

// FAQ data
const faqs = [
  {
    question: "How do I turn my family photos into coloring pages?",
    answer:
      "Simply upload your photo through our easy-to-use interface, and our AI will automatically transform it into a beautiful coloring page. You can then download and print it instantly. Perfect for creating personalized activities from your family memories.",
  },
  {
    question: "What types of images work best for conversion?",
    answer:
      "Our AI works best with clear, well-lit photos that have distinct subjects. Family photos, pet pictures, landscapes, and portraits all convert well. For best results, use images with good contrast and clear outlines.",
  },
  {
    question: "Can I create coloring pages from text descriptions?",
    answer:
      "Yes! Our AI can generate coloring pages from text descriptions. Just type what you want (like 'a magical unicorn in a forest' or 'a space rocket with planets'), and our AI will create a custom coloring page based on your description.",
  },
  {
    question: "How many coloring pages can I create per month?",
    answer:
      "The number depends on your plan. Our free tier includes 5 pages monthly, while paid plans offer 200-500 pages. Each plan includes both text-to-image and photo-to-coloring features.",
  },
  {
    question: "Can I create themed coloring books?",
    answer:
      "You can create custom coloring books by organizing multiple pages into collections. Our platform allows you to arrange pages, add covers, and download them as print-ready PDFs - perfect for gifts or classroom activities.",
  },
  {
    question: "What file formats are supported for downloads?",
    answer:
      "All coloring pages can be downloaded as high-quality PNG files, optimized for printing. When creating coloring books, you'll receive a print-ready PDF that maintains perfect quality for both home and professional printing.",
  },
  {
    question: "Is this suitable for classroom use?",
    answer:
      "Yes! Many teachers use our platform to create educational coloring pages. You can generate pages that match your curriculum, create class keepsakes from group photos, or design activities for special events and holidays.",
  },
  {
    question: "How do I manage my credits and subscription?",
    answer:
      "Your credits refresh monthly based on your plan. You can track your usage in your dashboard, and upgrade or downgrade your plan at any time. Unused credits don't roll over, but you can always purchase additional credits if needed.",
  },
  {
    question: "Can I share my coloring pages with others?",
    answer:
      "Yes! You can share your creations through our public gallery or download them to share directly. For teachers and parents, this makes it easy to distribute activities to students or family members.",
  },
  {
    question: "What if I'm not satisfied with the generated coloring page?",
    answer:
      "You can regenerate any coloring page using different styles or settings until you're happy with the result. Each regeneration counts as a new credit, but you can preview the changes before confirming.",
  },
  {
    question: "Do you offer any special features for educators?",
    answer:
      "Yes! We offer special features for educators including bulk generation, classroom collections, and educational themes. Teachers can create curriculum-aligned activities, class keepsakes, and special event coloring pages.",
  },
  {
    question: "Can I customize the style of my coloring pages?",
    answer:
      "Yes! You can choose from various artistic styles and adjust settings like line thickness and complexity. This allows you to create pages suitable for different age groups and skill levels.",
  },
  {
    question: "What's the difference between the free and paid plans?",
    answer:
      "The free plan includes 5 pages monthly with basic features. Paid plans offer more pages (200-500), priority generation, advanced style options, and the ability to create and download coloring books. All plans include both text-to-image and photo-to-coloring features.",
  },
  {
    question: "How do I get started with creating my first coloring page?",
    answer:
      "Getting started is easy! Sign up for a free account, and you can immediately begin creating. Choose between uploading a photo or describing what you want, and our AI will generate your first coloring page in seconds. No design skills required!",
  },
  {
    question: "Are there any age restrictions for using the platform?",
    answer:
      "Our platform is designed to be family-friendly and suitable for all ages. Children under 13 should use the platform with parental supervision. All generated content is automatically filtered to ensure it's appropriate for all users.",
  },
  {
    question: "Can I use the coloring pages for commercial purposes?",
    answer:
      "Personal and educational use is always allowed. For commercial use (like selling printed coloring books), please check our terms of service or contact our support team for specific licensing information.",
  },
  {
    question: "How long does it take to generate a coloring page?",
    answer:
      "Most coloring pages are generated within 10-30 seconds! Our AI works incredibly fast, so you can create multiple pages in just a few minutes. Premium users get priority processing for even faster generation.",
  },
  {
    question: "Can I edit or modify the generated coloring pages?",
    answer:
      "Yes! Once downloaded, you can edit the coloring pages using any image editing software. You can also regenerate with different settings if you want to adjust the style or complexity before downloading.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow hover:border-pastel-pink/20">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left transition-all duration-200 hover:bg-gray-50/50"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pastel-pink transition-colors duration-200">
            {question}
          </h3>
          <div
            className={cn(
              "flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 flex items-center justify-center transition-all duration-300",
              isOpen ? "rotate-180 bg-gradient-to-r from-pastel-pink to-orange-400" : "",
            )}
          >
            {isOpen ? (
              <Minus
                className={cn("h-4 w-4 transition-colors duration-200", isOpen ? "text-white" : "text-pastel-pink")}
              />
            ) : (
              <Plus className="h-4 w-4 text-pastel-pink" />
            )}
          </div>
        </div>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 pb-6">
          <div className="w-full h-px bg-gradient-to-r from-pastel-pink/20 to-orange-400/20 mb-4"></div>
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  // Split FAQs into two columns for desktop
  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0)
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 === 1)

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20">
            <HelpCircle className="w-4 h-4 mr-2 text-pastel-pink" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>

          <p className="max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
            Everything you need to know about creating amazing coloring pages with AI
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop: Two Columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumnFAQs.map((faq, index) => {
                const actualIndex = index * 2
                return (
                  <FAQItem
                    key={actualIndex}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openItems.includes(actualIndex)}
                    onToggle={() => toggleItem(actualIndex)}
                  />
                )
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumnFAQs.map((faq, index) => {
                const actualIndex = index * 2 + 1
                return (
                  <FAQItem
                    key={actualIndex}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openItems.includes(actualIndex)}
                    onToggle={() => toggleItem(actualIndex)}
                  />
                )
              })}
            </div>
          </div>

          {/* Mobile: Single Column */}
          <div className="md:hidden space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
