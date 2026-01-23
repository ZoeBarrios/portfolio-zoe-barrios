import { Badge } from '@/components/ui/badge'

const techStack = [
  'React',
  'React Native',
  'Tailwind',
  'Bootstrap',
  'Node.js',
  'NestJS',
  'Express',
  'TypeScript',
  'JavaScript',
  'MySQL',
  'MongoDB',
  'Git',
  'Docker',
  'Nginx',
  'SQL',
]

export const TechList = () => {
  return (
    <div className="space-y-3">
      <p className="text-md text-muted-foreground">Tecnologías con las que trabajo habitualmente</p>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-sm px-3 py-1 opacity-80">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}
