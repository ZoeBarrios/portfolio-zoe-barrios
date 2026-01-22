import { useTheme } from '../hooks/useTheme'

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="w-full bg-main/80 backdrop-blur-md text-text px-6 py-4 flex justify-between items-center fixed top-0 z-50 border-b border-text/10">
      <div className="flex items-center">
        <a href="#hero">
          <span className="text-2xl font-bold text-secondary-own">ZB</span>
        </a>
      </div>

      <nav className="hidden md:block">
        <ul className="flex flex-row gap-8 lg:gap-10">
          <li className="cursor-pointer hover:text-secondary-own transition-colors duration-200 font-medium">
            <a href="#about">Sobre mí</a>
          </li>
          <li className="cursor-pointer hover:text-secondary-own transition-colors duration-200 font-medium">
            <a href="#experience">Experiencia</a>
          </li>
          <li className="cursor-pointer hover:text-secondary-own transition-colors duration-200 font-medium">
            <a href="#proyects">Proyectos</a>
          </li>
          <li className="cursor-pointer hover:text-secondary-own transition-colors duration-200 font-medium">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleTheme}
        style={{ cursor: 'pointer' }}
        className="relative w-14 h-7 bg-text/20 hover:bg-text/30 rounded-full p-1 transition-all duration-300 ease-in-out"
        aria-label="Toggle theme"
      >
        <div
          className={`absolute top-1 w-5 h-5 bg-secondary-own rounded-full shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
            theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
          }`}
        >
          <span className="text-xs">{theme === 'light' ? '☀️' : '🌙'}</span>
        </div>
      </button>
    </header>
  )
}

export default Header
