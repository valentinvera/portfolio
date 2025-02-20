import type { IconProps } from "@/types/icon"
import { SearchIcon } from "lucide-react"

export const Search = ({ size = 16, className, ...props }: IconProps) => (
  <SearchIcon width={size} height={size} className={className} {...props} />
)
