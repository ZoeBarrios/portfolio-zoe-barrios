export const Footer = () => {
  return (
    <footer className="w-full bg-secondary-own py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-on-accent">© {new Date().getFullYear()} Zoe Barrios</p>

        <p className="text-xs text-on-accent">Construido con React, Tailwind y TypeScript</p>
      </div>
    </footer>
  )
}
