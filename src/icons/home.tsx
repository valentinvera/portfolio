import type { IconProps } from "@/types/icon"
import { HouseIcon } from "lucide-react"

export const homeIcon = ({ size = 16, className, ...props }: IconProps) => {
  return <HouseIcon width={size} height={size} className={className} {...props} />
}
