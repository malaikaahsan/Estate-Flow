const PropertyFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputStyle =
    "h-10 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-sm text-[#0F172A] outline-none transition-all duration-300 hover:border-[#38BDF8] focus:border-[#10B981] focus:bg-white focus:ring-2 focus:ring-[#10B981]/10";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#0F172A]">Filters</h2>

          <p className="text-xs text-[#64748B]">
            Narrow down your property search
          </p>
        </div>

        <span className="w-fit rounded-full bg-[#EEF9F6] px-3 py-1 text-xs font-semibold text-[#10B981]">
          Smart Filters
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <select
          name="city"
          value={filters.city}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">All Cities</option>
          <option>Islamabad</option>
          <option>Lahore</option>
          <option>Karachi</option>
          <option>Rawalpindi</option>
          <option>Multan</option>
          <option>Faisalabad</option>
          <option>Peshawar</option>
          <option>Sialkot</option>
        </select>

        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">All Types</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
          <option>Office</option>
          <option>Commercial</option>
          <option>Penthouse</option>
          <option>Farmhouse</option>
          <option>Plot</option>
          <option>Shop</option>
          <option>Studio</option>
        </select>

        <select
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">Bedrooms</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>

        <select
          name="bathrooms"
          value={filters.bathrooms}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">Bathrooms</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </select>

        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">Status</option>
          <option>Available</option>
          <option>Sold</option>
          <option>Pending</option>
        </select>

        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>
    </div>
  );
};

export default PropertyFilters;
