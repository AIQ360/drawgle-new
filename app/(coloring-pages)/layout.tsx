import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import PublicHeader from "@/components/layouts/public-header"
import PublicFooter from "@/components/layouts/public-footer"

export const metadata: Metadata = {
  title: "Coloring Pages | Drawgle",
  description:
    "Discover a wide variety of free printable coloring pages for kids and adults. From Disney characters to animals, find the perfect coloring page.",
}

export default function ColoringPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />

      {/* Main content */}
      <main className="flex-grow">{children}</main>



      <PublicFooter />
    </div>
  )
}

