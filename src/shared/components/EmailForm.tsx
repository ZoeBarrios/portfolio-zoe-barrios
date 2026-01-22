import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useSendEmail } from '../hooks/useSendEmail'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'

type Errors = {
  name?: string
  email?: string
  message?: string
}

export const EmailForm = ({ open }: { open: boolean }) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<Errors>({})

  const { sendEmail, loading, success, error, reset } = useSendEmail()

  useEffect(() => {
    if (open) {
      formRef.current?.reset()
      setErrors({})
      reset()
    }
  }, [open])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const newErrors: Errors = {}

    if (!name) newErrors.name = 'Ingresá tu nombre'
    if (!email) newErrors.email = 'Ingresá un email'
    if (!message) newErrors.message = 'Escribí un mensaje'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    sendEmail(form)
  }

  return (
    <DialogContent className="max-w-md w-xl space-y-6">
      <DialogHeader>
        <DialogTitle>Escribime un mensaje</DialogTitle>
        <DialogDescription>
          Si te interesa trabajar conmigo o tenés alguna consulta, escribime.
        </DialogDescription>
      </DialogHeader>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Input name="name" placeholder="Nombre" />
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

        <Input name="email" type="email" placeholder="Email" />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}

        <Textarea name="message" placeholder="Mensaje" rows={4} />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Enviando…' : 'Enviar mensaje'}
        </Button>

        {success && (
          <p className="text-sm text-green-600 text-center">
            Gracias por tu mensaje. Te respondo pronto.
          </p>
        )}

        {error && (
          <p className="text-sm text-red-600 text-center">Ocurrió un error. Intentá nuevamente.</p>
        )}
      </form>
    </DialogContent>
  )
}
