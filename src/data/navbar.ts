import { Icons } from "@/icons"

export const NavBarData = {
  navigation: [
    { href: "/", icon: Icons.house, label: "main.navbar.navigation.label.house" },
    { href: "/projects", icon: Icons.code, label: "main.navbar.navigation.label.projects" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/valentinvera",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/valentinvera",
        icon: Icons.linkedin,
        navbar: true,
      },
      Mail: {
        name: "Mail",
        url: "mailto:valentinvera2805@gmail.com",
        icon: Icons.mail,
        navbar: true,
      },
    },
  },
}
