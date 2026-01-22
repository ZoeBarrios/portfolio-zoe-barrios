import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { EmailForm } from '@/shared/components/EmailForm'
import { useState } from 'react'

export const ContactMe = () => {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="flex items-center justify-center px-4 min-h-[70vh]">
      <div className="w-full max-w-lg space-y-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">¿Hablamos?</h2>

        <p className="text-muted-foreground max-w-md mx-auto">
          Si te interesa mi perfil o querés conversar sobre algún proyecto, escribime.
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg">Escribirme</Button>
          </DialogTrigger>
          <EmailForm open={open} />
        </Dialog>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="https://github.com/ZoeBarrios"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a/"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
