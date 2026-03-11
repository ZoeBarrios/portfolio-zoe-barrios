import { Badge } from '@/components/ui/badge'

const techStack = [
  { category: 'Frontend', techs: ['React', 'React Native', 'Tailwind', 'Bootstrap'] },
  { category: 'Backend', techs: ['Node.js', 'NestJS', 'Express'] },
  { category: 'Lenguajes', techs: ['TypeScript', 'JavaScript'] },
  { category: 'Bases de datos', techs: ['MySQL', 'MongoDB'] },
  { category: 'DevOps / Tools', techs: ['Git', 'Docker', 'Nginx'] },
]

export const TechList = () => {
  return (
    <div className="space-y-3">
      <p className="text-md text-muted-foreground">Tecnologías con las que trabajo habitualmente</p>

      <div className="flex flex-wrap gap-2">
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
