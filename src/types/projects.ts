export type Stack =
  | "React"
  | "Tailwind CSS"
  | "TypeScript"
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
  | "Uptash"

export interface Projects {
  imgUrl: string
  title: string
  description: string
  tags: Stack[]
  url: string
  repositoryUrl: string
}
