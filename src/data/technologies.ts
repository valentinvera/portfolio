import type { ElementType } from "react"
import { Icons } from "@/icons"
import type { Stack } from "@/types/projects"

interface Technologies {
  stack: Stack
  icon: ElementType
}

export const technologies: Technologies[] = [
  {
    stack: "Upstash",
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
    stack: "DrizzleORM",
    icon: Icons.drizzle,
  },
  {
    stack: "TanStack",
    icon: Icons.tanstack,
  },
  {
    stack: "tRPC",
    icon: Icons.trpc,
  },
  {
    stack: "Turbo",
    icon: Icons.turbo,
  },
  {
    stack: "Expo",
    icon: Icons.expo,
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
  {
    stack: "Better Auth",
    icon: Icons.betterAuth,
  },
  {
    stack: "Polar",
    icon: Icons.polar,
  },
  {
    stack: "Neon",
    icon: Icons.neon,
  },
  {
    stack: "Plunk",
    icon: Icons.plunk,
  },
  {
    stack: "Uniwind",
    icon: Icons.uniwind,
  },
  {
    stack: "Vite",
    icon: Icons.vite,
  },
  {
    stack: "AI SDK",
    icon: Icons.aiSdk,
  },
  {
    stack: "Resend",
    icon: Icons.resend,
  },
]
