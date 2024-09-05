import { NextRequest, NextResponse } from 'next/server'

const API_URL = process.env.POST_API_URL ?? ''

export async function POST(request: NextRequest): Promise<NextResponse> {
  const res = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(await request.json())
  })

  return NextResponse.json(await res.json())
}