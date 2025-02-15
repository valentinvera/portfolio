import { SkilsData as icons } from "@/data/skills"
import { useTranslation } from "react-i18next"
import IconWall from "../icon-wall"

const Skills = () => {
  const { t } = useTranslation()

  return (
    <section className="pt-20 pb-10">
      <div>
        <h2 className="font-medium ml:text-3xl text-2xl">{t("main.skills_title")}</h2>
        <IconWall items={icons} size="clamp(8rem, 1rem + 20vmin, 25rem)" bgColor="" />
      </div>
    </section>
  )
}

export default Skills
