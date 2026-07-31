import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEmail } from "@/hooks/useEmail"
import { Icons } from "@/icons"
import { ContactFormValues, createContactFormSchema } from "@/schemas/contact-form"

const ContactForm = () => {
  const { sendEmail } = useEmail()
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const contactFormSchema = createContactFormSchema(t)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true)
    setIsSuccess(false)

    const emailParams = {
      to_name: "Destinatario",
      from_name: values.name,
      message: values.message,
      reply_to: values.email,
    }

    const result = await sendEmail(emailParams)
    if (result.success) {
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        form.reset()
      }, 1000)
    } else {
      alert("Hubo un error al enviar el correo.")
    }

    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-0.5">
                <FormLabel className="">{t("main.contact_me.form.labels.name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("main.contact_me.form.placeholders.name")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-0.5">
                <FormLabel>{t("main.contact_me.form.labels.email")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("main.contact_me.form.placeholders.email")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-0.5">
              <FormLabel>{t("main.contact_me.form.labels.message")}</FormLabel>
              <FormControl>
                <Textarea
                  className="h-32 resize-none"
                  placeholder={t("main.contact_me.form.placeholders.message")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="group flex cursor-pointer items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.loaderCircle size={16} className="size-4 animate-spin" />
          ) : isSuccess ? (
            <Icons.check size={16} className="size-4" />
          ) : (
            <>
              <span>{t("main.contact_me.form.call_to_action")}</span>
              <Icons.send
                size={16}
                className="size-4 transition-all duration-200 group-hover:translate-x-0.5"
              />
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
