import { AnimatePresence, type MotionValue, motion, useMotionValue } from "framer-motion"
import React, { useState } from "react"
import { cn } from "@/lib/utils/cn"

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string | React.ReactNode
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isInside, setIsInside] = useState<boolean>(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    setIsInside(false)
  }

  const handleMouseEnter = () => {
    setIsInside(true)
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      className={cn("relative", className)}
    >
      <AnimatePresence>{isInside && <FollowPointer x={x} y={y} title={title} />}</AnimatePresence>
      {children}
    </div>
  )
}

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: MotionValue<number>
  y: MotionValue<number>
  title?: string | React.ReactNode
}) => {
  return (
    <motion.div
      className="fixed z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={
          "inline-flex min-w-max items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-foreground text-sm backdrop-blur-sm"
        }
      >
        {title || `Ver proyecto`}
      </motion.div>
    </motion.div>
  )
}
