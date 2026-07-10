import { ArrowUpDown } from "lucide-react";

const PropertySort = ({ sort, setSort }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white/90 p-3 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-xl">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        {/* Heading */}
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EEF9F6] text-[#10B981] transition-all duration-300 group-hover:scale-105">
            <ArrowUpDown size={20} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
              Sort Results
            </p>

            <h3 className="text-lg font-bold text-[#0F172A]">
              Order Properties
            </h3>
          </div>

        </div>

        {/* Select */}
        <div className="w-full sm:w-72">

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-12 w-full cursor-pointer rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-sm font-medium text-[#0F172A] outline-none transition-all duration-300 hover:border-[#38BDF8] hover:bg-white focus:border-[#38BDF8] focus:bg-white focus:ring-4 focus:ring-sky-100"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="area">Area</option>
            <option value="alphabetical">Alphabetical</option>
          </select>

        </div>

      </div>

    </div>
  );
};

export default PropertySort;