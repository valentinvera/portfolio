import { ProjectsData } from "@/data/projects"
// import { Icons } from "@/icons"
// import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import ProjectCard from "../project-card"

const Projects = () => {
  const { t } = useTranslation()
  const projects = ProjectsData()

  return (
    <section className="pb-40">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="mb-2 ml:mb-4 font-medium ml:text-3xl text-2xl">
            {t("main.projects.title")}
          </h2>
          {/* <Link
            to="/projects"
            className="group flex items-center gap-1 text-muted-foreground transition-colors duration-200 hover:text-foreground"
            aria-label={i18n.language === "es" ? "Ver más proyectos" : "See more projects"}
          >
            <span>{t("main.projects.see_more")}</span>
            <Icons.arrowRight
              size={16}
              className="size-4 opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100"
            />
          </Link> */}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects
            .slice(0, 4)
            .map(({ imgUrl, title, description, tags, url, repositoryUrl }, index) => (
              <ProjectCard
                key={index}
                imgUrl={imgUrl}
                title={title}
                description={description}
                tags={tags}
                url={url}
                repositoryUrl={repositoryUrl}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
