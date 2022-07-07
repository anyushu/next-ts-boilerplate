import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  label: string
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
}

export const Button = ({ label, buttonProps }: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className="rounded bg-blue-500 py-2 px-4 font-bold text-white transition duration-300 ease-in-out hover:bg-blue-600"
    >
      {label}
    </button>
  )
}
