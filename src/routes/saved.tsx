import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/layout'
import { MovieCard } from '../components/movie-card'
import { fetchSavedMoviesQueryOptions } from '../services/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { NoData } from '../components/no-data'

export const Route = createFileRoute('/saved')({
  component: Saved,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(fetchSavedMoviesQueryOptions()),
})

function Saved() {
  const { data } = useSuspenseQuery(fetchSavedMoviesQueryOptions())

  if (data.length === 0) return <NoData />

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((movie: SavedMovie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </div>
    </Layout>
  )
}
