import {
  TrendingUp,
  Building2,
  Briefcase,
  Star,
} from "lucide-react";

const AgentStat = ({ agent }) => {
  const stats = [
    {
      title: "Total Sales",
      value: agent.sales,
      icon: TrendingUp,
      color: "text-[#10B981]",
      bg: "bg-[#EEF9F6]",
    },
    {
      title: "Properties Managed",
      value: agent.propertiesManaged,
      icon: Building2,
      color: "text-[#38BDF8]",
      bg: "bg-[#EAF7FD]",
    },
    {
      title: "Experience",
      value: agent.experience,
      icon: Briefcase,
      color: "text-[#1E293B]",
      bg: "bg-[#F1F5F9]",
    },
    {
      title: "Rating",
      value: agent.rating,
      icon: Star,
      color: "text-[#F59E0B]",
      bg: "bg-[#FEF3C7]",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-lg sm:p-5"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#64748B]">
                  {stat.title}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#0F172A] sm:text-2xl">
                  {stat.value}
                </h3>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.bg}`}
              >
                <Icon
                  size={20}
                  className={stat.color}
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AgentStat;