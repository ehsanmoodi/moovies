import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toggleSavedMovie } from '../services/db'

export const useToggleSaveMovieMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (movie: SavedMovie) => toggleSavedMovie(movie),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['saved-movies'] })
    },
  })
}
