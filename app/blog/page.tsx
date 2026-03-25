import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { BlogContent } from "@/components/blog/BlogContent"

export const metadata = {
  title: "Blog | Brew & Bloom",
  description: "Stories, tips, and seasonal updates from the Brew & Bloom team.",
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <BlogContent />
      </main>
      <Footer />
    </>
  )
}