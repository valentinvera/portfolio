import { MailIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const Mail = ({ size = 16, className, ...props }: IconProps) => (
  <MailIcon width={size} height={size} className={className} {...props} />
)
