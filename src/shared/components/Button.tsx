import type { ReactNode } from 'react'

const VARIANTS = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/85 shadow-sm',
  outline: 'border border-foreground/20 text-foreground hover:bg-foreground/5',
}

export const LinkButton = ({
  href,
  children,
  variant = 'primary',
  download,
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof VARIANTS
  download?: boolean
}) => {
  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 h-11 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${VARIANTS[variant]}`}
    >
      {children}
    </a>
  )
}
