import { SkilsData as icons } from "@/data/skills"
import { useTranslation } from "react-i18next"
import IconWall from "../icon-wall"

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <section className="ml:scroll-mt-[-500px] scroll-mt-[-760px] pb-40" id="contact">
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
      <IconWall items={icons} size="clamp(8rem, 1rem + 20vmin, 25rem)" bgColor="" />
    </section>
  )
}

export default AboutMe
