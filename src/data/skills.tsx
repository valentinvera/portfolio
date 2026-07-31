import { Icons } from "@/icons"

const iconClassName = "size-8"

export const SkillsData = [
  {
    component: <Icons.next size={32} className={iconClassName} />,
    altText: "Next.js Icon",
    label: "Next.js",
  },
  {
    component: (
      <Icons.astro
        size={32}
        className={`${iconClassName} [&>path:first-child]:fill-white dark:[&>path:first-child]:fill-white`}
      />
    ),
    altText: "Astro Icon",
    label: "Astro",
  },
  {
    component: <Icons.docker size={32} className={iconClassName} />,
    altText: "Docker Icon",
    label: "Docker",
  },
  {
    component: <Icons.tailwindcss size={32} className={iconClassName} />,
    altText: "Tailwind CSS Icon",
    label: "Tailwind CSS",
  },
  {
    component: <Icons.nest size={32} className={iconClassName} />,
    altText: "NestJS Icon",
    label: "NestJS",
  },
  {
    component: <Icons.react size={32} className={iconClassName} />,
    altText: "React Icon",
    label: "React",
  },
  {
    component: <Icons.postgresql size={32} className={iconClassName} />,
    altText: "PostgreSQL Icon",
    label: "PostgreSQL",
  },
  {
    component: <Icons.mongodb size={32} className={iconClassName} />,
    altText: "MongoDB Icon",
    label: "MongoDB",
  },
  {
    component: <Icons.hono size={32} className={iconClassName} />,
    altText: "Hono Icon",
    label: "Hono",
  },
  {
    component: (
      <Icons.shadcnui
        size={32}
        className={`${iconClassName} [&>path:first-child]:hidden [&>path:last-child]:stroke-white dark:[&>path:last-child]:stroke-white`}
      />
    ),
    altText: "shadcn/ui Icon",
    label: "shadcn/ui",
  },
  {
    component: <Icons.typescript size={32} className={iconClassName} />,
    altText: "TypeScript Icon",
    label: "TypeScript",
  },
  {
    component: <Icons.typeorm size={32} className={iconClassName} />,
    altText: "TypeORM Icon",
    label: "TypeORM",
  },
  {
    component: <Icons.redis size={32} className={iconClassName} />,
    altText: "Redis Icon",
    label: "Redis",
  },
  {
    component: <Icons.prisma size={32} className={iconClassName} />,
    altText: "Prisma Icon",
    label: "Prisma",
  },
  {
    component: <Icons.tanstack size={32} className={iconClassName} />,
    altText: "TanStack Icon",
    label: "TanStack",
  },
  {
    component: <Icons.vite size={32} className={iconClassName} />,
    altText: "Vite Icon",
    label: "Vite",
  },
  {
    component: <Icons.vitest size={32} className={iconClassName} />,
    altText: "Vitest Icon",
    label: "Vitest",
  },
  {
    component: <Icons.sass size={32} className={iconClassName} />,
    altText: "Sass Icon",
    label: "Sass",
  },
  {
    component: <Icons.jest size={32} className={iconClassName} />,
    altText: "Jest Icon",
    label: "Jest",
  },
  {
    component: <Icons.node size={32} className={iconClassName} />,
    altText: "Node Icon",
    label: "Node.js",
  },
  {
    component: <Icons.express size={32} className={iconClassName} />,
    altText: "Express.js Icon",
    label: "Express.js",
  },
  {
    component: <Icons.git size={32} className={iconClassName} />,
    altText: "Git Icon",
    label: "Git",
  },
  {
    component: (
      <Icons.github
        size={32}
        className={`${iconClassName} [&>path:first-child]:fill-white dark:[&>path:first-child]:fill-white`}
      />
    ),
    altText: "GitHub Icon",
    label: "GitHub",
  },
]
