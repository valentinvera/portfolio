import type { IconProps } from "@/types/icon"
import { HouseIcon } from "lucide-react"

export const House = ({ size = 16, className, ...props }: IconProps) => (
  <HouseIcon width={size} height={size} className={className} {...props} />
)
