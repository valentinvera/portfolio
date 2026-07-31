import { CheckIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const Check = ({ size = 16, className, ...props }: IconProps) => (
  <CheckIcon width={size} height={size} className={className} {...props} />
)
