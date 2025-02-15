import type { IconProps } from "@/types/icon"
import { ArrowRightIcon } from "lucide-react"

export const ArrowRight = ({ size = 16, className, ...props }: IconProps) => (
  <ArrowRightIcon width={size} height={size} className={className} {...props} />
)
