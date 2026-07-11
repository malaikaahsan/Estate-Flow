import { Search, Plus } from "lucide-react";

const ClientFilters = ({
  search,
  setSearch,
  filters,
  setFilters,
  onAddClient,
}) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle =
    "h-10 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-sm text-[#0F172A] outline-none transition-all duration-300 hover:border-[#38BDF8] focus:border-[#10B981] focus:bg-white focus:ring-2 focus:ring-[#10B981]/10";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">

      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Header */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h2 className="text-lg font-semibold text-[#0F172A]">
            Search & Filters
          </h2>

          <p className="text-xs text-[#64748B]">
            Find clients quickly
          </p>
        </div>

        <button
          onClick={onAddClient}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#1E293B] px-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#10B981]"
        >
          <Plus size={16} />
          Add Client
        </button>

      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">

        {/* Search */}
        <div className="relative xl:col-span-2">

          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]"
          />

          <input
            type="text"
            placeholder="Search client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${inputStyle} pl-10`}
          />

        </div>

        {/* Status */}
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">All Status</option>
          <option value="Interested">Interested</option>
          <option value="Negotiating">Negotiating</option>
          <option value="Deal Closed">Deal Closed</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* City */}
        <select
          name="city"
          value={filters.city}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">All Cities</option>
          <option>Lahore</option>
          <option>Karachi</option>
          <option>Islamabad</option>
          <option>Rawalpindi</option>
        </select>

        {/* Budget */}
        <select
          name="budget"
          value={filters.budget}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">Any Budget</option>
          <option value="20000000">Up to 20M</option>
          <option value="50000000">Up to 50M</option>
          <option value="100000000">Up to 100M</option>
        </select>

      </div>

    </div>
  );
};

export default ClientFilters;