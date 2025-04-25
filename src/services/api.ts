import { queryOptions } from '@tanstack/react-query'
import axios from 'axios'
import dayjs from 'dayjs'
import { getSavedMovies } from './db'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
})

export const discoverMovies = async ({ page }: { page: number }) => {
  const params = {
    page,
    'primary_release_date.gte': dayjs()
      .subtract(1, 'month')
      .format('YYYY-MM-DD'),
    'primary_release_date.lte': dayjs().format('YYYY-MM-DD'),
  }

  const response = await axiosInstance.get<MoviesAPIResponse>(
    '/discover/movie',
    {
      params,
    }
  )

  return response.data
}

export const discoverMoviesQueryOptions = ({ page }: { page: number }) =>
  queryOptions({
    queryKey: ['discover', page],
    queryFn: () => discoverMovies({ page }),
  })

export const searchMovies = async ({
  page,
  query,
}: {
  page: number
  query: string
}) => {
  const params = {
    page,
    query,
  }

  const response = await axiosInstance.get<MoviesAPIResponse>('/search/movie', {
    params,
  })

  return response.data
}

export const searchMoviesQueryOptions = ({
  page,
  query,
}: {
  page: number
  query: string
}) =>
  queryOptions({
    queryKey: ['search', page, query],
    queryFn: () => searchMovies({ page, query }),
  })

export const fetchSavedMoviesQueryOptions = () =>
  queryOptions({
    queryKey: ['saved-movies'],
    queryFn: () => getSavedMovies(),
  })
