import { ProjectsData } from "@/data/projects"
import { useTranslation } from "react-i18next"
import ProjectCard from "../project-card"

const Projects = () => {
  const { t } = useTranslation()
  const projects = ProjectsData()

  return (
    <section className="pt-30 pb-10">
      <div>
        <h2 className="mb-2 ml:mb-4 font-medium ml:text-3xl text-2xl">
          {t("main.projects.title")}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map(({ imgUrl, title, description, tags, url, repositoryUrl }, index) => (
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
