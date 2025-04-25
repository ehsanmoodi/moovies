import { createFileRoute } from '@tanstack/react-router'
import { Loading } from '../components/loading'
import { Error } from '../components/error'
import { discoverMoviesQueryOptions } from '../services/api'
import { useState } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Layout } from '../components/layout'
import { MovieList } from '../components/movies-list'
import { Pagination } from '../components/pagination'

export const Route = createFileRoute('/discover')({
  component: Discover,
  pendingComponent: () => <Loading />,
  errorComponent: () => <Error />,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(discoverMoviesQueryOptions({ page: 1 })),
})

function Discover() {
  const [page, setPage] = useState<number>(1)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const { data } = useSuspenseQuery(discoverMoviesQueryOptions({ page }))

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <MovieList movies={data.results} />

        <Pagination
          page={page}
          totalPages={data.total_pages}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  )
}
