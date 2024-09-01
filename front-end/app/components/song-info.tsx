import { Song } from '../lib/song-schema'

interface SongInfoProps {
  song: Song 
}

export default function SongInfo({ 
  song
}: SongInfoProps) {
  return (
    <div>
      <div className={`text-xl text-gray-800 md:text-3xl md:leading-normal clear-both block`}>
        Title: { song.title }
      </div>
      <div className={`text-xl text-gray-800 md:text-3xl md:leading-normal clear-both block`}>
        Album: { song.album }
      </div>
      <div className={`text-xl text-gray-800 md:text-3xl md:leading-normal clear-both block`}>
        Artist: { song.artist }
      </div>
    </div>
  )
}