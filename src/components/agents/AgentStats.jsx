import { Users, DollarSign, Star, Building2, TrendingUp } from "lucide-react";

const AgentStats = ({ agents }) => {
  const totalAgents = agents.length;

  const totalSales = agents.reduce((sum, agent) => sum + agent.sales, 0);

  const totalProperties = agents.reduce(
    (sum, agent) => sum + agent.propertiesManaged,
    0,
  );

  const averageRating =
    totalAgents > 0
      ? (
          agents.reduce((sum, agent) => sum + agent.rating, 0) / totalAgents
        ).toFixed(1)
      : "0.0";

  const cards = [
    {
      title: "Total Agents",
      value: totalAgents,
      icon: Users,
      bg: "bg-[#EEF9F6]",
      color: "text-[#10B981]",
    },
    {
      title: "Total Sales",
      value: totalSales,
      icon: DollarSign,
      bg: "bg-[#F1F5F9]",
      color: "text-[#1E293B]",
    },
    {
      title: "Average Rating",
      value: averageRating,
      icon: Star,
      bg: "bg-[#FEF3C7]",
      color: "text-[#F59E0B]",
    },
    {
      title: "Properties Managed",
      value: totalProperties,
      icon: Building2,
      bg: "bg-[#EAF7FD]",
      color: "text-[#38BDF8]",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-lg"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#10B981]/5 blur-2xl transition-all duration-300 group-hover:bg-[#10B981]/10" />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#64748B]">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">
                  {card.value}
                </h2>

                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#10B981]">
                  <TrendingUp size={14} />
                  <span>Updated</span>
                </div>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.bg}`}
              >
                <Icon size={26} className={card.color} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AgentStats;
