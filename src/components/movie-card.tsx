import { MouseEvent, useEffect, useState } from 'react'
import placeholder from '../assets/image-not-available.png'
import { Heart } from 'lucide-react'
import { isMovieSaved, toggleSavedMovie } from '../services/db'
import { useToggleSaveMovieMutation } from '../hooks/use-toggle-save-movie'

type PostCardProps = {
  id: number
  poster_path: string
  title: string
  overview: string
}

export function MovieCard({ id, poster_path, title, overview }: PostCardProps) {
  const [saved, setSaved] = useState(false)

  const toggleSaveMovieMutation = useToggleSaveMovieMutation()

  useEffect(() => {
    const checkIfSaved = async () => {
      const isSaved = await isMovieSaved(id)
      setSaved(isSaved)
    }

    checkIfSaved()
  }, [id])

  const handleSave = async (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      const isSaved = await toggleSaveMovieMutation.mutateAsync({
        id,
        poster_path,
        title,
        overview,
      })
      setSaved(isSaved)
    } catch (error) {
      console.log('Failed to toggle save movie:', error)
    }
  }

  return (
    <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 relative">
      <button
        onClick={handleSave}
        className="absolute top-4 right-4 z-10 p-2 rounded-lg ms-auto border bg-gray-200 dark:bg-gray-800 dark:text-white transition cursor-pointer"
      >
        <Heart
          size={20}
          className={saved ? 'fill-red-400 stroke-red-400' : ''}
        />
      </button>
      <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : placeholder
          }
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>

      <div className="flex flex-col grow p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
          {overview}
        </p>
      </div>
    </div>
  )
}
