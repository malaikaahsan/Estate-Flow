const DashboardCard = ({
  title,
  value,
  icon: Icon,
  change,
  color,
}) => {
  const isNegative = change.startsWith("-");

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/40 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]">

      {/* Gradient Top Border */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#38BDF8]/10 blur-3xl transition-all duration-500 group-hover:bg-[#10B981]/15"></div>

      <div className="relative flex items-center justify-between">

        {/* Left */}
        <div className="flex-1">

          <p className="text-sm font-medium tracking-wide text-[#64748B]">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            {value}
          </h2>

          <div
            className={`mt-5 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
              isNegative
                ? "bg-red-50 text-[#EF4444]"
                : "bg-emerald-50 text-[#10B981]"
            }`}
          >
            {change} this month
          </div>

        </div>

        {/* Right */}
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${color}`}
        >
          <Icon
            size={30}
            className="text-white"
          />
        </div>

      </div>

    </div>
  );
};

export default DashboardCard;