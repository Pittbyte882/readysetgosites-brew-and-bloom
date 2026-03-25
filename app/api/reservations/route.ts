import { NextRequest, NextResponse } from 'next/server'
import { siteConfig, getUpcomingEvents } from '@/config/site'

// POST /api/reservations — event reservation request via Resend
export async function POST(req: NextRequest) {
  try {
    const { eventId, name, email, phone, guests, notes } = await req.json()

    if (!eventId || !name || !email) {
      return NextResponse.json(
        { error: 'Event ID, name, and email are required.' },
        { status: 400 }
      )
    }

    const event = siteConfig.events.find(e => e.id === eventId)
    if (!event) {
      return NextResponse.json({ error: 'Event not found.' }, { status: 404 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
    }

    const refNumber = `RES-${Date.now().toString().slice(-6)}`
    const eventDate = new Date(event.date).toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    })

    // ── Notify owner ──────────────────────────────────────────
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from:     `${siteConfig.name} <${siteConfig.fromEmail}>`,
        to:       [siteConfig.notifyEmail],
        subject:  `New Reservation ${refNumber} — ${event.title}`,
        reply_to: email,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#4A3728">
            <div style="background:linear-gradient(135deg,#FDF2F8,#F0FDF4);padding:24px 32px;border-bottom:3px solid #E8A4B8">
              <h2 style="font-family:Georgia,serif;margin:0">${siteConfig.name} — New Reservation</h2>
              <p style="color:#7A6B5A;font-size:13px;margin:4px 0 0">${refNumber}</p>
            </div>
            <div style="padding:32px;background:#FFFBF5;border:1px solid #E8DFD3">
              <table style="width:100%;font-size:14px;border-collapse:collapse">
                <tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Event</td><td style="padding:8px 0;font-weight:600">${event.title}</td></tr>
                <tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Date</td><td style="padding:8px 0">${eventDate}</td></tr>
                <tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Time</td><td style="padding:8px 0">${event.startTime} – ${event.endTime}</td></tr>
                <tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Name</td><td style="padding:8px 0">${name}</td></tr>
                <tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#E8A4B8">${email}</a></td></tr>
                ${phone ? `<tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Phone</td><td style="padding:8px 0">${phone}</td></tr>` : ''}
                ${guests ? `<tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Guests</td><td style="padding:8px 0">${guests}</td></tr>` : ''}
                ${notes ? `<tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Notes</td><td style="padding:8px 0">${notes}</td></tr>` : ''}
              </table>
            </div>
          </div>
        `,
      }),
    })

    // ── Confirmation to guest ─────────────────────────────────
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from:    `${siteConfig.name} <${siteConfig.fromEmail}>`,
        to:      [email],
        subject: `You're registered — ${event.title} 🌸`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#4A3728">
            <div style="background:linear-gradient(135deg,#FDF2F8,#F0FDF4);padding:32px 40px;text-align:center">
              <h1 style="font-family:Georgia,serif;font-size:26px;margin:0">${siteConfig.name}</h1>
            </div>
            <div style="padding:40px;background:#FFFBF5;border:1px solid #E8DFD3">
              <p style="font-family:Georgia,serif;font-size:20px;font-style:italic">
                You're all set, ${name.split(' ')[0]}!
              </p>
              <p style="color:#7A6B5A;line-height:1.8">
                Your spot at <strong>${event.title}</strong> is confirmed. 
                We can't wait to see you there.
              </p>
              <div style="margin:24px 0;padding:20px;background:#F5EDE4;border-radius:8px">
                <p style="font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:#7A6B5A;margin:0 0 12px">Event Details</p>
                <p style="margin:4px 0;font-size:14px"><strong>${event.title}</strong></p>
                <p style="margin:4px 0;font-size:14px;color:#7A6B5A">${eventDate}</p>
                <p style="margin:4px 0;font-size:14px;color:#7A6B5A">${event.startTime} – ${event.endTime}</p>
                <p style="margin:4px 0;font-size:14px;color:#7A6B5A">${siteConfig.address.street}, ${siteConfig.address.city}</p>
                ${event.price ? `<p style="margin:8px 0 0;font-size:14px">Price: <strong>$${event.price}</strong> per person</p>` : '<p style="margin:8px 0 0;font-size:14px;color:#7A6B5A">Free event</p>'}
              </div>
              <p style="color:#7A6B5A;font-size:14px">
                Questions? Call us at <a href="tel:${siteConfig.phone}" style="color:#E8A4B8">${siteConfig.phone}</a> 
                or email <a href="mailto:${siteConfig.email}" style="color:#E8A4B8">${siteConfig.email}</a>.
              </p>
              <p style="font-size:12px;color:#7A6B5A">Reference: ${refNumber}</p>
            </div>
            <div style="padding:20px 40px;background:#E8A4B8;text-align:center">
              <p style="font-family:Georgia,serif;font-style:italic;color:#4A3728;margin:0">
                See you soon — the ${siteConfig.name} team 🌸
              </p>
            </div>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true, refNumber })
  } catch (err) {
    console.error('Reservations API error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}

// GET /api/reservations?eventId=xxx — check capacity info for an event
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const eventId = searchParams.get('eventId')

  if (!eventId) {
    return NextResponse.json({ error: 'eventId is required.' }, { status: 400 })
  }

  const event = siteConfig.events.find(e => e.id === eventId)
  if (!event) {
    return NextResponse.json({ error: 'Event not found.' }, { status: 404 })
  }

  return NextResponse.json({
    eventId:              event.id,
    title:                event.title,
    date:                 event.date,
    capacity:             event.capacity ?? null,
    requiresReservation:  event.requiresReservation,
    price:                event.price ?? null,
    isFree:               event.isFree,
  })
}