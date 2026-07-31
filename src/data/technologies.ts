import type { ElementType } from "react"
import { Icons } from "@/icons"
import type { Stack } from "@/types/projects"

interface Technologies {
  stack: Stack
  icon: ElementType
}

export const technologies: Technologies[] = [
  {
    stack: "Uptash",
    icon: Icons.uptash,
  },
  {
    stack: "Supabase",
    icon: Icons.supabase,
  },
  {
    stack: "TypeORM",
    icon: Icons.typeorm,
  },
  {
    stack: "Nest",
    icon: Icons.nest,
  },
  {
    stack: "Astro",
    icon: Icons.astro,
  },
  {
    stack: "Hono",
    icon: Icons.hono,
  },
  {
    stack: "Next",
    icon: Icons.next,
  },
  {
    stack: "Tailwind CSS",
    icon: Icons.tailwindcss,
  },
  {
    stack: "Docker",
    icon: Icons.docker,
  },
  {
    stack: "Prisma",
    icon: Icons.prisma,
  },
  {
    stack: "TypeScript",
    icon: Icons.typescript,
  },
  {
    stack: "MongoDB",
    icon: Icons.mongodb,
  },
  {
    stack: "Astro",
    icon: Icons.astro,
  },
  {
    stack: "PostgreSQL",
    icon: Icons.postgresql,
  },
  {
    stack: "React",
    icon: Icons.react,
  },
  {
    stack: "Redis",
    icon: Icons.redis,
  },
  {
    stack: "Shadcn/ui",
    icon: Icons.shadcnui,
  },
]
