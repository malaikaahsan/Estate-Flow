import {
  Home,
  CheckCircle,
  Users,
  DollarSign,
  Star,
  Calendar,
  BarChart3,
} from "lucide-react";

const ProfileStats = ({ profile }) => {
  const stats = [
    {
      title: "Properties Managed",
      value: profile.stats.managed,
      icon: Home,
      bg: "bg-[#EEF9F6]",
      color: "text-[#10B981]",
    },
    {
      title: "Properties Sold",
      value: profile.stats.sold,
      icon: CheckCircle,
      bg: "bg-[#ECFDF5]",
      color: "text-[#059669]",
    },
    {
      title: "Clients",
      value: profile.stats.clients,
      icon: Users,
      bg: "bg-[#EAF7FD]",
      color: "text-[#38BDF8]",
    },
    {
      title: "Revenue Generated",
      value: profile.stats.revenue,
      icon: DollarSign,
      bg: "bg-[#EEF9F6]",
      color: "text-[#10B981]",
    },
    {
      title: "Average Rating",
      value: profile.stats.rating,
      icon: Star,
      bg: "bg-[#F8FAFC]",
      color: "text-[#1E293B]",
    },
    {
      title: "Experience",
      value: `${profile.stats.years} Years`,
      icon: Calendar,
      bg: "bg-[#F8FAFC]",
      color: "text-[#1E293B]",
    },
  ];

  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F6]">
          <BarChart3 size={24} className="text-[#10B981]" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#0F172A]">Statistics</h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Performance overview and account achievements.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981] hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg} transition-all duration-300 group-hover:scale-105`}
                >
                  <Icon size={24} className={stat.color} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-[#64748B]">{stat.title}</p>

                  <h3 className="mt-1 text-2xl font-bold text-[#0F172A]">
                    {stat.value}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileStats;
