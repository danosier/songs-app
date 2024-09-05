import { FieldError, FieldName, RegisterOptions, UseFormRegister } from 'react-hook-form'

import InputError from './input-error'
import { POST_Song } from '@/app/lib/song-schema'

export interface FormInputProps {
  type: 'text' | 'textarea'
  placeholder: string
  name: keyof POST_Song
  isSubmitting: boolean
  error?: FieldError
  register: UseFormRegister<POST_Song>
  options: RegisterOptions<POST_Song, FieldName<POST_Song>>
}

export default function FormInput({
  type,
  placeholder,
  name,
  isSubmitting,
  error,
  register,
  options
}: FormInputProps) {
  const inputClasses = 'block w-full bg-neutral-700/40 text-white/80 placeholder:text-neutral-700 rounded-md p-2 my-5 focus:border-2 focus:border-blue-500 focus-visible:outline-none'
  const inputErrorClasses = 'border border-red-500/50 focus:border-2 focus:border-red-500'

  if(type === 'text') {
    return (
      <>
        <input
          type="text"
          className={ `
            ${ inputClasses }
            ${ isSubmitting ? 'cursor-not-allowed text-blakc' : ''}
            ${ error ? inputErrorClasses : ''}
          ` } 
          disabled={ isSubmitting }
          placeholder={ placeholder }
          { ...register(name, options ) }
        />
        <InputError error={ error }/>
      </>
    )
  }
  else {
    return null
  }
}