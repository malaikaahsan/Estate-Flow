import PropertySearch from "../../components/property/PropertySearch";
import PropertyFilters from "../../components/property/PropertyFilters";
import PropertySort from "../../components/property/PropertySort";
import PropertyGrid from "../../components/property/PropertyGrid";
import Pagination from "../../components/common/Pagination";
import ErrorState from "../../components/common/ErrorState";

import useProperties from "../../hooks/useProperties";

const Properties = () => {
  const {
    properties,
    loading,
    error,
    search,
    setSearch,
    filters,
    setFilters,
    sort,
    setSort,
    currentPage,
    setCurrentPage,
    totalPages,
    totalProperties,
    propertiesPerPage,
  } = useProperties();

  if (error) {
    return (
      <ErrorState message={error} onRetry={() => window.location.reload()} />
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl sm:p-8">
        {/* Accent */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

        {/* Glow */}
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#10B981]/10 blur-3xl"></div>

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

  {/* Left */}
  <div className="flex-1">

    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
      Property Management
    </p>

    <h1 className="mt-1 text-2xl font-bold text-[#0F172A] sm:text-3xl">
      Properties
    </h1>

    <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748B]">
      Browse, search, filter and manage all listed properties.
    </p>

  </div>

  {/* Right */}
  <div className="flex items-center gap-3 self-start rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 shadow-sm sm:self-auto">

    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF9F6]">
      <span className="text-lg font-bold text-[#10B981]">
        {totalProperties}
      </span>
    </div>

    <div>

      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
        Total Properties
      </p>

      <p className="text-sm font-semibold text-[#0F172A]">
        Available Listings
      </p>

    </div>

  </div>

</div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
        <PropertySearch searchTerm={search} setSearchTerm={setSearch} />
        <PropertySort sort={sort} setSort={setSort} />
      </div>
      {/* Search */}

      {/* Filters */}
      <PropertyFilters filters={filters} setFilters={setFilters} />

      {/* Sort */}

      {/* Property Grid */}
      <PropertyGrid properties={properties} loading={loading} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalProperties={totalProperties}
        propertiesPerPage={propertiesPerPage}
      />
    </div>
  );
};

export default Properties;
