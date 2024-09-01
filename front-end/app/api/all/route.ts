import { Song } from '@/app/lib/song-schema'
import { NextResponse } from 'next/server'

export async function GET(): Promise<NextResponse<Song[]>> {
  const res = await fetch('https://hbghdpmggwgydxiftvyd4mtxxa0zrcfa.lambda-url.us-east-1.on.aws/', {
    method: 'GET'
  })

  return NextResponse.json(await res.json())
}