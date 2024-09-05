import { FieldError } from 'react-hook-form'

export default function InputError({ error }: { error?: FieldError }) {
  return (
    <p className={ `
      mt-2 ml-5 text-sm text-red-500/90
      ${ error ? '' : 'hidden'}
    ` }>
      <span className="flex font-medium items-center">
        { error?.message }
      </span>
    </p>
  )
}