import { SearchX } from "lucide-react";

const EmptyState = ({
  title = "No Results Found",
  message = "Try changing your search or filters.",
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-8 text-center shadow-lg backdrop-blur-xl sm:p-12">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#10B981]/10 blur-3xl"></div>

      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#38BDF8]/10 blur-3xl"></div>

      <div className="relative">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#EEF9F6] to-[#E0F2FE] shadow-lg transition-transform duration-300 hover:scale-105">

          <SearchX
            size={46}
            className="text-[#10B981]"
          />

        </div>

        {/* Title */}
        <h2 className="mt-8 text-3xl font-bold text-[#0F172A]">
          {title}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg leading-7 text-[#64748B]">
          {message}
        </p>

        {/* Decorative Badge */}
        <div className="mt-8 inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-2 text-sm font-semibold text-[#10B981] shadow-sm">
          No matching records
        </div>

      </div>

    </div>
  );
};

export default EmptyState;