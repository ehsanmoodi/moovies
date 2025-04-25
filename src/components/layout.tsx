import { PropsWithChildren } from 'react'

export function Layout({ children }: PropsWithChildren) {
  return <div className="p-4 max-w-xl mx-auto">{children}</div>
}
