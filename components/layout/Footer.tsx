"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { siteConfig, getFullAddress } from "@/config/site"
import { Navigation } from "./Navigation"
import { useTheme, seasonThemes } from "@/context/ThemeContext"

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
}

export function Footer() {
  const { season } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-muted/50 border-t">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden h-16 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-16 text-muted/50"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container-botanical py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-lg font-serif font-bold text-white">B</span>
              </div>
              <span className="font-serif text-xl font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => {
                if (!url) return null
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                if (!Icon) return null
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label={`Visit our ${platform}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Explore</h3>
            <Navigation variant="footer" className="flex-col gap-2" />
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Wednesday</span>
                <span>{siteConfig.hours.monday}</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span>{siteConfig.hours.thursday}</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>{siteConfig.hours.friday}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>{siteConfig.hours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>{getFullAddress()}</p>
              <p>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            </div>

            {/* Newsletter signup teaser */}
            {siteConfig.features.newsletter && (
              <div className="mt-6 p-4 rounded-xl bg-background border">
                <p className="text-sm font-medium mb-2">Join our newsletter</p>
                <p className="text-xs text-muted-foreground">
                  Get updates on seasonal menus and events.
                </p>
                <Link
                  href="/#newsletter"
                  className="inline-block mt-2 text-sm text-primary hover:underline"
                >
                  Subscribe now
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: seasonThemes[season].primary }} />
              {seasonThemes[season].name} theme
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
