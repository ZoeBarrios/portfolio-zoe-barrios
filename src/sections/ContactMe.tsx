import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { EmailForm } from '@/shared/components/EmailForm'
import { useState } from 'react'

const LINKS = [
  { href: 'mailto:zoebarrios@outlook.com.ar', label: 'zoebarrios@outlook.com.ar' },
  { href: 'https://github.com/ZoeBarrios', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a/', label: 'LinkedIn' },
]

export const ContactMe = () => {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl border-t border-border pt-24 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          04 · Contacto
        </p>
        <h2 className="font-display font-semibold text-5xl tracking-tight sm:text-6xl">
          ¿Hablamos?
        </h2>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted-foreground">
          Si te interesa mi perfil o querés conversar sobre algún proyecto, escribime.
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="mt-10 h-11 cursor-pointer rounded-full px-8">
              Escribirme
            </Button>
          </DialogTrigger>
          <EmailForm open={open} />
        </Dialog>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
