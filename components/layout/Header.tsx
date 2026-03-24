"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Navigation } from "./Navigation"
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher"
import { CartButton } from "./CartButton"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
              ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
              : "bg-background/30 backdrop-blur-sm py-4"
        )}
      >
        <div className="container-botanical">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform group-hover:scale-105">
                  <span className="text-lg font-serif font-bold text-white">B</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent border-2 border-background" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-tight leading-none">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <Navigation />

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <CartButton />
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9 rounded-full hover:bg-primary/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-40 h-full w-[280px] bg-background shadow-xl md:hidden transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-4">
          <Navigation variant="mobile" onItemClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="mt-auto pt-6 border-t">
            <div className="px-4 space-y-3">
              <p className="text-sm text-muted-foreground">{siteConfig.phone}</p>
              <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
