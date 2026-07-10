import {
  Building2,
  Home,
  Users,
  UserRound,
  DollarSign,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";

export const dashboardCards = [
  {
    title: "Total Properties",
    value: "154",
    change: "+12%",
    color: "bg-blue-100 text-blue-600",
    icon: Building2,
  },
  {
    title: "Available",
    value: "120",
    change: "+5%",
    color: "bg-green-100 text-green-600",
    icon: Home,
  },
  {
    title: "Clients",
    value: "289",
    change: "+8%",
    color: "bg-purple-100 text-purple-600",
    icon: Users,
  },
  {
    title: "Agents",
    value: "18",
    change: "+2%",
    color: "bg-orange-100 text-orange-600",
    icon: UserRound,
  },
  {
    title: "Revenue",
    value: "$2.8M",
    change: "+14%",
    color: "bg-emerald-100 text-emerald-600",
    icon: DollarSign,
  },
  {
    title: "Visits Today",
    value: "12",
    change: "+3%",
    color: "bg-cyan-100 text-cyan-600",
    icon: CalendarCheck,
  },
  {
    title: "Pending Inquiries",
    value: "9",
    change: "-2%",
    color: "bg-red-100 text-red-600",
    icon: MessageSquare,
  },
];