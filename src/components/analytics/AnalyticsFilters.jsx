import { CalendarDays, Building2, MapPin, User } from "lucide-react";

const AnalyticsFilters = ({ filters, setFilters }) => {
  const handleChange = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#0F172A]">
            Analytics Filters
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Filter analytics reports by date, city, property type and agent.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
            <CalendarDays size={17} className="text-[#10B981]" />
            Date Range
          </label>

          <select
            value={filters.dateRange}
            onChange={(e) => handleChange("dateRange", e.target.value)}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#0F172A] outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          >
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
            <Building2 size={17} className="text-[#38BDF8]" />
            Property Type
          </label>

          <select
            value={filters.propertyType}
            onChange={(e) => handleChange("propertyType", e.target.value)}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#0F172A] outline-none transition-all duration-300 focus:border-[#38BDF8] focus:bg-white focus:ring-4 focus:ring-[#38BDF8]/10"
          >
            <option value="">All Property Types</option>

            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
            <option>Office</option>
            <option>Commercial</option>
            <option>Land</option>
          </select>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
            <MapPin size={17} className="text-[#F59E0B]" />
            City
          </label>

          <select
            value={filters.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#0F172A] outline-none transition-all duration-300 focus:border-[#F59E0B] focus:bg-white focus:ring-4 focus:ring-[#F59E0B]/10"
          >
            <option value="">All Cities</option>

            <option>Lahore</option>
            <option>Karachi</option>
            <option>Islamabad</option>
            <option>Faisalabad</option>
            <option>Multan</option>
          </select>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
            <User size={17} className="text-[#8B5CF6]" />
            Agent
          </label>

          <select
            value={filters.agent}
            onChange={(e) => handleChange("agent", e.target.value)}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#0F172A] outline-none transition-all duration-300 focus:border-[#8B5CF6] focus:bg-white focus:ring-4 focus:ring-[#8B5CF6]/10"
          >
            <option value="">All Agents</option>

            <option>John Smith</option>
            <option>Sarah Wilson</option>
            <option>Emma Davis</option>
            <option>Michael Brown</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFilters;
