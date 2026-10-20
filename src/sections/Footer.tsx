export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Zoe Barrios</p>
        <p>Construido con React, Tailwind y TypeScript</p>
      </div>
    </footer>
  )
}
