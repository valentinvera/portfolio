import type { IconProps } from "@/types/icon"
import { MailIcon } from "lucide-react"

export const Mail = ({ size = 16, className, ...props }: IconProps) => (
  <MailIcon
    width={size}
    height={size}
    className={`${className} fill-white stroke-current dark:fill-black`}
    {...props}
  />
)
