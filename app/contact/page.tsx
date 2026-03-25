import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ContactContent } from "@/components/contact/ContactContent"

export const metadata = {
  title: "Contact | Brew & Bloom",
  description: "Get in touch with Brew & Bloom — we'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}