import { NextResponse } from 'next/server'
import { siteConfig, getMenuByCategory } from '@/config/site'

// GET /api/menu — returns full menu grouped by category
export async function GET() {
  return NextResponse.json({
    categories:     siteConfig.menuCategories,
    dietaryOptions: siteConfig.dietaryOptions,
    byCategory:     getMenuByCategory(),
    items:          siteConfig.menuItems.filter(i => i.available),
  })
}