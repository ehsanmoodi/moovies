import { Layout } from './layout'

export function Loading() {
  return (
    <Layout>
      <span className="relative flex size-5 mx-auto">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex size-5 rounded-full bg-sky-500"></span>
      </span>
    </Layout>
  )
}
