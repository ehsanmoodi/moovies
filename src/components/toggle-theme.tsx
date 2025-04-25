import { Sun, Moon } from 'lucide-react' // Install lucide-react for icons
import { useTheme } from '../context/theme-context'

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg ms-auto border bg-gray-200 dark:bg-gray-800 dark:text-white transition cursor-pointer"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
