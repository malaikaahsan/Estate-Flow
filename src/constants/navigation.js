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
  },
  {
    title: "Properties",
    path: "/properties",
    icon: Building2,
  },
  {
    title: "Clients",
    path: "/clients",
    icon: Users,
  },
  {
    title: "Agents",
    path: "/agents",
    icon: UserRound,
  },
  {
    title: "Visits",
    path: "/visits",
    icon: CalendarCheck,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: Heart,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: UserCircle,
  },
];