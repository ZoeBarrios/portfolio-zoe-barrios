import { SectionHeader } from '@/shared/components/SectionHeader'

type Role = {
  title: string
  place: string
  period: string
  items: string[]
}

const WORK: Role[] = [
  {
    title: 'Desarrolladora de Software',
    place: 'SETIC, UTN Facultad Regional San Nicolás · Jefa de Trabajos Prácticos',
    period: 'may. 2026 – actualidad',
    items: [
      'Desarrollo del nuevo sitio web institucional de la facultad, con un chatbot de atención de consultas.',
      'Desarrollo y mantenimiento de sistemas internos para estudiantes, docentes y personal administrativo.',
      'Frontend con Angular y PrimeNG; backend con Node.js y MySQL.',
      'Digitalización de procesos académicos y administrativos.',
    ],
  },
  {
    title: 'Desarrolladora Full Stack',
    place: 'Leandro Dapello · Presencial',
    period: 'mar. 2024 – actualidad',
    items: [
      'Sistemas de gestión a medida para distintos clientes, con módulos de facturación electrónica.',
      'Backend con Node.js, Express y NestJS; APIs REST consumidas por apps web en React y Android en React Native.',
      'Sistema de seguimiento por geolocalización desde dispositivos móviles, resolviendo problemas de latencia y conectividad.',
      'Modelado y consultas en MySQL y SQL Server; despliegue de servicios en producción con PM2 y NSSM.',
    ],
  },
]

const TEACHING: Role[] = [
  {
    title: 'Docente tutora, Curso de Ingreso',
    place: 'Lógica y Algoritmos · TUP, UTN San Nicolás',
    period: '2024 – 2026',
    items: [
      'Dictado de lógica de programación y algoritmos a ingresantes, con diagramas de flujo en Structorizer.',
      'Atención de consultas, corrección y evaluación de trabajos prácticos.',
    ],
  },
  {
    title: 'Tutora de React',
    place: 'Argentina Programa · Remoto',
    period: 'nov. – dic. 2023',
    items: [
      'Acompañamiento en el aprendizaje de React: dudas técnicas y seguimiento de proyectos.',
    ],
  },
  {
    title: 'Tutora de Ofimática (beca)',
    place: 'UTN San Nicolás',
    period: '2022 y 2023',
    items: ['Asistencia en clases y apoyo en el uso de herramientas de Microsoft Office.'],
  },
]

const EDUCATION = [
  { title: 'Ingeniería en Sistemas', place: 'UTN San Nicolás', period: '2024 – actualidad' },
  {
    title: 'Técnica Universitaria en Programación',
    place: 'UTN San Nicolás · Promedio 9,8',
    period: '2022 – 2024',
  },
]

const COURSES = [
  'Nest: desarrollo backend escalable con Node · Udemy (DevTalles), 2025',
  'React Native CLI: aplicaciones nativas para iOS y Android · Udemy (DevTalles), 2025',
  'Docker: guía práctica de uso para desarrolladores · Udemy (DevTalles), 2026',
  'Formación SQL con MySQL · Alura Latam (Oracle Next Education), 2023',
  'Inglés B1.1 (MCER) · Centro Universitario de Idiomas (CUI-UBA), 2023',
]

const Timeline = ({ roles }: { roles: Role[] }) => (
  <ol className="border-t border-border">
    {roles.map((role) => (
      <li
        key={role.title}
        className="grid grid-cols-1 gap-2 border-b border-border py-8 md:grid-cols-[11rem_1fr] md:gap-10"
      >
        <p className="text-sm text-muted-foreground tabular-nums md:pt-1">{role.period}</p>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-medium">{role.title}</h3>
            <p className="text-sm text-muted-foreground">{role.place}</p>
          </div>
          <ul className="space-y-2 text-[15px] leading-relaxed text-foreground/80">
            {role.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ol>
)

const SubTitle = ({ children }: { children: string }) => (
  <h3 className="mb-6 font-display font-semibold text-3xl tracking-tight">{children}</h3>
)

export const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-24">
        <div>
          <SectionHeader
            index="02"
            title="Experiencia"
            description="Desarrollo de sistemas en producción para empresas y para la universidad."
          />
          <Timeline roles={WORK} />
        </div>

        <div>
          <SubTitle>Docencia</SubTitle>
          <Timeline roles={TEACHING} />
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <SubTitle>Formación</SubTitle>
            <ul className="divide-y divide-border border-y border-border">
              {EDUCATION.map((e) => (
                <li key={e.title} className="space-y-1 py-5">
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {e.place} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SubTitle>Cursos y certificaciones</SubTitle>
            <ul className="divide-y divide-border border-y border-border">
              {COURSES.map((c) => {
                const [name, source] = c.split(' · ')
                return (
                  <li key={c} className="space-y-1 py-4">
                    <p className="text-[15px]">{name}</p>
                    <p className="text-sm text-muted-foreground">{source}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
