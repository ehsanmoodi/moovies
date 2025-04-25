import placeholder from '../assets/image-not-available.png'

type PostCardProps = {
  image: string
  title: string
  overview: string
}

export function MovieCard({ image, title, overview }: PostCardProps) {
  return (
    <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
      <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={image || placeholder}
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
