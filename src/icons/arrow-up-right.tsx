import type { IconProps } from "@/types/icon"
import { ArrowUpRightIcon } from "lucide-react"

export const ArrowUpRight = ({ size = 16, className, ...props }: IconProps) => (
  <ArrowUpRightIcon width={size} height={size} className={className} {...props} />
)
