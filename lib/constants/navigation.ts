export type NavLinkId =
  | "home"
  | "activities"
  | "assessments"
  | "tools"
  | "emergency"

export type NavLink = {
  id: NavLinkId
  label: string
  href: string
  description?: string
}

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", href: "/", description: "MindSpace overview" },
  { id: "activities", label: "Activities", href: "/activities", description: "Guided wellness routines" },
  { id: "assessments", label: "Assessments", href: "/assessments", description: "Mental health check-ins" },
  { id: "tools", label: "Tools", href: "/tools", description: "Self-care toolkits" },
  { id: "emergency", label: "Emergency", href: "/emergency", description: "Immediate crisis help" },
]
