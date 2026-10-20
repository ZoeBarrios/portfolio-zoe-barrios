import { TechList } from '../shared/components/TechList'

export const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-title text-3xl lg:text-4xl font-bold tracking-tight mb-16">Sobre mí</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-10">
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-text">
              <p>
                Desarrolladora full stack con más de dos años de experiencia en el desarrollo y
                mantenimiento de sistemas de gestión en entornos productivos. Técnica Universitaria
                en Programación y estudiante de Ingeniería en Sistemas en la UTN.
              </p>
              <p>
                Trabajo en desarrollo web y mobile con Angular, React y React Native, backend con
                Node.js y NestJS, bases de datos relacionales e integración con servicios externos,
                incluyendo facturación electrónica con ARCA. Actualmente profundizo en arquitectura
                de software, backend y prácticas DevOps.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-2 border-t border-border">
              <div className="flex flex-col gap-2 pt-6">
                <span className="text-4xl lg:text-5xl font-bold text-title">2+</span>
                <span className="text-sm text-muted-foreground leading-tight">
                  años de experiencia
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-6">
                <span className="text-4xl lg:text-5xl font-bold text-title">10+</span>
                <span className="text-sm text-muted-foreground leading-tight">
                  proyectos entregados
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-6">
                <span className="text-4xl lg:text-5xl font-bold text-title">9,8</span>
                <span className="text-sm text-muted-foreground leading-tight">
                  promedio en la Tecnicatura
                </span>
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
