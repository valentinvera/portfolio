import type { IconProps } from "@/types/icon"
import { CodeIcon } from "lucide-react"

export const codeIcon = ({ size = 16, className, ...props }: IconProps) => {
  return <CodeIcon width={size} height={size} className={className} {...props} />
}
