import type { IconProps } from "@/types/icon"
import { MailIcon } from "lucide-react"

export const mailIcon = ({ size = 16, className, ...props }: IconProps) => {
  return (
    <MailIcon
      width={size}
      height={size}
      className={`${className} fill-white stroke-current dark:fill-black`}
      {...props}
    />
  )
}
