'use client'

import { useEffect, useState } from 'react'
import { Song } from '../lib/song-schema'
import SongTitle from './song-title'
import SongInfo from './song-info'

export default function MainComponent() {

  const [selectedSong, setSelectedSong] = useState<Song | undefined>(undefined)
  const [songs, setSongs] = useState<Song[]>([])
  useEffect(() => {
    async function fetchSongs() {
      let res = await fetch('/api/all', {
        method: 'GET'
      })
      let data = await res.json()
      setSongs(data)
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
          {songs && songs.map((song: Song) => {
              return (
                <div onClick={() => { setSelectedSong(song) }}>
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