import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const AnalyticsCard = ({
  title,
  value,
  icon: Icon,
  change,
  trend,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-xl sm:p-6">

      {/* Accent Line */}

      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#10B981]" />

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-[#64748B]">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#0F172A] sm:text-3xl">
            {value}
          </h2>

        </div>

        {/* Icon */}

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F6] transition duration-300 group-hover:scale-110 group-hover:bg-[#10B981]">

          <Icon
            size={28}
            className="text-[#10B981] transition duration-300 group-hover:text-white"
          />

        </div>

      </div>

      <div className="my-5 h-px bg-[#E2E8F0]" />

      <div className="flex items-center gap-3">

        <div
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${
            trend === "up"
              ? "bg-[#EEF9F6] text-[#10B981]"
              : "bg-[#F1F5F9] text-[#1E293B]"
          }`}
        >
          {trend === "up" ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {change}
        </div>

        <span className="text-sm text-[#64748B]">
          vs last month
        </span>

      </div>

    </div>
  );
};

export default AnalyticsCard;