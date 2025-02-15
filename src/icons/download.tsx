import type { IconProps } from "@/types/icon"
import { DownloadIcon } from "lucide-react"

export const Download = ({ size = 16, className, ...props }: IconProps) => (
  <DownloadIcon width={size} height={size} className={className} {...props} />
)
