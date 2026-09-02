import { useTranslation } from "react-i18next"
import { Projects } from "@/types/projects"

export const ProjectsData = (): Projects[] => {
  const { t } = useTranslation()

  return [
    {
      imgUrl: "https://mavry.app/opengraph-image.png",
      title: t("main.projects.items.Mavry.title"),
      description: t("main.projects.items.Mavry.description"),
      tags: [
        "TypeScript",
        "React",
        "Expo",
        "TanStack",
        "tRPC",
        "Turbo",
        "Nest",
        "DrizzleORM",
        "PostgreSQL",
        "Better Auth",
        "Polar",
        "Neon",
        "Plunk",
        "Uniwind",
        "Vite",
        "AI SDK",
        "Upstash",
        "Redis",
        "Shadcn/ui",
        "Tailwind CSS",
      ],
      url: "https://mavry.app",
      repositoryUrl: "https://github.com/valentinvera/mavry",
    },
    {
      imgUrl: "https://motiq.app/og-image.png",
      title: t("main.projects.items.Motiq.title"),
      description: t("main.projects.items.Motiq.description"),
      tags: [
        "TypeScript",
        "React",
        "Hono",
        "tRPC",
        "DrizzleORM",
        "PostgreSQL",
        "Redis",
        "Upstash",
        "Turbo",
        "Neon",
        "Better Auth",
        "Polar",
        "TanStack",
        "Vite",
        "Resend",
        "Shadcn/ui",
        "Tailwind CSS",
      ],
      url: "https://motiq.app",
      repositoryUrl: "https://github.com/valentinvera/motiq",
    },
  ]
}
