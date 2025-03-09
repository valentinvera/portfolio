import { technologies } from "@/data/technologies"
import { Icons } from "@/icons"
import { Projects } from "@/types/projects"
import { Link } from "@tanstack/react-router"
import { ArrowUpRight } from "lucide-react"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import SpotlightCard from "./spotlight-card"
import { Badge } from "./ui/badge"
import { FollowerPointerCard } from "./ui/following-pointer"

const ProjectCard = ({ imgUrl, title, description, tags, url, repositoryUrl, slug }: Projects) => {
  const { t } = useTranslation()
  const tagIcons = useMemo(() => {
    const tagIconMap = new Map()
    technologies.map(tech => {
      tagIconMap.set(tech.stack, <tech.icon size={14} className="ml:size-4 size-3.5" />)
    })
    return tagIconMap
  }, [])

  return (
    <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
      <article>
        <FollowerPointerCard title={t("main.projects.following_pointer")}>
          <Link
            to="/projects/$slug"
            params={{
              slug,
            }}
            className="cursor-none"
          >
            {/* <img src={imgUrl} alt={title} className="h-auto max-h-64 w-full object-cover" /> */}
          </Link>
        </FollowerPointerCard>
        <div className="flex flex-col gap-2 px-4 pt-4 pb-6">
          <div className="flex items-center justify-between">
            <Link
              to={url}
              target="_blank"
              className="group flex items-center gap-1.5 decoration-muted-foreground underline-offset-6 hover:underline"
            >
              <span className="ml:text-xl text-lg">{title}</span>
              <ArrowUpRight
                size={16}
                className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </Link>
            <Link to={repositoryUrl} target="_blank">
              <Icons.github size={16} className="size-4" />
            </Link>
          </div>
          <p className="mb-2 ml:text-lg text-muted-foreground">{description}</p>
          <div className="flex flex-wrap items-center gap-2 ">
            {tags.map(tag => (
              <Badge
                key={tag}
                variant="secondary"
                className="flex shrink-0 items-center justify-center gap-2 px-2 py-1 font-medium"
              >
                {tagIcons.get(tag)}
                <span className="ml:text-sm text-accent-foreground">{tag}</span>
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </SpotlightCard>
  )
}

export default ProjectCard
