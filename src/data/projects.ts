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
        "Supabase",
        "Prisma",
        "Redis",
        "Uptash",
        "Shadcn/ui",
        "Tailwind CSS",
      ],
      url: "https://traxityapp.com",
      repositoryUrl: "https://github.com/usetraxity/traxity",
    },
  ]
}
