import { slug } from "@/lib/utils/slug"
import { Projects } from "@/types/projects"
import { useTranslation } from "react-i18next"

export const ProjectsData = (): Projects[] => {
  const { t } = useTranslation()

  return [
    {
      imgUrl: "",
      title: t("main.projects.items.Traxity.title"),
      description: t("main.projects.items.Traxity.description"),
      tags: [
        "TypeScript",
        "Nest",
        "React",
        "Docker",
        "TypeORM",
        "PostgreSQL",
        "Shadcn/ui",
        "Tailwind CSS",
      ],
      url: "https://traxity.com",
      repositoryUrl: "https://github.com/valentinvera/Traxity",
      slug: slug(t("main.projects.items.Traxity.title")),
    },
  ]
}
