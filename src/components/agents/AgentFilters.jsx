import { Search, Filter, Briefcase, Star, Plus } from "lucide-react";

const AgentFilters = ({
  search,
  setSearch,
  filters,
  setFilters,
  onAddAgent,
}) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="grid flex-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative sm:col-span-2 xl:col-span-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
            />

            <input
              type="text"
              placeholder="Search agents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-2 focus:ring-[#10B981]/10"
            />
          </div>

          <div className="relative">
            <Briefcase
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#10B981]"
            />

            <select
              name="specialization"
              value={filters.specialization}
              onChange={handleChange}
              className="h-12 w-full appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white"
            >
              <option value="">All Specializations</option>
              <option>Luxury Villas</option>
              <option>Commercial Properties</option>
              <option>Apartments</option>
              <option>Luxury Homes</option>
              <option>Town Houses</option>
            </select>
          </div>

          <div className="relative">
            <Filter
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#38BDF8]"
            />

            <select
              name="experience"
              value={filters.experience}
              onChange={handleChange}
              className="h-12 w-full appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white"
            >
              <option value="">All Experience</option>
              <option>5 Years</option>
              <option>6 Years</option>
              <option>7 Years</option>
              <option>8 Years</option>
              <option>10 Years</option>
            </select>
          </div>

          <div className="relative">
            <Star
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F59E0B]"
            />

            <select
              name="rating"
              value={filters.rating}
              onChange={handleChange}
              className="h-12 w-full appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white"
            >
              <option value="">Any Rating</option>
              <option value="4.5">4.5+</option>
              <option value="4.7">4.7+</option>
              <option value="4.9">4.9+</option>
            </select>
          </div>
        </div>

        <button
          onClick={onAddAgent}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#10B981] px-6 font-semibold text-white transition-all duration-300 hover:bg-[#059669] hover:shadow-lg xl:ml-4"
        >
          <Plus size={18} />
          Add Agent
        </button>
      </div>
    </section>
  );
};

export default AgentFilters;
