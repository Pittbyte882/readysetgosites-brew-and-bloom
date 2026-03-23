"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, formatCustomizations } from "@/context/CartContext"
import { formatPrice } from "@/config/site"
import { cn } from "@/lib/utils"

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, cartTotal, clearCart } = useCart()

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCartOpen(false)
    }
    if (isCartOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isCartOpen, setIsCartOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-[400px] bg-background shadow-xl transition-transform duration-300 ease-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-serif text-lg font-semibold">Your Order</h2>
            {items.length > 0 && (
              <span className="text-sm text-muted-foreground">
                ({items.reduce((sum, item) => sum + item.quantity, 0)} items)
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="font-serif text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mb-4">
                Add some delicious items from our menu
              </p>
              <Button onClick={() => setIsCartOpen(false)} asChild>
                <Link href="/menu">Browse Menu</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="flex gap-3 p-3 rounded-xl bg-muted/50 border"
                >
                  {/* Item image placeholder */}
                  <div className="w-16 h-16 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-medium text-sm leading-tight">
                          {cartItem.item.name}
                        </h3>
                        {formatCustomizations(cartItem.customizations) && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {formatCustomizations(cartItem.customizations)}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(cartItem.id)}
                        aria-label={`Remove ${cartItem.item.name} from cart`}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {cartItem.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <span className="font-medium text-sm">
                        {formatPrice(cartItem.totalPrice * cartItem.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Subtotal</span>
              <span className="font-serif text-xl font-semibold">
                {formatPrice(cartTotal)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Tax calculated at checkout. Pickup times available after checkout.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button asChild>
                <Link href="/order" onClick={() => setIsCartOpen(false)}>
                  Checkout
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
