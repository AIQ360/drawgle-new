import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { deleteFileFromStorage } from "@/lib/supabase/storage-utils"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const imageId = params.id
    if (!imageId) {
      return NextResponse.json({ error: "Image ID is required" }, { status: 400 })
    }

    console.log(`Starting deletion process for gemini image ID: ${imageId}`)
    const supabase = await createClient()

    // Verify user is authenticated
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      console.error("Authentication error:", authError)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    console.log(`User authenticated: ${user.id}`)

    // Get the image to find its storage path
    const { data: image, error: fetchError } = await supabase
      .from("gemini_images")
      .select("*")
      .eq("id", imageId)
      .eq("user_id", user.id)
      .single()

    if (fetchError) {
      console.error("Error fetching image:", fetchError)
      return NextResponse.json({ error: "Failed to fetch image details" }, { status: 500 })
    }

    if (!image) {
      console.error("Image not found or access denied")
      return NextResponse.json({ error: "Image not found or access denied" }, { status: 404 })
    }

    console.log(`Image found:`, {
      id: image.id,
      originalUrl: image.original_image_url,
      coloringPageUrl: image.coloring_page_url,
    })

    // Storage deletion for both original and coloring page images
    let originalStorageResult = { success: false }
    let coloringPageStorageResult = { success: false }

    if (image.original_image_url) {
      originalStorageResult = await deleteFileFromStorage(supabase, image.original_image_url)
      console.log("Original image deletion result:", originalStorageResult)
    } else {
      console.warn("Original image URL is empty or null")
    }

    if (image.coloring_page_url) {
      coloringPageStorageResult = await deleteFileFromStorage(supabase, image.coloring_page_url)
      console.log("Coloring page deletion result:", coloringPageStorageResult)
    } else {
      console.warn("Coloring page URL is empty or null")
    }

    // Delete from database regardless of storage deletion result
    console.log("Attempting database deletion")
    const { error: dbError } = await supabase.from("gemini_images").delete().eq("id", imageId).eq("user_id", user.id)

    if (dbError) {
      console.error("Database deletion error:", dbError)
      return NextResponse.json(
        {
          error: "Failed to delete image record from database",
          details: dbError.message,
        },
        { status: 500 },
      )
    }

    console.log("Database deletion successful")

    // Return appropriate response
    if (originalStorageResult.success && coloringPageStorageResult.success) {
      return NextResponse.json({
        success: true,
        storageDeleted: true,
        databaseDeleted: true,
        message: "Image deleted successfully from both storage and database",
      })
    } else {
      return NextResponse.json({
        success: true,
        storageDeleted: false,
        databaseDeleted: true,
        message: "Image record deleted from database, but there was an issue removing one or more files from storage",
        storageError:
          originalStorageResult.error || coloringPageStorageResult.error
            ? String(originalStorageResult.error || coloringPageStorageResult.error)
            : undefined,
      })
    }
  } catch (error: any) {
    console.error("Unexpected error during image deletion:", error)
    return NextResponse.json(
      {
        error: "Failed to delete image",
        details: error.message || "Unknown error",
      },
      { status: 500 },
    )
  }
}
