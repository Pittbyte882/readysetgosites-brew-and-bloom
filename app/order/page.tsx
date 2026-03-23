"use client"

import { useState, useMemo } from "react"
import { ArrowLeft, Clock, MapPin, ShoppingBag, Trash2, Plus, Minus, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/order/CartDrawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MenuItemCard } from "@/components/menu/MenuItemCard"
import { useCart, formatCustomizations } from "@/context/CartContext"
import { useTheme } from "@/context/ThemeContext"
import { siteConfig, formatPrice, getFullAddress } from "@/config/site"
import { menuItems, getMenuBySeason } from "@/data/menu"
import { cn } from "@/lib/utils"

type OrderStep = "menu" | "cart" | "checkout" | "confirmation"

export default function OrderPage() {
  const { season } = useTheme()
  const { items, removeItem, updateQuantity, cartTotal, cartCount, clearCart } = useCart()
  const [step, setStep] = useState<OrderStep>(items.length > 0 ? "cart" : "menu")
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup")
  const [pickupTime, setPickupTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  })
  const [orderNumber, setOrderNumber] = useState("")

  const seasonalItems = useMemo(() => getMenuBySeason(season), [season])

  // Generate pickup times (every 15 mins from now + minPickupTime)
  const pickupTimes = useMemo(() => {
    const times: string[] = []
    const now = new Date()
    now.setMinutes(now.getMinutes() + siteConfig.orderSettings.minPickupTime)
    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15)

    for (let i = 0; i < 12; i++) {
      const time = new Date(now.getTime() + i * 15 * 60000)
      times.push(time.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }))
    }
    return times
  }, [])

  const deliveryFee = orderType === "delivery" ? 
    (cartTotal >= siteConfig.orderSettings.freeDeliveryMinimum ? 0 : siteConfig.orderSettings.deliveryFee) : 0
  const tax = cartTotal * 0.08 // 8% tax
  const total = cartTotal + deliveryFee + tax

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    // Generate order number
    const num = `BB${Date.now().toString().slice(-6)}`
    setOrderNumber(num)
    clearCart()
    setStep("confirmation")
  }

  const isFormValid = formData.name && formData.phone && pickupTime && 
    (orderType === "pickup" || (orderType === "delivery" && formData.address))

  return (
    <>
      <Header />
      <CartDrawer />

      <main className="min-h-screen pt-24 pb-20">
        <div className="container-botanical">
          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {(["menu", "cart", "checkout", "confirmation"] as OrderStep[]).map((s, i) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                    step === s
                      ? "bg-primary text-primary-foreground"
                      : ["cart", "checkout", "confirmation"].indexOf(step) >= i
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {i + 1}
                </div>
                {i < 3 && (
                  <div
                    className={cn(
                      "w-12 h-0.5 mx-1",
                      ["cart", "checkout", "confirmation"].indexOf(step) > i
                        ? "bg-primary"
                        : "bg-muted"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Menu view */}
          {step === "menu" && (
            <>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="font-serif text-3xl font-bold">Order Online</h1>
                  <p className="text-muted-foreground mt-1">
                    Browse our menu and add items to your order
                  </p>
                </div>
                {cartCount > 0 && (
                  <Button onClick={() => setStep("cart")} className="rounded-full">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    View Cart ({cartCount})
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {seasonalItems.slice(0, 12).map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" asChild className="rounded-full">
                  <Link href="/menu">View Full Menu</Link>
                </Button>
              </div>
            </>
          )}

          {/* Cart view */}
          {step === "cart" && (
            <div className="max-w-2xl mx-auto">
              <Button
                variant="ghost"
                className="mb-6"
                onClick={() => setStep("menu")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>

              <h1 className="font-serif text-3xl font-bold mb-8">Your Order</h1>

              {items.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-muted-foreground mb-4">
                    Add some items from our menu to get started.
                  </p>
                  <Button onClick={() => setStep("menu")} className="rounded-full">
                    Browse Menu
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-8">
                    {items.map((cartItem) => (
                      <div
                        key={cartItem.id}
                        className="flex gap-4 p-4 rounded-xl bg-card border"
                      >
                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center">
                          <span className="font-serif text-xl font-bold text-gradient">
                            {cartItem.item.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold">{cartItem.item.name}</h3>
                              {formatCustomizations(cartItem.customizations) && (
                                <p className="text-sm text-muted-foreground">
                                  {formatCustomizations(cartItem.customizations)}
                                </p>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-muted-foreground hover:text-destructive"
                              onClick={() => removeItem(cartItem.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{cartItem.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <span className="font-semibold">
                              {formatPrice(cartItem.totalPrice * cartItem.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 rounded-xl bg-muted/50 border space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-3 border-t">
                      <span>Total</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full mt-6 rounded-full"
                    onClick={() => setStep("checkout")}
                  >
                    Continue to Checkout
                  </Button>
                </>
              )}
            </div>
          )}

          {/* Checkout view */}
          {step === "checkout" && (
            <div className="max-w-2xl mx-auto">
              <Button
                variant="ghost"
                className="mb-6"
                onClick={() => setStep("cart")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Button>

              <h1 className="font-serif text-3xl font-bold mb-8">Checkout</h1>

              <form onSubmit={handleSubmitOrder} className="space-y-8">
                {/* Order type */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Order Type</Label>
                  <RadioGroup
                    value={orderType}
                    onValueChange={(v) => setOrderType(v as "pickup" | "delivery")}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="pickup" id="pickup" className="peer sr-only" />
                      <Label
                        htmlFor="pickup"
                        className={cn(
                          "flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all",
                          "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                        )}
                      >
                        <MapPin className="h-6 w-6" />
                        <span className="font-medium">Pickup</span>
                        <span className="text-xs text-muted-foreground">
                          Ready in {siteConfig.orderSettings.minPickupTime}+ mins
                        </span>
                      </Label>
                    </div>
                    {siteConfig.orderSettings.acceptsDelivery && (
                      <div>
                        <RadioGroupItem value="delivery" id="delivery" className="peer sr-only" />
                        <Label
                          htmlFor="delivery"
                          className={cn(
                            "flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all",
                            "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                          )}
                        >
                          <Clock className="h-6 w-6" />
                          <span className="font-medium">Delivery</span>
                          <span className="text-xs text-muted-foreground">
                            {cartTotal >= siteConfig.orderSettings.freeDeliveryMinimum
                              ? "Free delivery!"
                              : `+${formatPrice(siteConfig.orderSettings.deliveryFee)}`}
                          </span>
                        </Label>
                      </div>
                    )}
                  </RadioGroup>
                </div>

                {/* Pickup time */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">
                    {orderType === "pickup" ? "Pickup Time" : "Delivery Time"}
                  </Label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {pickupTimes.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={pickupTime === time ? "default" : "outline"}
                        size="sm"
                        className="rounded-full"
                        onClick={() => setPickupTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold block">Contact Information</Label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email (for receipt)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  {orderType === "delivery" && (
                    <div>
                      <Label htmlFor="address">Delivery Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        className="mt-1"
                        rows={2}
                      />
                    </div>
                  )}
                  <div>
                    <Label htmlFor="notes">Order Notes (optional)</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any special instructions?"
                      className="mt-1"
                      rows={2}
                    />
                  </div>
                </div>

                {/* Order summary */}
                <div className="p-6 rounded-xl bg-muted/50 border space-y-3">
                  <h3 className="font-semibold mb-4">Order Summary</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal ({cartCount} items)</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  {orderType === "delivery" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery</span>
                      <span>{deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-3 border-t">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {orderType === "pickup" && (
                  <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Pickup Location</p>
                      <p className="text-sm text-muted-foreground">{getFullAddress()}</p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                  disabled={!isFormValid}
                >
                  Place Order - {formatPrice(total)}
                </Button>
              </form>
            </div>
          )}

          {/* Confirmation view */}
          {step === "confirmation" && (
            <div className="max-w-lg mx-auto text-center py-12">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-secondary" />
              </div>
              <h1 className="font-serif text-3xl font-bold mb-2">Order Confirmed!</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Your order #{orderNumber} has been received
              </p>

              <div className="p-6 rounded-xl bg-card border text-left mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      {orderType === "pickup" ? "Pickup" : "Delivery"} Time
                    </p>
                    <p className="text-sm text-muted-foreground">{pickupTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      {orderType === "pickup" ? "Pickup Location" : "Delivering To"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {orderType === "pickup" ? getFullAddress() : formData.address}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                We&apos;ve sent a confirmation to {formData.email || "your phone"}. 
                Thank you for your order!
              </p>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" asChild className="rounded-full">
                  <Link href="/">Return Home</Link>
                </Button>
                <Button asChild className="rounded-full">
                  <Link href="/menu">Order Again</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
