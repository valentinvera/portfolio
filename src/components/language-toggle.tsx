import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "./providers/language-provider"

interface Props {
  className?: string
}

const LanguageToggle = ({ className }: Props) => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      className={cn("cursor-pointer *:cursor-pointer", className)}
      variant="link"
      size="icon"
      onClick={toggleLanguage}
    >
      <span>{language === "es" ? "ES" : "EN"}</span>
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}

export default LanguageToggle
