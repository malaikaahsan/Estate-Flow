import { Search } from "lucide-react";

const PropertySearch = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-3 sm:p-4 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#10B981]/10 blur-3xl transition-all duration-500 group-hover:bg-[#38BDF8]/10"></div>

      <div className="relative">

        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#64748B] transition-colors duration-300 group-focus-within:text-[#10B981]"
        />

        <input
          type="text"
          placeholder="Search by property name, city, owner, location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-12 w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] pl-14 pr-5 text-[15px] font-medium text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
        />

      </div>

    </div>
  );
};

export default PropertySearch;