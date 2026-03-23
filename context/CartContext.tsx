"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { MenuItem, ItemCustomization } from "@/data/menu"
import { formatPrice } from "@/config/site"

export interface CartItem {
  id: string
  item: MenuItem
  quantity: number
  customizations: ItemCustomization
  totalPrice: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: MenuItem, customizations: ItemCustomization) => void
  removeItem: (cartItemId: string) => void
  updateQuantity: (cartItemId: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function calculateItemPrice(item: MenuItem, customizations: ItemCustomization): number {
  let price = item.basePrice
  
  // Size pricing
  if (customizations.size === "medium") price += 0.5
  if (customizations.size === "large") price += 1.0
  
  // Milk pricing
  if (customizations.milk === "oat" || customizations.milk === "almond" || customizations.milk === "coconut") {
    price += 0.75
  }
  
  // Extras pricing
  if (customizations.extras) {
    customizations.extras.forEach(extra => {
      if (extra === "extra-shot") price += 0.75
      if (extra === "vanilla") price += 0.5
      if (extra === "caramel") price += 0.5
      if (extra === "hazelnut") price += 0.5
      if (extra === "lavender") price += 0.75
      if (extra === "honey") price += 0.5
      if (extra === "whipped-cream") price += 0.5
    })
  }
  
  return price
}

function generateCartItemId(): string {
  return `cart-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("brew-bloom-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch {
        localStorage.removeItem("brew-bloom-cart")
      }
    }
  }, [])

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("brew-bloom-cart", JSON.stringify(items))
  }, [items])

  const addItem = (item: MenuItem, customizations: ItemCustomization) => {
    const totalPrice = calculateItemPrice(item, customizations)
    const cartItem: CartItem = {
      id: generateCartItemId(),
      item,
      quantity: 1,
      customizations,
      totalPrice,
    }
    setItems(prev => [...prev, cartItem])
    setIsCartOpen(true)
  }

  const removeItem = (cartItemId: string) => {
    setItems(prev => prev.filter(item => item.id !== cartItemId))
  }

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(cartItemId)
      return
    }
    setItems(prev =>
      prev.map(item =>
        item.id === cartItemId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem("brew-bloom-cart")
  }

  const cartTotal = items.reduce((total, item) => total + item.totalPrice * item.quantity, 0)
  const cartCount = items.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

// Helper to format customizations for display
export function formatCustomizations(customizations: ItemCustomization): string {
  const parts: string[] = []
  
  if (customizations.size && customizations.size !== "small") {
    parts.push(customizations.size.charAt(0).toUpperCase() + customizations.size.slice(1))
  }
  
  if (customizations.milk && customizations.milk !== "whole") {
    const milkName = customizations.milk.charAt(0).toUpperCase() + customizations.milk.slice(1)
    parts.push(`${milkName} milk`)
  }
  
  if (customizations.extras && customizations.extras.length > 0) {
    const extraNames = customizations.extras.map(e => 
      e.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    )
    parts.push(...extraNames)
  }
  
  return parts.join(", ")
}
