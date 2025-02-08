import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { NotFoundRoute, RouterProvider, createRouter } from "@tanstack/react-router"
import NotFound from "./components/not-found"
import { routeTree } from "./routeTree.gen"
import "./i18n"

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => routeTree,
  component: NotFound,
})

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  notFoundRoute,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider delayDuration={0}>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>,
)
