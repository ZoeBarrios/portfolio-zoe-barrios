import { Badge } from '@/components/ui/badge'

const techStack = [
  {
    category: 'Frontend y mobile',
    techs: ['Angular', 'PrimeNG', 'React', 'React Native', 'Tailwind CSS'],
  },
  { category: 'Backend', techs: ['Node.js', 'NestJS', 'Express', 'Socket.io', 'APIs REST'] },
  { category: 'Lenguajes', techs: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Bases de datos', techs: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB'] },
  { category: 'Herramientas', techs: ['Git', 'Docker', 'Nginx', 'PM2', 'NSSM', 'Google Cloud'] },
]

export const TechList = () => {
  return (
    <div className="space-y-4">
      <p className="text-md text-text">Tecnologías con las que trabajo habitualmente</p>

      <div className="flex flex-col gap-4">
        {techStack.map(({ category, techs }) => (
          <div key={category} className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
