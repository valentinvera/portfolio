import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

interface EmailParams {
  to_name: string
  from_name: string
  message: string
  reply_to: string
  [key: string]: unknown
}

export const useEmail = () => {
  const sendEmail = async (params: EmailParams) => {
    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)

      return { success: true, message: "Correo enviado con éxito", data: response }
    } catch (error) {
      console.error("Error al enviar el correo:", error)
      return { success: false, message: "Error al enviar el correo" }
    }
  }

  return { sendEmail }
}
