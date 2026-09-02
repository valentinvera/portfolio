export type Stack =
  | "React"
  | "Tailwind CSS"
  | "TypeScript"
  | "TanStack"
  | "tRPC"
  | "Turbo"
  | "Expo"
  | "Next"
  | "Nest"
  | "Shadcn/ui"
  | "Prisma"
  | "PostgreSQL"
  | "Prisma"
  | "TypeORM"
  | "MongoDB"
  | "Redis"
  | "Docker"
  | "DrizzleORM"
  | "Hono"
  | "Astro"
  | "Supabase"
  | "Upstash"
  | "AI SDK"
  | "Resend"
  | "Better Auth"
  | "Polar"
  | "Neon"
  | "Plunk"
  | "Uniwind"
  | "Vite"

export interface Projects {
  imgUrl: string
  title: string
  description: string
  tags: Stack[]
  url: string
  repositoryUrl: string
}
