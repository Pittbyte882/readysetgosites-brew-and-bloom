import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/config/site'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from:     `${siteConfig.name} <${siteConfig.fromEmail}>`,
        to:       [siteConfig.notifyEmail],
        subject:  `Contact Form: ${subject ?? 'General Inquiry'} — ${name}`,
        reply_to: email,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#4A3728">
            <div style="background:linear-gradient(135deg,#FDF2F8,#F0FDF4);padding:24px 32px;border-bottom:3px solid #E8A4B8">
              <h2 style="font-family:Georgia,serif;margin:0">${siteConfig.name} — Contact Form</h2>
            </div>
            <div style="padding:32px;background:#FFFBF5;border:1px solid #E8DFD3">
              <table style="width:100%;font-size:14px;border-collapse:collapse">
                <tr><td style="padding:8px 16px 8px 0;color:#7A6B5A;white-space:nowrap">Name</td><td style="padding:8px 0;font-weight:500">${name}</td></tr>
                <tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#E8A4B8">${email}</a></td></tr>
                ${phone ? `<tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Phone</td><td style="padding:8px 0">${phone}</td></tr>` : ''}
                ${subject ? `<tr><td style="padding:8px 16px 8px 0;color:#7A6B5A">Subject</td><td style="padding:8px 0">${subject}</td></tr>` : ''}
              </table>
              <div style="margin-top:20px;padding:20px;background:#FFF8E7;border-left:3px solid #E8A4B8">
                <p style="font-size:12px;color:#7A6B5A;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.1em">Message</p>
                <p style="font-size:14px;line-height:1.7;margin:0">${message}</p>
              </div>
              <div style="margin-top:24px">
                <a href="mailto:${email}" style="display:inline-block;background:#E8A4B8;color:#4A3728;padding:10px 24px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;border-radius:50px">Reply to ${name.split(' ')[0]}</a>
              </div>
            </div>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}