import { createRootRoute, Outlet } from "@tanstack/react-router"
import NavBar from "@/components/navbar"
import NotFound from "@/components/not-found"

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}
