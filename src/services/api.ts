import { queryOptions } from '@tanstack/react-query'
import axios from 'axios'
import dayjs from 'dayjs'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
})

export const fetchMovies = async ({
  page,
  query,
}: {
  page: number
  query?: string
}) => {
  const hasQuery = (query || '').length > 0

  const params = {
    page,
    ...(hasQuery
      ? { query }
      : {
          'primary_release_date.gte': dayjs()
            .subtract(1, 'month')
            .format('YYYY-MM-DD'),
          'primary_release_date.lte': dayjs().format('YYYY-MM-DD'),
        }),
  }

  const response = await axiosInstance.get<MoviesAPIResponse>(
    hasQuery ? '/search/movie' : '/discover/movie',
    {
      params,
    }
  )

  return response.data
}

export const moviesQueryOptions = ({
  page,
  query,
}: {
  page: number
  query?: string
}) =>
  queryOptions({
    queryKey: ['discover', page, query],
    queryFn: () => fetchMovies({ page, query }),
  })
