import { useTranslation } from "react-i18next"

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <section className="pb-20">
      <h2 className="mb-2 ml:mb-4 font-medium ml:text-3xl text-2xl">{t("main.about_me.title")}</h2>
      <div className="flex flex-col gap-2">
        <p
          className="ml:text-lg text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: t("main.about_me.paragraph") }}
        />
        <p
          className="ml:text-lg text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: t("main.about_me.sub_paragraph") }}
        />
      </div>
    </section>
  )
}

export default AboutMe
