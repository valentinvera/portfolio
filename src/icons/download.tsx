import { DownloadIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const Download = ({ size = 16, className, ...props }: IconProps) => (
  <DownloadIcon width={size} height={size} className={className} {...props} />
)
