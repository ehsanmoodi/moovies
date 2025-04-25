import { Link } from '@tanstack/react-router'
import { ToggleTheme } from './toggle-theme'

export function Header() {
  return (
    <nav className="p-4 flex gap-4 text-lg container mx-auto items-center">
      <Link
        to="/"
        activeProps={{
          className: 'underline underline-offset-8',
        }}
        activeOptions={{ exact: true }}
      >
        Home
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
      <ToggleTheme />
    </nav>
  )
}
