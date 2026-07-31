import { CodeIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const Code = ({ size = 16, className, ...props }: IconProps) => (
  <CodeIcon width={size} height={size} className={className} {...props} />
)
