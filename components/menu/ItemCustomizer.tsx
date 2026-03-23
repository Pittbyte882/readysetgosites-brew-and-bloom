"use client"

import { useState, useEffect } from "react"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/config/site"
import { useCart } from "@/context/CartContext"
import { type MenuItem, type ItemCustomization, sizeOptions, milkOptions, extras } from "@/data/menu"

interface ItemCustomizerProps {
  item: MenuItem
  isOpen: boolean
  onClose: () => void
}

export function ItemCustomizer({ item, isOpen, onClose }: ItemCustomizerProps) {
  const { addItem } = useCart()
  const [customization, setCustomization] = useState<ItemCustomization>({
    size: item.availableSizes?.[0] || "small",
    milk: item.availableMilks?.[0] || "whole",
    extras: [],
    specialInstructions: "",
  })
  const [quantity, setQuantity] = useState(1)

  // Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setCustomization({
        size: item.availableSizes?.[0] || "small",
        milk: item.availableMilks?.[0] || "whole",
        extras: [],
        specialInstructions: "",
      })
      setQuantity(1)
    }
  }, [isOpen, item])

  // Calculate total price
  const calculatePrice = (): number => {
    let price = item.basePrice

    if (customization.size === "medium") price += 0.5
    if (customization.size === "large") price += 1.0

    if (["oat", "almond", "coconut"].includes(customization.milk || "")) {
      price += 0.75
    }

    customization.extras?.forEach((extra) => {
      const extraItem = extras.find((e) => e.id === extra)
      if (extraItem) price += extraItem.price
    })

    return price * quantity
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(item, customization)
    }
    onClose()
  }

  const toggleExtra = (extraId: string) => {
    setCustomization((prev) => ({
      ...prev,
      extras: prev.extras?.includes(extraId)
        ? prev.extras.filter((e) => e !== extraId)
        : [...(prev.extras || []), extraId],
    }))
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-x-4 top-[50%] z-50 -translate-y-1/2 mx-auto max-w-lg bg-background rounded-2xl shadow-2xl border overflow-hidden md:inset-x-auto">
        {/* Header */}
        <div className="relative p-6 pb-4 border-b">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="flex gap-4">
            {/* Image placeholder */}
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
              <span className="font-serif text-2xl font-bold text-gradient">
                {item.name.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold">{item.name}</h2>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[50vh] overflow-y-auto space-y-6">
          {/* Size selection */}
          {item.availableSizes && item.availableSizes.length > 0 && (
            <div>
              <Label className="text-sm font-semibold mb-3 block">Size</Label>
              <RadioGroup
                value={customization.size}
                onValueChange={(value) =>
                  setCustomization((prev) => ({ ...prev, size: value as ItemCustomization["size"] }))
                }
                className="grid grid-cols-3 gap-2"
              >
                {item.availableSizes.map((size) => {
                  const option = sizeOptions.find((s) => s.id === size)
                  return (
                    <div key={size}>
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className={cn(
                          "flex flex-col items-center justify-center rounded-xl border-2 p-3 cursor-pointer transition-all",
                          "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5",
                          "hover:border-primary/50"
                        )}
                      >
                        <span className="font-medium capitalize">{size}</span>
                        <span className="text-xs text-muted-foreground">
                          {option?.price === 0 ? "Included" : `+${formatPrice(option?.price || 0)}`}
                        </span>
                      </Label>
                    </div>
                  )
                })}
              </RadioGroup>
            </div>
          )}

          {/* Milk selection */}
          {item.availableMilks && item.availableMilks.length > 0 && (
            <div>
              <Label className="text-sm font-semibold mb-3 block">Milk</Label>
              <RadioGroup
                value={customization.milk}
                onValueChange={(value) =>
                  setCustomization((prev) => ({ ...prev, milk: value as ItemCustomization["milk"] }))
                }
                className="grid grid-cols-2 gap-2"
              >
                {item.availableMilks.map((milk) => {
                  const option = milkOptions.find((m) => m.id === milk)
                  return (
                    <div key={milk}>
                      <RadioGroupItem
                        value={milk}
                        id={`milk-${milk}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`milk-${milk}`}
                        className={cn(
                          "flex items-center justify-between rounded-xl border-2 p-3 cursor-pointer transition-all",
                          "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5",
                          "hover:border-primary/50"
                        )}
                      >
                        <span className="font-medium">{option?.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {option?.price === 0 ? "Included" : `+${formatPrice(option?.price || 0)}`}
                        </span>
                      </Label>
                    </div>
                  )
                })}
              </RadioGroup>
            </div>
          )}

          {/* Extras */}
          {item.availableExtras && item.availableExtras.length > 0 && (
            <div>
              <Label className="text-sm font-semibold mb-3 block">Extras</Label>
              <div className="space-y-2">
                {item.availableExtras.map((extraId) => {
                  const extra = extras.find((e) => e.id === extraId)
                  if (!extra) return null
                  return (
                    <div
                      key={extraId}
                      className={cn(
                        "flex items-center justify-between rounded-xl border-2 p-3 cursor-pointer transition-all",
                        customization.extras?.includes(extraId)
                          ? "border-primary bg-primary/5"
                          : "hover:border-primary/50"
                      )}
                      onClick={() => toggleExtra(extraId)}
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={customization.extras?.includes(extraId)}
                          onCheckedChange={() => toggleExtra(extraId)}
                          id={`extra-${extraId}`}
                        />
                        <Label htmlFor={`extra-${extraId}`} className="font-medium cursor-pointer">
                          {extra.name}
                        </Label>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        +{formatPrice(extra.price)}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Special instructions */}
          <div>
            <Label htmlFor="instructions" className="text-sm font-semibold mb-3 block">
              Special Instructions (optional)
            </Label>
            <Textarea
              id="instructions"
              placeholder="Any allergies or preferences?"
              value={customization.specialInstructions}
              onChange={(e) =>
                setCustomization((prev) => ({ ...prev, specialInstructions: e.target.value }))
              }
              className="resize-none"
              rows={2}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t bg-muted/30">
          {/* Quantity selector */}
          <div className="flex items-center justify-between mb-4">
            <Label className="text-sm font-semibold">Quantity</Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button onClick={handleAddToCart} className="w-full rounded-full" size="lg">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Order - {formatPrice(calculatePrice())}
          </Button>
        </div>
      </div>
    </>
  )
}
