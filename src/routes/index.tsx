import AboutMe from "@/components/sections/about-me"
import Contact from "@/components/sections/contact"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"
import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

export const Route = createFileRoute("/")({
  component: HomeComponent,
})

function HomeComponent() {
  const { i18n } = useTranslation()

  useDocumentTitle(
    i18n.language === "es"
      ? "Valentín Vera - Desarrollador Front-End"
      : "Valentín Vera - Front-End Developer",
  )

  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  )
}
