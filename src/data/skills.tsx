import { Icons } from "@/icons"

export const SkilsData = [
  { component: <Icons.next size={40} className="size-10" />, altText: "Next Icon" },
  {
    component: (
      <Icons.astro
        size={40}
        className="size-10 [&>path:first-child]:fill-white dark:[&>path:first-child]:fill-white"
      />
    ),
    altText: "Astro Icon",
  },
  { component: <Icons.docker size={40} className="size-10" />, altText: "Docker Icon" },
  { component: <Icons.tailwindcss size={40} className="size-10" />, altText: "TailwindCSS Icon" },
  { component: <Icons.nest size={40} className="size-10" />, altText: "Nest Icon" },
  { component: <Icons.react size={40} className="size-10" />, altText: "React Icon" },
  { component: <Icons.postgresql size={40} className="size-10" />, altText: "PostgreSQL Icon" },
  { component: <Icons.mongodb size={40} className="size-10" />, altText: "MongoDB Icon" },
  { component: <Icons.hono size={40} className="size-10" />, altText: "Hono Icon" },
  {
    component: (
      <Icons.shadcnui
        size={40}
        className="size-10 [&>path:first-child]:hidden [&>path:last-child]:stroke-white dark:[&>path:last-child]:stroke-white"
      />
    ),
    altText: "Shadcnui Icon",
  },
  { component: <Icons.typescript size={40} className="size-10" />, altText: "TypeScript Icon" },
  { component: <Icons.typeorm size={40} className="size-10" />, altText: "TypeORM Icon" },
  { component: <Icons.redis size={40} className="size-10" />, altText: "Redis Icon" },
  { component: <Icons.prisma size={40} className="size-10" />, altText: "Prisma Icon" },
  {
    component: <Icons.tanstack size={40} className="size-10" />,
    altText: "TanStack Icon",
  },
  { component: <Icons.vite size={40} className="size-10" />, altText: "Vite Icon" },
  { component: <Icons.vitest size={40} className="size-10" />, altText: "Vitest Icon" },
  { component: <Icons.sass size={40} className="size-10" />, altText: "Sass Icon" },
  { component: <Icons.jest size={40} className="size-10" />, altText: "Jest Icon" },
  { component: <Icons.node size={40} className="size-10" />, altText: "Node Icon" },
  { component: <Icons.express size={40} className="size-10" />, altText: "Express Icon" },
  { component: <Icons.git size={40} className="size-10" />, altText: "Git Icon" },
  {
    component: (
      <Icons.github
        size={40}
        className="size-10 [&>path:first-child]:fill-white dark:[&>path:first-child]:fill-white"
      />
    ),
    altText: "Github Icon",
  },
]
