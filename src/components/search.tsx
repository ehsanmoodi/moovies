import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { searchMoviesQueryOptions } from '../services/api'
import { useDebounce } from '../hooks/use-debounce'
import { Loading } from './loading'
import { NoData } from './no-data'
import { MovieList } from './movies-list'
import { Pagination } from './pagination'

export function Search() {
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState<string>('')
  const debounce = useDebounce(500)

  const handleSearch = debounce((e) => {
    setPage(1)
    setQuery(e.target.value)
  })

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const { data, isLoading } = useQuery(
    searchMoviesQueryOptions({ page, query })
  )

  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Search for movies..."
        onChange={handleSearch}
        className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      />

      {isLoading && <Loading />}

      {!isLoading && data && data.total_results === 0 && query.length !== 0 && (
        <NoData />
      )}

      {!isLoading && data && !!data.total_results && (
        <>
          <MovieList movies={data.results} />
          <Pagination
            page={page}
            totalPages={data.total_pages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  )
}
