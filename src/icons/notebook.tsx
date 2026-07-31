import { NotebookIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const Notebook = ({ size = 16, className, ...props }: IconProps) => (
  <NotebookIcon width={size} height={size} className={className} {...props} />
)
