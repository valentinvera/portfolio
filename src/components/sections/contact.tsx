import { useTranslation } from "react-i18next"
import ContactForm from "../contact-form"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section>
      <div>
        <h2 className="mb-2 ml:mb-4 font-medium ml:text-3xl text-2xl">
          {t("main.contact_me.title")}
        </h2>
        <p className="mb-8 ml:text-lg text-muted-foreground">{t("main.contact_me.description")}</p>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
