import type { IconProps } from "@/types/icon"
import { CodeIcon } from "lucide-react"

export const Code = ({ size = 16, className, ...props }: IconProps) => (
  <CodeIcon width={size} height={size} className={className} {...props} />
)
