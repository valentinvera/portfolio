import ProjectCard from "@/components/project-card"
import { Input } from "@/components/ui/input"
import { ProjectsData } from "@/data/projects"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"
import { Icons } from "@/icons"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export const Route = createFileRoute("/projects/")({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  const projects = ProjectsData()
  const { t, i18n } = useTranslation()
  const [searchTerm, setSearchTerm] = useState<string>("")

  useDocumentTitle(
    i18n.language === "es" ? "Valentín Vera - Proyectos" : "Valentín Vera - Projects",
  )
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const clearInput = () => {
    setSearchTerm("")
  }

  return (
    <section>
      <div className="mb-6 flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="mb-2 font-medium ml:text-3xl text-2xl">
          {t("main.projects.all_projects_page_title")}
        </h2>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icons.search size={16} className="size-4 text-gray-400" />
          </div>
          <Input
            placeholder={t("main.projects.placeholder")}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="px-9"
          />
          {searchTerm && (
            <div
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
              onClick={clearInput}
            >
              <Icons.x size={16} className="size-4 text-gray-400 hover:text-gray-600" />
            </div>
          )}
        </div>
      </div>
      {filteredProjects.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>{t("main.projects.not_found", { searchTerm })}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredProjects.map(
            ({ imgUrl, title, description, tags, url, repositoryUrl }, index) => (
              <ProjectCard
                key={index}
                imgUrl={imgUrl}
                title={title}
                description={description}
                tags={tags}
                url={url}
                repositoryUrl={repositoryUrl}
              />
            ),
          )}
        </div>
      )}
    </section>
  )
}
