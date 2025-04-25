import { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
  isLoading?: boolean
  isDisabled?: boolean
  onClick(): void
}>

export function Button({
  children,
  onClick,
  isLoading,
  isDisabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`px-5 py-2 bg-blue-500 rounded cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:dark:bg-gray-600 ${isLoading ? 'animate-pulse' : ''}`}
    >
      {children}
    </button>
  )
}
