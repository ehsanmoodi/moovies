import { createFileRoute, Link } from '@tanstack/react-router'
import { Layout } from '../components/layout'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold">Moovies</h1>
        <Link
          to="/discover"
          className="p-2 rounded-lg border bg-gray-200 dark:bg-gray-800 dark:text-white transition cursor-pointer"
        >
          Discover Movies
        </Link>
      </div>
    </Layout>
  )
}
