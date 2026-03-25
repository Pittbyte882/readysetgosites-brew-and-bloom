"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, getFullAddress } from "@/config/site"

export function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Hook up to your email provider here — form data is in `form`
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-muted/30 border-b">
        <div className="container-botanical text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We&apos;d love to hear from you. Reach out for reservations, catering inquiries, or just to say hello.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-botanical">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact info */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-8">Find Us</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-muted-foreground">{getFullAddress()}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-3">Hours</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between gap-8">
                        <span>Monday – Wednesday</span>
                        <span>{siteConfig.hours.monday}</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Thursday</span>
                        <span>{siteConfig.hours.thursday}</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Friday – Saturday</span>
                        <span>{siteConfig.hours.friday}</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span>{siteConfig.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-muted border">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(getFullAddress())}&output=embed`}
                />
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-8">Send a Message</h2>

              {submitted ? (
                <div className="text-center py-16 px-8 bg-primary/5 rounded-2xl border border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    className="mt-6 rounded-full"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation</option>
                      <option value="events">Private Event</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      className="w-full px-4 py-2.5 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                    />
                  </div>

                  <Button type="submit" className="rounded-full w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}