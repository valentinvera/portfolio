import type { IconProps } from "@/types/icon"
import { LoaderCircleIcon } from "lucide-react"

export const LoaderCircle = ({ size = 16, className, ...props }: IconProps) => (
  <LoaderCircleIcon width={size} height={size} className={className} {...props} />
)
