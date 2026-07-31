import { useTranslation } from "react-i18next"
import { ProjectsData } from "@/data/projects"
import ProjectCard from "../project-card"

const Projects = () => {
  const { t } = useTranslation()
  const projects = ProjectsData()

  return (
    <section className="pb-20">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="mb-2 ml:mb-4 font-medium ml:text-3xl text-2xl">
            {t("main.projects.title")}
          </h2>
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
