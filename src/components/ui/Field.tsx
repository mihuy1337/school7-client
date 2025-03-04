import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputFieldProps {
	id: string
	placeholder: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
  error?: string
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(({id, type, placeholder, error, ...rest}: InputFieldProps, ref) => {
  return (
    <div>
      <input
        ref={ref}
        type={type}
        id={id}
        placeholder={placeholder}
        className={twMerge("focus:outline-none border-2 border-transparent focus:border-accent focus:ring-accent transition-all duration-300 p-4 w-full bg-black-secondary text-hint font-medium text-white-main text-base rounded-xl",
          error && "border-2-main focus:border-2-main transition-all duration-300"
        )}
        {...rest}
      />
      {error && <span className="text-xs text-2-main">{error}</span>}
    </div>
  )
})

Field.displayName = 'field'