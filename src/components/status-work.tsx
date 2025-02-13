import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

interface Props {
  isAvailable: boolean
  className?: string
}

const StatusWork = ({ isAvailable = true, className }: Props) => {
  const { t } = useTranslation()

  const status = isAvailable
    ? { name: t("main.hero.status.available"), color: "bg-lime-400" }
    : { name: t("main.hero.status.not_available"), color: "bg-red-600" }

  return (
    <p className={className}>
      <span className="pointer-events-auto mb-2 ml:mb-0 inline-flex items-center rounded-md py-0 font-semibold ml:text-base text-[14px]">
        <span className="mr-1.5 flex h-3 w-3 items-center">
          <span
            className={cn(
              "absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75",
              status.color,
            )}
          ></span>
          <span className={cn("relative inline-flex h-2 w-2 rounded-full", status.color)}></span>
        </span>
        {status.name}
      </span>
    </p>
  )
}

export default StatusWork
