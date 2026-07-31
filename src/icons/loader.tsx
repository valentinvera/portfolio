import { LoaderCircleIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const LoaderCircle = ({ size = 16, className, ...props }: IconProps) => (
  <LoaderCircleIcon width={size} height={size} className={className} {...props} />
)
