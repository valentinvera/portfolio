import { ArrowRightIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const ArrowRight = ({ size = 16, className, ...props }: IconProps) => (
  <ArrowRightIcon width={size} height={size} className={className} {...props} />
)
