import { MovieCard } from './movie-card'

interface MovieListProps {
  movies: Movie[]
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          title={movie.title}
          poster_path={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          overview={movie.overview}
        />
      ))}
    </div>
  )
}
