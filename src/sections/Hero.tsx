import { useTheme } from '@/shared/hooks/useTheme'
import { Button } from '../shared/components/Button'
import Header from '../shared/components/Header'
import MemojiLigth from '/memoji.png'
import MemojiDark from '/memoji-nigth.png'

export const Hero = () => {
  const { theme } = useTheme()
  return (
    <div className="min-h-screen flex flex-col" id="hero">
      <Header />

      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                ZOE BARRIOS
              </h1>
              <p className="text-text text-xl sm:text-2xl md:text-3xl font-semibold">
                Desarrolladora de Software
              </p>
              <p className="text-text text-base sm:text-lg md:text-xl leading-relaxed">
                Construyo aplicaciones web y móviles utilizadas en entornos reales, con foco en
                claridad, arquitectura y mantenimiento.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center sm:flex-row gap-4 lg:justify-start">
              <a href="#proyects">
                <Button text="Proyectos" />
              </a>

              <a href="/BARRIOS_CV.pdf" download target="_blank" rel="noopener noreferrer">
                {' '}
                <Button text="Descarga CV" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-secondary-own overflow-hidden flex items-center justify-center bg-secondary-own backdrop-blur-sm shadow-2xl">
              <img
                src={theme === 'dark' ? MemojiDark : MemojiLigth}
                alt="Memoji de Zoe Barrios"
                className="w-full h-full object-cover mask-x-from-70% mask-x-to-90% dark:mask-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
