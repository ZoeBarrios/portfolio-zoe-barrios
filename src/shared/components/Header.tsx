import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const LINKS = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#proyects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
]

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight">
          Zoe Barrios
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm text-muted-foreground">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={toggleTheme}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  )
}

export default Header
