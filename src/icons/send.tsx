import { SendIcon } from "lucide-react"
import type { IconProps } from "@/types/icon"

export const Send = ({ size = 16, className, ...props }: IconProps) => (
  <SendIcon width={size} height={size} className={className} {...props} />
)
