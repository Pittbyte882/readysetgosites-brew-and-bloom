import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { GalleryContent } from "@/components/gallery/GalleryContent"

export const metadata = {
  title: "Gallery | Brew & Bloom",
  description: "Take a visual tour of Brew & Bloom — our space, drinks, food, and events.",
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <GalleryContent />
      </main>
      <Footer />
    </>
  )
}