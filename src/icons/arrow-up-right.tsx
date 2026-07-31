import { ArrowUpRightIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const ArrowUpRight = ({ size = 16, className, ...props }: IconProps) => (
  <ArrowUpRightIcon width={size} height={size} className={className} {...props} />
)
