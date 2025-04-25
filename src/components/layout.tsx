import { PropsWithChildren } from 'react'

type LayoutProps = PropsWithChildren

export function Layout({ children }: LayoutProps) {
  return <div className="p-4 max-w-xl mx-auto">{children}</div>
}
