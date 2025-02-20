import type { IconProps } from "@/types/icon"
import { CheckIcon } from "lucide-react"

export const Check = ({ size = 16, className, ...props }: IconProps) => (
  <CheckIcon width={size} height={size} className={className} {...props} />
)
