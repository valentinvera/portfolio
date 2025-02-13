import NavBar from "@/components/navbar"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
