import { HouseIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const House = ({ size = 16, className, ...props }: IconProps) => (
  <HouseIcon width={size} height={size} className={className} {...props} />
)
