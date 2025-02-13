import type { IconProps } from "@/types/icon"
import { NotebookIcon } from "lucide-react"

export const notebookIcon = ({ size = 16, className, ...props }: IconProps) => {
  return <NotebookIcon width={size} height={size} className={className} {...props} />
}
