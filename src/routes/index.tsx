import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/layout'
import { Search } from '../components/search'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center">
          Moovies
        </h1>
        <Search />
      </div>
    </Layout>
  )
}
