import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/layout'
import { useState } from 'react'
import { moviesQueryOptions } from '../services/api'
import { Button } from '../components/button'
import { useSuspenseQuery } from '@tanstack/react-query'
import { MovieCard } from '../components/movie-card'
import { Loading } from '../components/loading'
import { Error } from '../components/error'

export const Route = createFileRoute('/discover')({
  component: Discover,
  pendingComponent: () => <Loading />,
  errorComponent: () => <Error />,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(moviesQueryOptions({ page: 1, query: '' })),
})

function Discover() {
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState<string>('')

  const { data } = useSuspenseQuery(moviesQueryOptions({ page, query }))

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.results.map((movie: Movie) => (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              poster_path={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              overview={movie.overview}
            />
          ))}
        </div>

        <div className="flex gap-3 justify-between">
          <Button
            isDisabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev Page
          </Button>
          <Button
            isDisabled={page === data.total_pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next Page
          </Button>
        </div>
      </div>
    </Layout>
  )
}
