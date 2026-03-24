import type { Season } from "@/config/site"
import { siteConfig } from "@/config/site"

export interface ItemCustomization {
  size?: "small" | "medium" | "large"
  milk?: "whole" | "skim" | "oat" | "almond" | "coconut" | "none"
  extras?: string[]
  specialInstructions?: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  basePrice: number
  category: string
  image: string | null
  imageAlt?: string
  seasons: Season[]
  dietary: string[]
  isSignature?: boolean
  isSeasonal?: boolean
  customizable?: boolean
  availableSizes?: ("small" | "medium" | "large")[]
  availableMilks?: ("whole" | "skim" | "oat" | "almond" | "coconut" | "none")[]
  availableExtras?: string[]
}

export const menuItems: MenuItem[] = siteConfig.menuItems.map(item => ({
  id: item.id,
  name: item.name,
  description: item.description,
  basePrice: item.price,
  category: item.category,
  image: item.image ?? null,
  imageAlt: item.image ? item.name : undefined,
  seasons: ["spring", "summer", "autumn", "winter"] as Season[],
  dietary: item.tags?.filter(t =>
    ["Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Sugar-Free"].includes(t)
  ) ?? [],
  isSignature: item.featured,
  isSeasonal: item.tags?.includes("Spring Only") || item.tags?.includes("Seasonal"),
  customizable: !!item.customizations,
  availableSizes: item.customizations?.sizeOptions?.map(s =>
    s.toLowerCase().includes("small") ? "small" :
    s.toLowerCase().includes("medium") ? "medium" : "large"
  ) as ("small" | "medium" | "large")[] | undefined,
  availableMilks: item.customizations?.milkOptions?.map(m =>
    m.toLowerCase().includes("oat") ? "oat" :
    m.toLowerCase().includes("almond") ? "almond" :
    m.toLowerCase().includes("coconut") ? "coconut" :
    m.toLowerCase().includes("skim") ? "skim" :
    m.toLowerCase().includes("none") ? "none" : "whole"
  ) as ("whole" | "skim" | "oat" | "almond" | "coconut" | "none")[] | undefined,
  availableExtras: item.customizations?.extras?.map(e =>
    e.toLowerCase().replace(/ /g, "-")
  ),
}))

// Helper functions
export function getMenuByCategory(category: string): MenuItem[] {
  return menuItems.filter(item => item.category === category)
}

export function getMenuBySeason(season: Season): MenuItem[] {
  return menuItems.filter(item => item.seasons.includes(season))
}

export function getSeasonalSpecials(season: Season): MenuItem[] {
  return menuItems.filter(item => item.isSeasonal && item.seasons.includes(season))
}

export function getSignatureDrinks(): MenuItem[] {
  return menuItems.filter(item => item.isSignature)
}

export function filterByDietary(items: MenuItem[], dietary: string[]): MenuItem[] {
  if (dietary.length === 0) return items
  return items.filter(item =>
    dietary.every(d => item.dietary.includes(d))
  )
}

export const extras = [
  { id: "extra-shot", name: "Extra Shot", price: 0.75 },
  { id: "vanilla", name: "Vanilla Syrup", price: 0.50 },
  { id: "caramel", name: "Caramel Syrup", price: 0.50 },
  { id: "hazelnut", name: "Hazelnut Syrup", price: 0.50 },
  { id: "lavender", name: "Lavender Syrup", price: 0.75 },
  { id: "honey", name: "Honey", price: 0.50 },
  { id: "whipped-cream", name: "Whipped Cream", price: 0.50 },
]

export const milkOptions = [
  { id: "whole", name: "Whole Milk", price: 0 },
  { id: "skim", name: "Skim Milk", price: 0 },
  { id: "oat", name: "Oat Milk", price: 0.75 },
  { id: "almond", name: "Almond Milk", price: 0.75 },
  { id: "coconut", name: "Coconut Milk", price: 0.75 },
  { id: "none", name: "No Milk", price: 0 },
]

export const sizeOptions = [
  { id: "small", name: "Small (8oz)", price: 0 },
  { id: "medium", name: "Medium (12oz)", price: 0.50 },
  { id: "large", name: "Large (16oz)", price: 1.00 },
]