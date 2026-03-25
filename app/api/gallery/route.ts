import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site'

// GET /api/gallery — returns all gallery items optionally filtered by category
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')

  const items = category && category !== 'All'
    ? siteConfig.gallery.filter(img => img.category === category)
    : siteConfig.gallery

  return NextResponse.json({
    categories: siteConfig.galleryCategories,
    items,
    total: items.length,
  })
}