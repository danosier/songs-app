import { Song } from '../lib/song-schema'

export default function SongTitle({ 
  title
}: { title: string }) {
  return (
    <>
      <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal hover:cursor-pointer`}>
        { title }
      </p>
    </>
  )
}