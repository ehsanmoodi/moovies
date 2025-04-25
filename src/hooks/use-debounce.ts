import { useCallback, useEffect, useRef } from 'react'

export function useDebounce<T extends (...args: any[]) => void>(delay: number) {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null)

  const debounce = useCallback(
    (callback: T): ((...args: Parameters<T>) => void) => {
      return (...args: Parameters<T>) => {
        if (timeoutId.current) {
          clearTimeout(timeoutId.current)
        }

        timeoutId.current = setTimeout(() => {
          callback(...args)
        }, delay)
      }
    },
    [delay]
  )

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }
    }
  }, [])

  return debounce
}
