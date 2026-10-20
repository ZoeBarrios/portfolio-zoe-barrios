import { useTheme } from '@/shared/hooks/useTheme'
import { LinkButton } from '../shared/components/Button'
import Header from '../shared/components/Header'
import MemojiLigth from '/memoji.png'
import MemojiDark from '/memoji-nigth.png'

export const Hero = () => {
  const { theme } = useTheme()
  return (
    <section className="flex min-h-screen flex-col" id="hero">
      <Header />

      <div className="flex flex-1 items-center px-6 pt-28 pb-16">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Desarrolladora Full Stack
            </p>
            <h1 className="font-display font-semibold text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
              Zoe Barrios
            </h1>
            <p className="mx-auto max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
              Desarrollo y mantengo sistemas de gestión web y mobile en entornos productivos, con
              Angular, React, React Native, Node.js y NestJS.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <LinkButton href="#proyects">Ver proyectos</LinkButton>
              <LinkButton href="/BARRIOS_CV.pdf" variant="outline" download>
                Descargar CV
              </LinkButton>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="h-56 w-56 overflow-hidden rounded-full bg-brand ring-2 ring-brand/40 ring-offset-8 ring-offset-background sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <img
                src={theme === 'dark' ? MemojiDark : MemojiLigth}
                alt="Memoji de Zoe Barrios"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
