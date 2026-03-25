import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AboutContent } from "@/components/about/AboutContent"

export const metadata = {
  title: "About | Brew & Bloom",
  description: "Learn the story behind Brew & Bloom — our founders, values, and botanical mission.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}