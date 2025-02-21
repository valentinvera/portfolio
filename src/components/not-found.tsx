import { Icons } from "@/icons"
import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center ml:pt-34 pt-22 text-center">
      <h2 className="font-bold text-9xl">404</h2>
      <p className="text-lg text-muted-foreground">{t("main.errors.not_found.message")}</p>
      <p className="mb-4 text-lg">{t("main.errors.not_found.error")}</p>
      <Link
        to="/"
        className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-background hover:bg-primary/90"
      >
        <Icons.arrowRight
          size={16}
          className="group-hover:-translate-x-0.5 size-4 rotate-180 transition-transform"
        />
        <span>{t("main.errors.not_found.call_to_action")}</span>
      </Link>
    </div>
  )
}

export default NotFound
