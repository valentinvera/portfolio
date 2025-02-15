import NavBar from "@/components/navbar"
import { Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
