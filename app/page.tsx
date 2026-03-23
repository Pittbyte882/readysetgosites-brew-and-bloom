import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/order/CartDrawer"
import { SeasonalParticles } from "@/components/shared/SeasonalParticles"
import { Hero } from "@/components/home/Hero"
import { FeaturedDrinks } from "@/components/home/FeaturedDrinks"
import { StoryTeaser } from "@/components/home/StoryTeaser"
import { EventsPreview } from "@/components/home/EventsPreview"
import { Newsletter } from "@/components/home/Newsletter"

export default function HomePage() {
  return (
    <>
      <SeasonalParticles />
      <Header />
      <CartDrawer />
      
      <main>
        <Hero />
        <FeaturedDrinks />
        <StoryTeaser />
        <EventsPreview />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}
