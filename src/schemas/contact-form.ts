import { TFunction } from "i18next"
import * as z from "zod"

export const createContactFormSchema = (t: TFunction) =>
  z.object({
    name: z.string().min(2, {
      message: t("main.contact_me.form.errors.name_min"),
    }),
    email: z.string().email({
      message: t("main.contact_me.form.errors.email_invalid"),
    }),
    message: z.string().min(10, {
      message: t("main.contact_me.form.errors.message_min"),
    }),
  })

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>
