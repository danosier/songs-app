import { z } from 'zod'

export const SONG_SCHEMA = z.object({
  uuid: z.string(),
  title: z.string(),
  artist: z.string(),
  album: z.string()
})

export type Song = z.infer<typeof SONG_SCHEMA>