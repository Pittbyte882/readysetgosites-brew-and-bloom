"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface NavItem {
  label: string
  href: string
  feature?: keyof typeof siteConfig.features
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Order Online", href: "/order", feature: "onlineOrdering" },
  { label: "Gallery", href: "/gallery", feature: "gallery" },
  { label: "Events", href: "/events", feature: "events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

// Filter items based on enabled features
const getEnabledNavItems = () => {
  return navItems.filter(item => {
    if (!item.feature) return true
    return siteConfig.features[item.feature]
  })
}

interface NavigationProps {
  className?: string
  onItemClick?: () => void
  variant?: "header" | "footer" | "mobile"
}

export function Navigation({ className, onItemClick, variant = "header" }: NavigationProps) {
  const pathname = usePathname()
  const enabledItems = getEnabledNavItems()

  if (variant === "footer") {
    return (
      <nav className={cn("flex flex-wrap gap-x-6 gap-y-2", className)}>
        {enabledItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm transition-colors hover:text-primary",
              pathname === item.href
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
        {siteConfig.features.catering && (
          <Link
            href="/catering"
            className={cn(
              "text-sm transition-colors hover:text-primary",
              pathname === "/catering"
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            Catering
          </Link>
        )}
        {siteConfig.features.loyaltyProgram && (
          <Link
            href="/rewards"
            className={cn(
              "text-sm transition-colors hover:text-primary",
              pathname === "/rewards"
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            Rewards
          </Link>
        )}
        {siteConfig.features.blog && (
          <Link
            href="/blog"
            className={cn(
              "text-sm transition-colors hover:text-primary",
              pathname === "/blog"
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            Blog
          </Link>
        )}
      </nav>
    )
  }

  if (variant === "mobile") {
    return (
      <nav className={cn("flex flex-col space-y-1", className)}>
        {enabledItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
              pathname === item.href
                ? "bg-primary/10 text-primary"
                : "text-foreground hover:bg-muted"
            )}
          >
            {item.label}
          </Link>
        ))}
        {siteConfig.features.catering && (
          <Link
            href="/catering"
            onClick={onItemClick}
            className={cn(
              "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
              pathname === "/catering"
                ? "bg-primary/10 text-primary"
                : "text-foreground hover:bg-muted"
            )}
          >
            Catering
          </Link>
        )}
        {siteConfig.features.loyaltyProgram && (
          <Link
            href="/rewards"
            onClick={onItemClick}
            className={cn(
              "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
              pathname === "/rewards"
                ? "bg-primary/10 text-primary"
                : "text-foreground hover:bg-muted"
            )}
          >
            Rewards
          </Link>
        )}
        {siteConfig.features.blog && (
          <Link
            href="/blog"
            onClick={onItemClick}
            className={cn(
              "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
              pathname === "/blog"
                ? "bg-primary/10 text-primary"
                : "text-foreground hover:bg-muted"
            )}
          >
            Blog
          </Link>
        )}
      </nav>
    )
  }

  // Header variant (default)
  return (
    <nav className={cn("hidden md:flex items-center gap-1", className)}>
      {enabledItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "relative px-3 py-2 text-sm font-medium transition-colors rounded-full",
            pathname === item.href
              ? "text-primary"
              : "text-foreground/80 hover:text-foreground hover:bg-muted"
          )}
        >
          {item.label}
          {pathname === item.href && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
          )}
        </Link>
      ))}
    </nav>
  )
}
