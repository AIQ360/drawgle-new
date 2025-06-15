"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ImageCard } from "@/components/ui/image-card"
import { toast } from "sonner"
import Head from "next/head"
import { SITE_URL } from "@/lib/constants"
import { Grid3X3, Grid2X2, LayoutGrid, Circle } from "lucide-react"
// import { Input } from "@/components/ui/input" // Removed Input import

interface PublicImage {
  id: string
  image_url: string
  aspect_ratio: string
  created_at: string
  is_public: boolean
  source?: "regular" | "gemini"
}

export default function PublicGalleryPage() {
  const [images, setImages] = useState<PublicImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true)
  // const [searchQuery, setSearchQuery] = useState("") // Removed searchQuery state
  const [gridSize, setGridSize] = useState<"small" | "medium" | "large">("medium")
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const ITEMS_PER_PAGE = 20

  useEffect(() => {
    const fetchPublicImages = async () => {
      if (!hasMore && !initialLoad) return

      setIsLoading(true)
      try {
        const response = await fetch(`/api/images/public?page=${page}&limit=${ITEMS_PER_PAGE}`)

        if (!response.ok) {
          throw new Error("Failed to fetch public images")
        }

        const data = await response.json()

        if (initialLoad) {
          setImages(data.images)
          setInitialLoad(false)
        } else {
          setImages((prev) => [...prev, ...data.images])
        }

        setHasMore(page < data.totalPages)
      } catch (err: any) {
        console.error("Error fetching public images:", err)
        setError(err.message || "Something went wrong")
        toast.error("Error loading images", {
          description: "Failed to load gallery images. Please try again.",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchPublicImages()
  }, [page, initialLoad, hasMore])

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current || isLoading || !hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setPage((prevPage) => prevPage + 1)
        }
      },
      { threshold: 1.0 },
    )

    observer.observe(loadMoreRef.current)

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current)
      }
    }
  }, [isLoading, hasMore])

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  const getGridClasses = () => {
    switch (gridSize) {
      case "small":
        return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
      case "medium":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      case "large":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
      default:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    }
  }

  // Add schema and metadata
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Community Coloring Gallery - Drawgle",
    description: "Browse coloring pages created by our community. Find inspiration or just enjoy the creativity!",
    url: `${SITE_URL}/gallery`,
    isPartOf: {
      "@type": "WebSite",
      name: "Drawgle",
      url: SITE_URL,
    },
  }

  return (
    <>
      <Head>
        <title>Community Coloring Gallery - Browse User-Created Coloring Pages | Drawgle</title>
        <meta
          name="description"
          content="Browse a collection of community-created coloring pages. Find inspiration, download free samples, and see what's possible with Drawgle's AI coloring page generator."
        />
        <meta property="og:title" content="Community Coloring Gallery - Browse User-Created Coloring Pages | Drawgle" />
        <meta
          property="og:description"
          content="Browse a collection of community-created coloring pages. Find inspiration, download free samples, and see what's possible with Drawgle's AI coloring page generator."
        />
        <meta property="og:url" content={`${SITE_URL}/gallery`} />
        <link rel="canonical" href={`${SITE_URL}/gallery`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50/30 to-white">
        {/* Header Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-pastel-pink/5 via-white to-orange-50/20 py-16 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pastel-pink/10 to-orange-50 px-6 py-2 text-sm font-medium text-gray-700 border border-pastel-pink/20 mb-6">
                <LayoutGrid className="w-4 h-4 mr-2 text-pastel-pink" />
                Community Gallery
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Discover Amazing{" "}
                <span className="bg-gradient-to-r from-pastel-pink to-orange-400 bg-clip-text text-transparent">
                  Coloring Pages
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                Browse thousands of coloring pages created by our community. Find inspiration, download your favorites,
                and see what's possible with AI creativity.
              </p>

              {/* Search and Controls */}
              {/* Grid Controls */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl p-1 border border-gray-200">
                  <Button
                    variant={gridSize === "small" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setGridSize("small")}
                    className="h-8 w-8 p-0 rounded-lg"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={gridSize === "medium" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setGridSize("medium")}
                    className="h-8 w-8 p-0 rounded-lg"
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={gridSize === "large" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setGridSize("large")}
                    className="h-8 w-8 p-0 rounded-lg"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="container mx-auto px-4 py-12">
          {initialLoad && isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
                  <Icons.spinner className="h-8 w-8 animate-spin text-white" />
                </div>
                <p className="text-gray-600">Loading amazing coloring pages...</p>
              </div>
            </div>
          ) : error && images.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Circle className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oops! Something went wrong</h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <Button
                onClick={() => {
                  setInitialLoad(true)
                  setPage(1)
                  setError(null)
                }}
                className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white"
              >
                Try Again
              </Button>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <LayoutGrid className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No coloring pages yet</h3>
              <p className="text-gray-600 mb-6">Be the first to create and share amazing coloring pages!</p>
              <Link href="/sign-up" passHref>
                <Button className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white">
                  Create Your First Page
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Stats Bar */}
              <div className="flex items-center justify-between mb-8 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">{images.length}</span> coloring pages
                  </span>
                </div>
                <div className="text-sm text-gray-500">Grid: {gridSize}</div>
              </div>

              {/* Image Grid */}
              <div className={`grid ${getGridClasses()} mb-12`}>
                {images.map((image, index) => (
                  <div
                    key={`${image.source || "regular"}-${image.id}`}
                    className="w-full animate-in fade-in-0 duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ImageCard
                      id={image.id}
                      imageUrl={image.image_url}
                      aspectRatio={image.aspect_ratio}
                      createdAt={image.created_at}
                    />
                  </div>
                ))}
              </div>

              {/* Load More Section */}
              <div ref={loadMoreRef} className="flex justify-center">
                {isLoading && !initialLoad ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-pastel-pink to-orange-400 rounded-xl flex items-center justify-center mr-3">
                      <Icons.spinner className="h-6 w-6 animate-spin text-white" />
                    </div>
                    <span className="text-gray-600">Loading more amazing pages...</span>
                  </div>
                ) : hasMore ? (
                  <Button
                    onClick={handleLoadMore}
                    variant="outline"
                    disabled={isLoading}
                    className="px-8 py-3 rounded-xl border-2 hover:bg-gray-50 transition-all duration-200"
                  >
                    Load More Coloring Pages
                  </Button>
                ) : images.length > 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">🎉 You've seen all the amazing coloring pages!</p>
                    <Link href="/sign-up" passHref>
                      <Button className="bg-gradient-to-r from-pastel-pink to-orange-400 hover:from-pastel-pink/90 hover:to-orange-400/90 text-white">
                        Create Your Own
                      </Button>
                    </Link>
                  </div>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
