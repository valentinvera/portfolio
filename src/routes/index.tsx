import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <main className="px-4 ">
      <Hero />
      <Projects />
    </main>
  )
}
