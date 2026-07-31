import { useTranslation } from "react-i18next"
import { SkillsData as icons } from "@/data/skills"
import IconWall from "../icon-wall"

const Skills = () => {
  const { t } = useTranslation()

  return (
    <section className="pb-20">
      <h2 className="font-medium ml:text-3xl text-2xl">{t("main.skills.title")}</h2>
      <IconWall
        items={icons}
        size="clamp(6.5rem, 5.75rem + 2vw, 8rem)"
        bgColor=""
        className="ml:mt-4 mt-2"
      />
    </section>
  )
}

export default Skills
