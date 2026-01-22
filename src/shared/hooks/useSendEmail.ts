import { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE = import.meta.env.VITE_SERVICE
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const SECRET = import.meta.env.VITE_SECRET

export const useSendEmail = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = async (form: HTMLFormElement) => {
    setLoading(true)
    setError(false)
    setSuccess(false)

    try {
      await emailjs.sendForm(SERVICE, TEMPLATE_ID, form, SECRET)
      setSuccess(true)
      form.reset()
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setError(false)
    setSuccess(false)
  }

  return {
    sendEmail,
    loading,
    success,
    error,
    reset,
  }
}
