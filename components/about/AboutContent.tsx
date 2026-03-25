"use client"

import { Coffee, Leaf, Heart, Award } from "lucide-react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const iconMap = { Coffee, Leaf, Heart }

export function AboutContent() {
  const { story, team } = siteConfig

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-muted/30 border-b">
        <div className="container-botanical text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            About {siteConfig.name}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {siteConfig.tagline}
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20">
        <div className="container-botanical">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                {story.image ? (
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />
                )}
                <div className="absolute inset-4 rounded-2xl border-2 border-background/50" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="text-center">
                    <span className="font-serif text-6xl font-bold text-background/90">Est.</span>
                    <span className="block font-serif text-8xl font-bold text-background/90">{story.estYear}</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-background shadow-xl border max-w-[200px]">
                <div className="font-serif text-4xl font-bold text-primary mb-1">{story.yearsServing}</div>
                <div className="text-sm text-muted-foreground">Years serving our community</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">{story.headline}</h2>
              {story.paragraphs.map((para, i) => (
                <p key={i} className={cn("text-muted-foreground mb-4", i === 0 && "text-lg")}>
                  {para}
                </p>
              ))}

              {/* Values */}
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {story.values.map((value) => {
                  const Icon = iconMap[value.icon]
                  return (
                    <div key={value.title}>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 bg-muted/30">
        <div className="container-botanical">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">The People</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">Meet Our Team</h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
              The passionate people behind every cup and every bloom.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-card border rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-background/80 flex items-center justify-center">
                        <span className="font-serif text-3xl font-bold text-primary">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 border-t border-b">
        <div className="container-botanical">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: story.estYear, label: "Founded" },
              { value: story.yearsServing, label: "Years in Community" },
              { value: `${siteConfig.menuItems.length}+`, label: "Menu Items" },
              { value: `${siteConfig.events.length}+`, label: "Events Per Year" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}