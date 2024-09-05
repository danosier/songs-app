import { Song } from '@/app/lib/song-schema'
import { NextResponse } from 'next/server'

const API_URL = process.env.GET_API_URL ?? ''

export async function GET(): Promise<NextResponse<Song[]>> {
  const res = await fetch(`${ API_URL }`, {
    method: 'GET',
    next: {
      revalidate: 0
    }
  })

  return NextResponse.json(await res.json())
}