"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { siteConfig } from "@/config/site"

export function CartButton() {
  const { cartCount, setIsCartOpen } = useCart()

  if (!siteConfig.features.onlineOrdering) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-9 w-9 rounded-full hover:bg-primary/10"
      onClick={() => setIsCartOpen(true)}
      aria-label={`Shopping cart with ${cartCount} items`}
    >
      <ShoppingBag className="h-4 w-4" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center">
          {cartCount > 9 ? "9+" : cartCount}
        </span>
      )}
    </Button>
  )
}
