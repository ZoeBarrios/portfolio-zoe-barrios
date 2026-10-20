import { SectionHeader } from '@/shared/components/SectionHeader'
import { TechList } from '../shared/components/TechList'

const STATS = [
  { value: '2+', label: 'años de experiencia' },
  { value: '10+', label: 'proyectos entregados' },
  { value: '2', label: 'roles actuales' },
]

export const AboutMe = () => {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="01" title="Sobre mí" />

        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-12">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
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

            <dl className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <dt className="order-2 text-sm leading-tight text-muted-foreground">{label}</dt>
                  <dd className="order-1 font-display font-semibold text-5xl">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <TechList />
        </div>
      </div>
    </section>
  )
}
