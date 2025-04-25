import { openDB } from 'idb'

const DB_NAME = 'MoviesDB'
const STORE_NAME = 'SavedMovies'

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id' })
    }
  },
})

export const saveMovie = async (item: SavedMovie) => {
  const db = await dbPromise
  const isExisting = await db.get(STORE_NAME, item.id)

  if (!isExisting) {
    await db.add(STORE_NAME, item)
    return true
  }

  return false
}

export const removeMovie = async (id: number) => {
  const db = await dbPromise
  const isExisting = await db.get(STORE_NAME, id)

  if (isExisting) {
    await db.delete(STORE_NAME, id)
    return true
  }

  return false
}

export const toggleSavedMovie = async (item: SavedMovie) => {
  if (await isMovieSaved(item.id)) {
    await removeMovie(item.id)
    return false
  } else {
    await saveMovie(item)
    return true
  }
}

export const isMovieSaved = async (id: number) => {
  const db = await dbPromise
  const movie = await db.get(STORE_NAME, id)
  return !!movie
}

export const getSavedMovies = async (): Promise<SavedMovie[]> => {
  const db = await dbPromise
  return await db.getAll(STORE_NAME)
}
