import { Song } from '../lib/song-schema'

interface SongProps {
  song: Song
}

export default async function SongComponent({ 
  song
}: SongProps) {
  return (
    <>
      <div>
        { song.title }
      </div>
    </>
  )
}