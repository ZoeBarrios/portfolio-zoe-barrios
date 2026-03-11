import { TechList } from '../shared/components/TechList'

export const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-16">Sobre mí</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-10">
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
              Soy Técnica Universitaria en Programación, egresada de la UTN, y estudiante de
              Ingeniería en Sistemas. Trabajo como desarrolladora en sistemas de gestión web y
              mobile, participando tanto en frontend como en backend. Me enfoco en construir
              soluciones claras, mantenibles y pensadas para entornos reales de uso.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-2 border-t border-border">
              <div className="flex flex-col gap-2 pt-6">
                <span className="text-4xl lg:text-5xl font-bold">2+</span>
                <span className="text-sm text-muted-foreground leading-tight">
                  años de experiencia
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-6">
                <span className="text-4xl lg:text-5xl font-bold">10+</span>
                <span className="text-sm text-muted-foreground leading-tight">
                  proyectos entregados
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-6">
                <span className="text-4xl lg:text-5xl font-bold">2</span>
                <span className="text-sm text-muted-foreground leading-tight">roles activos</span>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <TechList />
          </div>
        </div>
      </div>
    </section>
  )
}
