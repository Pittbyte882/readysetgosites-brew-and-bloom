"use client"

import { useState } from "react"
import { Plus, Sparkles, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/config/site"
import { type MenuItem } from "@/data/menu"
import { ItemCustomizer } from "./ItemCustomizer"

interface MenuItemCardProps {
  item: MenuItem
  onAddToCart?: boolean
}

export function MenuItemCard({ item, onAddToCart = true }: MenuItemCardProps) {
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false)

  return (
    <>
      <div
        className={cn(
          "group relative flex flex-col rounded-2xl overflow-hidden bg-card border card-botanical transition-all duration-300",
          "hover:shadow-lg hover:-translate-y-0.5"
        )}
      >
        {/* Image area */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <span className="font-serif text-2xl font-bold text-gradient">
                {item.name.charAt(0)}
              </span>
            </div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {item.isSignature && (
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3 h-3 mr-1" />
                Signature
              </Badge>
            )}
            {item.isSeasonal && (
              <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-sm">
                Seasonal
              </Badge>
            )}
          </div>

          {/* Quick add button */}
          {onAddToCart && item.customizable && (
            <Button
              size="icon"
              className="absolute bottom-3 right-3 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
              onClick={() => setIsCustomizerOpen(true)}
              aria-label={`Add ${item.name} to cart`}
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            <span className="font-semibold text-primary whitespace-nowrap">
              {formatPrice(item.basePrice)}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-3">
            {item.description}
          </p>

          {/* Dietary badges */}
          {item.dietary.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {item.dietary.map((d) => (
                <span
                  key={d}
                  className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary-foreground"
                >
                  <Leaf className="w-3 h-3" />
                  {d}
                </span>
              ))}
            </div>
          )}

          {/* Add to cart button for non-customizable items */}
          {onAddToCart && !item.customizable && (
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-full"
              onClick={() => setIsCustomizerOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add to Order
            </Button>
          )}
          
          {onAddToCart && item.customizable && (
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-full"
              onClick={() => setIsCustomizerOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Customize & Add
            </Button>
          )}
        </div>
      </div>

      {/* Customization modal */}
      <ItemCustomizer
        item={item}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
      />
    </>
  )
}
