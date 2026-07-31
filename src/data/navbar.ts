import { Icons } from "@/icons"

export const NavBarData = {
  navigation: [{ href: "/", icon: Icons.house, label: "main.navbar.navigation.label.house" }],
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
      X: {
        name: "X",
        url: "https://x.com/vvalentinvera",
        icon: Icons.xTwitter,
        navbar: true,
      },
    },
  },
  cv: {
    name: "CV",
    url: "/static/CV - Valentín Vera.pdf",
    icon: Icons.download,
  },
}
