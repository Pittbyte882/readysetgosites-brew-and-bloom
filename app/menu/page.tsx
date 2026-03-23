"use client"

import { useState, useMemo } from "react"
import { Filter, X, Sparkles } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/order/CartDrawer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MenuItemCard } from "@/components/menu/MenuItemCard"
import { useTheme } from "@/context/ThemeContext"
import { siteConfig } from "@/config/site"
import { menuItems, getMenuBySeason, filterByDietary } from "@/data/menu"
import { cn } from "@/lib/utils"

export default function MenuPage() {
  const { season } = useTheme()
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [activeDietary, setActiveDietary] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  // Get items available in current season
  const seasonalItems = useMemo(() => getMenuBySeason(season), [season])

  // Filter by category
  const categoryFilteredItems = useMemo(() => {
    if (activeCategory === "All") return seasonalItems
    return seasonalItems.filter((item) => item.category === activeCategory)
  }, [seasonalItems, activeCategory])

  // Filter by dietary
  const filteredItems = useMemo(
    () => filterByDietary(categoryFilteredItems, activeDietary),
    [categoryFilteredItems, activeDietary]
  )

  // Get unique categories from available items
  const categories = useMemo(() => {
    const cats = new Set(seasonalItems.map((item) => item.category))
    return ["All", ...Array.from(cats)]
  }, [seasonalItems])

  const toggleDietary = (dietary: string) => {
    setActiveDietary((prev) =>
      prev.includes(dietary) ? prev.filter((d) => d !== dietary) : [...prev, dietary]
    )
  }

  const clearFilters = () => {
    setActiveCategory("All")
    setActiveDietary([])
  }

  return (
    <>
      <Header />
      <CartDrawer />

      <main className="min-h-screen pt-24 pb-20">
        {/* Hero section */}
        <section className="relative py-12 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container-botanical">
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Menu
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
                Crafted with Care
              </h1>
              <p className="text-lg text-muted-foreground">
                Every item on our menu is thoughtfully prepared using fresh, seasonal 
                ingredients. Discover your new favorite today.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b py-4">
          <div className="container-botanical">
            {/* Category tabs */}
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex gap-2 flex-nowrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    className="rounded-full whitespace-nowrap"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                    {category !== "All" && (
                      <span className="ml-1 text-xs opacity-70">
                        ({seasonalItems.filter((i) => i.category === category).length})
                      </span>
                    )}
                  </Button>
                ))}
              </div>

              {/* Filter toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto rounded-full flex-shrink-0"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Dietary
                {activeDietary.length > 0 && (
                  <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 justify-center">
                    {activeDietary.length}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Dietary filters */}
            {showFilters && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                {siteConfig.dietaryOptions.map((dietary) => (
                  <Button
                    key={dietary}
                    variant={activeDietary.includes(dietary) ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => toggleDietary(dietary)}
                  >
                    {dietary}
                    {activeDietary.includes(dietary) && (
                      <X className="h-3 w-3 ml-1" />
                    )}
                  </Button>
                ))}
                {activeDietary.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-muted-foreground"
                    onClick={clearFilters}
                  >
                    Clear all
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Menu grid */}
        <section className="py-12">
          <div className="container-botanical">
            {/* Seasonal highlight */}
            {activeCategory === "All" && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-2xl font-semibold">Seasonal Specials</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems
                    .filter((item) => item.isSeasonal)
                    .map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                </div>
                {filteredItems.filter((item) => item.isSeasonal).length === 0 && (
                  <p className="text-muted-foreground text-center py-8">
                    No seasonal specials match your current filters.
                  </p>
                )}
              </div>
            )}

            {/* All items or category */}
            <div>
              {activeCategory === "All" ? (
                // Group by category
                <>
                  {categories
                    .filter((cat) => cat !== "All")
                    .map((category) => {
                      const categoryItems = filteredItems.filter(
                        (item) => item.category === category && !item.isSeasonal
                      )
                      if (categoryItems.length === 0) return null
                      return (
                        <div key={category} className="mb-12">
                          <h2 className="font-serif text-2xl font-semibold mb-6">
                            {category}
                          </h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {categoryItems.map((item) => (
                              <MenuItemCard key={item.id} item={item} />
                            ))}
                          </div>
                        </div>
                      )
                    })}
                </>
              ) : (
                // Single category view
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Empty state */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">No items found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters to see more options.
                </p>
                <Button variant="outline" onClick={clearFilters} className="rounded-full">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
