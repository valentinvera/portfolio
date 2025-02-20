import type { IconProps } from "@/types/icon"
import { XIcon } from "lucide-react"

export const X = ({ size = 16, className, ...props }: IconProps) => (
  <XIcon width={size} height={size} className={className} {...props} />
)
