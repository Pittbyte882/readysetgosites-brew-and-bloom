"use client"

import { useState } from "react"
import { Send, Sparkles, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (!siteConfig.features.newsletter) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section id="newsletter" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Botanical border decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-botanical relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Stay in Bloom
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for seasonal menu updates, exclusive offers, 
            and first access to events. Join our growing community!
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-secondary/10 border border-secondary/30">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <p className="font-semibold">You&apos;re in!</p>
                <p className="text-sm text-muted-foreground">
                  Check your inbox for a welcome treat.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 px-5 rounded-full bg-background border-2 focus:border-primary"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="rounded-full h-12 px-8"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Subscribe
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          )}

          {/* Trust elements */}
          <p className="mt-4 text-xs text-muted-foreground">
            No spam, ever. Unsubscribe anytime. We typically send 2-4 emails per month.
          </p>
        </div>
      </div>
    </section>
  )
}
