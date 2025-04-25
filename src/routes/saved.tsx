import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/layout'
import { useEffect, useState } from 'react'
import { MovieCard } from '../components/movie-card'
import { getSavedMovies } from '../services/db'

export const Route = createFileRoute('/saved')({
  component: Saved,
})

function Saved() {
  const [savedMovies, setSavedMovies] = useState<SavedMovie[]>([])

  useEffect(() => {
    const fetchSavedMovies = async () => {
      const movies = await getSavedMovies()
      setSavedMovies(movies)
    }
    fetchSavedMovies()
  }, [])

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {savedMovies.map((movie: SavedMovie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            poster_path={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            overview={movie.overview}
          />
        ))}
      </div>
    </Layout>
  )
}
