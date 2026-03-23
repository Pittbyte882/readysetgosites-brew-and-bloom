"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/context/ThemeContext"
import { getSeasonalSpecials, getSignatureDrinks, type MenuItem } from "@/data/menu"
import { formatPrice } from "@/config/site"
import { cn } from "@/lib/utils"

function DrinkCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden bg-card border card-botanical transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-1"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image placeholder */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <span className="font-serif text-3xl font-bold text-gradient">
              {item.name.charAt(0)}
            </span>
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {item.isSignature && (
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              Signature
            </Badge>
          )}
          {item.isSeasonal && (
            <Badge className="bg-primary/90 backdrop-blur-sm">
              Seasonal
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <span className="font-semibold">{formatPrice(item.basePrice)}</span>
          {item.dietary.length > 0 && (
            <div className="flex gap-1">
              {item.dietary.slice(0, 2).map((d) => (
                <span 
                  key={d}
                  className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                >
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function FeaturedDrinks() {
  const { season } = useTheme()
  
  // Get seasonal specials and signature drinks
  const seasonalSpecials = getSeasonalSpecials(season)
  const signatureDrinks = getSignatureDrinks()
  
  // Combine and limit to 6 items, prioritizing seasonal
  const featuredItems = [...seasonalSpecials, ...signatureDrinks]
    .filter((item, index, self) => 
      index === self.findIndex((t) => t.id === item.id)
    )
    .slice(0, 6)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-botanical">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              What&apos;s Brewing
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
              Seasonal Favorites
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Discover our handcrafted beverages, featuring fresh seasonal ingredients 
              and our signature botanical blends.
            </p>
          </div>
          <Button variant="outline" asChild className="rounded-full self-start md:self-auto">
            <Link href="/menu">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Drinks grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <DrinkCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
