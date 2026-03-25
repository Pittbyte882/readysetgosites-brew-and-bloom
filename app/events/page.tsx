import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { EventsContent } from "@/components/events/EventsContent"

export const metadata = {
  title: "Events | Brew & Bloom",
  description: "Join us for workshops, live music, tastings, and community gatherings at Brew & Bloom.",
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <EventsContent />
      </main>
      <Footer />
    </>
  )
}