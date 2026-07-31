import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import AboutMe from "@/components/sections/about-me"
import Contact from "@/components/sections/contact"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"

export const Route = createFileRoute("/")({
  component: HomeComponent,
})

function HomeComponent() {
  const { i18n } = useTranslation()

  useDocumentTitle(
    i18n.language === "es"
      ? "Valentín Vera - Desarrollador Full Stack"
      : "Valentín Vera - Full Stack Developer",
  )

  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  )
}
