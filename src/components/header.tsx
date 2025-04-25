import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <nav className="p-4 flex gap-4 text-lg max-w-xl mx-auto items-center">
      <Link
        to="/"
        className="font-bold text-2xl"
        activeOptions={{ exact: true }}
      >
        Moovies
      </Link>
      <Link
        to="/discover"
        activeProps={{
          className: 'underline underline-offset-8',
        }}
        activeOptions={{ exact: true }}
      >
        Discover
      </Link>
    </nav>
  )
}
