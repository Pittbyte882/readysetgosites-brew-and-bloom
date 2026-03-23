import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/context/ThemeContext'
import { CartProvider } from '@/context/CartContext'
import { siteConfig } from '@/config/site'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brewandbloom.com',
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [{ url: siteConfig.seo.ogImage }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFBF5' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
