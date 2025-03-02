import { forwardRef } from "react";

interface InputFieldProps {
	id: string
	placeholder: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(({id, type, placeholder, ...rest}: InputFieldProps, ref) => {
  return (
    <>
      <input
        ref={ref}
        type={type}
        id={id}
        placeholder={placeholder}
        className="focus:outline-none border-2 border-transparent focus:border-accent focus:ring-accent transition-all duration-300 p-4 w-full bg-black-secondary text-hint font-medium text-white-main text-base rounded-xl"
        {...rest}
      />
    </>
  )
})

Field.displayName = 'field'