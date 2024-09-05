'use client'

import { useForm } from 'react-hook-form'
import { POST_Song } from '../lib/song-schema'
import FormInput from '../components/form-input/form-input'

export default function AddSong() {
  const { register, handleSubmit, setError, formState } = useForm<POST_Song>()
  const { isSubmitting } = formState

  async function onSubmit(song: POST_Song): Promise<any> {

    try {
      const res = await fetch('/api/song', {
        method: 'POST',
        body: JSON.stringify(song)
      })
      if(res.status > 200) {
        setError('root.serverError', {
          type: res.status.toString(),
          message: (await res.json()).error.message
        })
      }
    }
    catch(error: unknown) {
      setError('root', {
        type: '500',
        message: 'something went wrong'
      })
    }
  }

  return (
    <>
      { formState.isSubmitSuccessful ? (
        <>
          Thanks for submitting
        </>
      ) : (
        <>
          <form onSubmit={ handleSubmit(onSubmit) }>
            <FormInput
              type="text"
              placeholder="Title"
              name="title"
              register={ register }
              options={ { 
                required: 'Title is required'
              } }
              isSubmitting={ isSubmitting }
              error={ formState.errors.title }
            />

            <FormInput
              type="text"
              placeholder="Artist"
              name="artist"
              register={ register }
              options={ { 
                required: 'Artist is required',
              } }
              isSubmitting={ isSubmitting }
              error={ formState.errors.artist }
            />

            <FormInput
              type="text"
              placeholder="Album"
              name="album"
              register={ register }
              options={ { 
                required: 'Album is required',
              } }
              isSubmitting={ isSubmitting }
              error={ formState.errors.album }
            />

            <button disabled={ isSubmitting }>Submit</button>
          </form>
        </>
      )}
    </>
    
  )
}