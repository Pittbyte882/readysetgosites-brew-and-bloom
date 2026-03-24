import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/config/site'

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    if (!email) return NextResponse.json({ error: 'Email is required.' }, { status: 400 })

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })

    // Notify owner
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from:    `${siteConfig.name} <${siteConfig.fromEmail}>`,
        to:      [siteConfig.notifyEmail],
        subject: `New Newsletter Signup — ${email}`,
        html:    `<p style="font-family:sans-serif"><strong>${name ?? 'Someone'}</strong> subscribed to the newsletter: <a href="mailto:${email}">${email}</a></p>`,
      }),
    })

    // Welcome email to subscriber
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from:    `${siteConfig.name} <${siteConfig.fromEmail}>`,
        to:      [email],
        subject: `Welcome to the ${siteConfig.name} newsletter 🌸`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#4A3728">
            <div style="background:linear-gradient(135deg,#FDF2F8,#F0FDF4);padding:32px 40px;text-align:center">
              <h1 style="font-family:Georgia,serif;font-size:28px;margin:0">${siteConfig.name}</h1>
              <p style="color:#7A6B5A;font-style:italic">Where Coffee Meets Nature</p>
            </div>
            <div style="padding:40px;background:#FFFBF5;border:1px solid #E8DFD3;text-align:center">
              <p style="font-family:Georgia,serif;font-size:22px;font-style:italic">Welcome${name ? `, ${name.split(' ')[0]}` : ''}!</p>
              <p style="color:#7A6B5A;line-height:1.8;max-width:400px;margin:0 auto">
                You're now part of our blooming community. Expect seasonal menu updates, event invitations, and the occasional surprise from our kitchen.
              </p>
              <div style="margin:32px 0">
                <a href="${siteConfig.seo.siteUrl}/menu" style="display:inline-block;background:#E8A4B8;color:#4A3728;padding:12px 32px;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;border-radius:50px">Explore Our Menu</a>
              </div>
              <p style="font-size:12px;color:#7A6B5A">
                ${siteConfig.phone} &nbsp;·&nbsp; ${getFullAddress()}
              </p>
            </div>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter API error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}

function getFullAddress() {
  const { street, city, state, zip } = siteConfig.address
  return `${street}, ${city}, ${state} ${zip}`
}