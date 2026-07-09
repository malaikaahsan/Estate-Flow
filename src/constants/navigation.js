import {
  LayoutDashboard,
  Building2,
  Users,
  UserRound,
  CalendarCheck,
  Heart,
  BarChart3,
  Bell,
  Settings,
  UserCircle,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    roles: ["admin", "agent"],
  },
  {
    title: "Properties",
    path: "/properties",
    icon: Building2,
    roles: ["admin", "agent"],
  },
  {
    title: "Clients",
    path: "/clients",
    icon: Users,
    roles: ["admin"],
  },
  {
    title: "Agents",
    path: "/agents",
    icon: UserRound,
    roles: ["admin"],
  },
  {
    title: "Visits",
    path: "/visits",
    icon: CalendarCheck,
    roles: ["admin", "agent"],
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: Heart,
    roles: ["admin", "agent"],
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
    roles: ["admin"],
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
    roles: ["admin", "agent"],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
    roles: ["admin"],
  },
  {
    title: "Profile",
    path: "/profile",
    icon: UserCircle,
    roles: ["admin", "agent"],
  },
];