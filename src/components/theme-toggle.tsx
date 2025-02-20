import { useTheme } from "@/components/providers/theme-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"
import { Moon, Sun } from "lucide-react"

interface Props {
  className?: string
}

const ThemeToggle = ({ className }: Props) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      className={cn("cursor-pointer *:cursor-pointer", className)}
      variant="link"
      size="icon"
      onClick={toggleTheme}
    >
      <Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle
