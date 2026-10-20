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
    <div className="space-y-5">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tecnologías</p>
      <dl className="divide-y divide-border border-y border-border">
        {techStack.map(({ category, techs }) => (
          <div key={category} className="grid grid-cols-[8.5rem_1fr] gap-4 py-4">
            <dt className="text-sm text-muted-foreground">{category}</dt>
            <dd className="text-sm leading-relaxed">{techs.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
