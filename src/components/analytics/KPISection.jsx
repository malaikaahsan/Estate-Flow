import {
  DollarSign,
  Home,
  Users,
  BadgeDollarSign,
  CalendarCheck,
  TrendingUp,
  Building2,
  Handshake,
} from "lucide-react";

import AnalyticsCard from "./AnalyticsCard";

const KPISection = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "$3.2M",
      icon: DollarSign,
      change: "+12.4%",
      trend: "up",
      color: "#10B981",
    },
    {
      title: "Monthly Sales",
      value: "145",
      icon: TrendingUp,
      change: "+8.6%",
      trend: "up",
      color: "#3B82F6",
    },
    {
      title: "Active Listings",
      value: "86",
      icon: Home,
      change: "+4.1%",
      trend: "up",
      color: "#8B5CF6",
    },
    {
      title: "Closed Deals",
      value: "48",
      icon: Handshake,
      change: "-2.1%",
      trend: "down",
      color: "#F59E0B",
    },
    {
      title: "New Clients",
      value: "35",
      icon: Users,
      change: "+9.8%",
      trend: "up",
      color: "#EC4899",
    },
    {
      title: "Average Price",
      value: "$420K",
      icon: BadgeDollarSign,
      change: "+6.3%",
      trend: "up",
      color: "#06B6D4",
    },
    {
      title: "Visits Scheduled",
      value: "61",
      icon: CalendarCheck,
      change: "+11.2%",
      trend: "up",
      color: "#6366F1",
    },
    {
      title: "Conversion Rate",
      value: "18%",
      icon: Building2,
      change: "+2.5%",
      trend: "up",
      color: "#EF4444",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <AnalyticsCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default KPISection;
