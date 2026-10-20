import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ListOfCourses } from '@/shared/components/ListOfCourses'

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

const RoleCard = ({ role }: { role: Role }) => (
  <Card className="border-l-4 border-l-secondary-own transition-all hover:shadow-md">
    <CardHeader className="gap-1">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <CardTitle className="text-lg">{role.title}</CardTitle>
        <span className="text-xs font-semibold uppercase tracking-wide text-title whitespace-nowrap">
          {role.period}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{role.place}</p>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5 space-y-1.5 text-sm text-text marker:text-secondary-own">
        {role.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-4 gap-16 py-20"
    >
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="text-center space-y-2">
          <h3 className="text-title text-3xl lg:text-4xl font-bold tracking-tight">
            Experiencia Profesional
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Desarrollo de sistemas en producción para empresas y para la universidad.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {WORK.map((role) => (
            <RoleCard key={role.title} role={role} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-6">
        <h4 className="text-2xl font-semibold tracking-tight text-usual-text">
          Experiencia docente
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEACHING.map((role) => (
            <RoleCard key={role.title} role={role} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-semibold tracking-tight text-usual-text">Formación</h4>
          {EDUCATION.map((e) => (
            <div key={e.title} className="border-l-4 border-secondary-own pl-4">
              <p className="font-semibold text-usual-text">{e.title}</p>
              <p className="text-sm text-muted-foreground">
                {e.place} · {e.period}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-semibold tracking-tight text-usual-text">
            Cursos y certificaciones
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-text marker:text-secondary-own">
            {COURSES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-6xl">
        <ListOfCourses />
      </div>
    </section>
  )
}
