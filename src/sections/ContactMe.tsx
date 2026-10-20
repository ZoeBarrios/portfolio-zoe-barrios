import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { EmailForm } from '@/shared/components/EmailForm'
import { useState } from 'react'

export const ContactMe = () => {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="flex items-center justify-center px-4 min-h-[70vh]">
      <div className="w-full max-w-lg space-y-6 text-center">
        <h2 className="text-title text-3xl lg:text-4xl font-bold tracking-tight">¿Hablamos?</h2>

        <p className="text-muted-foreground max-w-md mx-auto">
          Si te interesa mi perfil o querés conversar sobre algún proyecto, escribime.
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-secondary-own text-on-accent hover:bg-secondary-own/85">
              Escribirme
            </Button>
          </DialogTrigger>
          <EmailForm open={open} />
        </Dialog>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href="mailto:zoebarrios@outlook.com.ar"
            className="text-sm text-muted-foreground hover:text-title transition"
          >
            zoebarrios@outlook.com.ar
          </a>

          <a
            href="https://github.com/ZoeBarrios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-title transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-title transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
