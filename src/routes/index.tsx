import AboutMe from "@/components/sections/about-me"
import Contact from "@/components/sections/contact"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  )
}
