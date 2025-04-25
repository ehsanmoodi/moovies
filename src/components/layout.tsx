import { PropsWithChildren } from 'react'

export function Layout({ children }: PropsWithChildren) {
  return <div className="p-4 container mx-auto">{children}</div>
}
