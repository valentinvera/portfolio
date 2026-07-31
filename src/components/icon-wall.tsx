import type { CSSProperties, FC, ReactNode } from "react"
import { useState } from "react"

interface IconItem {
  component: ReactNode
  altText: string
  label?: string
}

interface IconWallProps {
  items?: IconItem[]
  pauseOnHover?: boolean
  size?: string
  duration?: string
  textColor?: string
  bgColor?: string
  bgAccentColor?: string
  className?: string
}

type IconWallStyle = CSSProperties &
  Record<"--size" | "--duration" | "--color-text" | "--color-bg" | "--color-bg-accent", string>

const IconWall: FC<IconWallProps> = ({
  items = [],
  pauseOnHover = false,
  size = "clamp(5.75rem, 5rem + 2vw, 7rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111",
  className,
}) => {
  const [isPaused, setIsPaused] = useState(false)

  const wrapperClass = ["flex", "mx-auto", "max-w-full", "pb-6", className]
    .filter(Boolean)
    .join(" ")

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-3",
    "justify-start",
    "w-full",
    "mask-horizontal",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ")

  const trackClass = [
    "flex",
    "w-max",
    "min-w-max",
    "flex-shrink-0",
    "items-center",
    "justify-start",
    "gap-3",
    "animate-scrollX",
  ]
    .filter(Boolean)
    .join(" ")

  const getLabel = (item: IconItem) => item.label ?? item.altText.replace(/\s*Icon$/, "")

  const renderIcon = (item: IconItem, idx: number, prefix: string = "", isDuplicate = false) => (
    <div
      key={`${prefix}${idx}`}
      aria-label={getLabel(item)}
      aria-hidden={isDuplicate}
      className={[
        "bg-[var(--color-bg-accent)]",
        "rounded-md",
        "object-contain",
        "w-[var(--size)]",
        "h-24",
        "px-3 py-3",
        "flex flex-col items-center justify-center gap-2",
        "border border-border/50",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {item.component}
      <span className="max-w-full text-center font-medium text-muted-foreground text-xs leading-tight">
        {getLabel(item)}
      </span>
    </div>
  )

  const style: IconWallStyle = {
    "--size": size,
    "--duration": duration,
    "--color-text": textColor,
    "--color-bg": bgColor,
    "--color-bg-accent": bgAccentColor,
    color: "var(--color-text)",
    backgroundColor: "var(--color-bg)",
  }

  return (
    <article className={wrapperClass} style={style}>
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className={trackClass}>
          {items.map((item, idx) => renderIcon(item, idx))}
          {items.map((item, idx) => renderIcon(item, idx, "dup1-", true))}
        </div>
      </div>
    </article>
  )
}

export default IconWall
