'use client'

import { useEffect, useState } from 'react'
import { Song, SONG_SCHEMA } from '../lib/song-schema'
import SongTitle from './song-title'
import SongInfo from './song-info'
import { z } from 'zod'

export default function MainComponent() {

  const [selectedSong, setSelectedSong] = useState<Song | undefined>(undefined)
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    function areValidSongs(songs: unknown): songs is Song[] {
      const songArraySchema = z.array(SONG_SCHEMA)
      const safeParseResult = songArraySchema.safeParse(songs)
  
      return safeParseResult.success
    }

    async function fetchSongs() {
      let res = await fetch('/api/all', {
        method: 'GET'
      })
      let data = await res.json()

      if(areValidSongs(songs)) {
        setSongs(data)
      }
      else {
        throw new Error('error validating response from fetching all songs')
      }
      
    }
    fetchSongs()
  }, [setSongs])

  return (
    <>
      <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {songs && songs.map((song: Song, index: number) => {
              return (
                <div onClick={() => { setSelectedSong(song) }} key={ index }>
                  <SongTitle title={ song.title } />
                </div>
              )
          })}
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {
            selectedSong && <SongInfo song={ selectedSong } />
          }
        </div>
      </div>
    </main>
    </>
  )
}