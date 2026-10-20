export const SectionHeader = ({
  index,
  title,
  description,
}: {
  index: string
  title: string
  description?: string
}) => {
  return (
    <div className="mb-14 space-y-4">
      <p className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>{index}</span>
        <span className="h-px w-8 bg-brand" />
      </p>
      <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight">{title}</h2>
      {description && (
        <p className="max-w-xl text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  )
}
