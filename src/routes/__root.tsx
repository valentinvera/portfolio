import NavBar from "@/components/navbar"
import NotFound from "@/components/not-found"
import { Outlet, createRootRoute } from "@tanstack/react-router"

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
