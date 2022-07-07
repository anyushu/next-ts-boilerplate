import type { InputHTMLAttributes, LabelHTMLAttributes } from 'react'

type InputGroupProps = {
  title: string
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>
  inputPorps?: InputHTMLAttributes<HTMLInputElement>
}

export const InputGroup = ({ title, labelProps, inputPorps }: InputGroupProps) => {
  return (
    <div>
      <label {...labelProps} className="mb-2 block font-medium text-gray-700">
        {title}
      </label>
      <input
        {...inputPorps}
        className="block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  )
}
