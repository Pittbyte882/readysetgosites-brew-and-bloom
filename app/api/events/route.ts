import { NextResponse } from 'next/server'
import { getUpcomingEvents, siteConfig } from '@/config/site'

export async function GET() {
  return NextResponse.json({
    events:   getUpcomingEvents(),
    all:      siteConfig.events,
  })
}