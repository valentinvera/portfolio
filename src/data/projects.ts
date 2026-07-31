import { useTranslation } from "react-i18next"
import { Projects } from "@/types/projects"

export const ProjectsData = (): Projects[] => {
  const { t } = useTranslation()

  return [
    {
      imgUrl: "https://motiq.app/og-image.png",
      title: t("main.projects.items.Motiq.title"),
      description: t("main.projects.items.Motiq.description"),
      tags: [
        "TypeScript",
        "React",
        "Hono",
        "DrizzleORM",
        "PostgreSQL",
        "Redis",
        "Uptash",
        "Shadcn/ui",
        "Tailwind CSS",
      ],
      url: "https://motiq.app",
      repositoryUrl: "https://github.com/valentinvera/motiq",
    },
  ]
}
