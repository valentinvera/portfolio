import type { IconProps } from "@/types/icon"
import { NotebookIcon } from "lucide-react"

export const Notebook = ({ size = 16, className, ...props }: IconProps) => (
  <NotebookIcon width={size} height={size} className={className} {...props} />
)
