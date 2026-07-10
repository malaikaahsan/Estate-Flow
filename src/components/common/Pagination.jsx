import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  totalProperties,
  propertiesPerPage,
}) => {
  const start =
    totalProperties === 0
      ? 0
      : (currentPage - 1) * propertiesPerPage + 1;

  const end = Math.min(
    currentPage * propertiesPerPage,
    totalProperties
  );

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-5 shadow-lg backdrop-blur-xl">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Glow */}
      <div className="absolute -right-12 -bottom-12 h-44 w-44 rounded-full bg-[#38BDF8]/10 blur-3xl"></div>

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Results */}
        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-[#10B981]">
            Results
          </p>

          <p className="mt-2 text-sm text-[#64748B]">
            Showing{" "}
            <span className="font-semibold text-[#0F172A]">
              {start}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-[#0F172A]">
              {end}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-[#10B981]">
              {totalProperties}
            </span>{" "}
            properties
          </p>

        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-center gap-2">

          {/* Previous */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => page - 1)}
            className="flex h-11 items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-sm font-medium text-[#0F172A] transition-all duration-300 hover:border-[#10B981] hover:bg-[#EEF9F6] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          {/* Pages */}
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  currentPage === page
                    ? "bg-[#10B981] text-white shadow-lg shadow-emerald-200"
                    : "border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] hover:border-[#38BDF8] hover:bg-white"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => page + 1)}
            className="flex h-11 items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-sm font-medium text-[#0F172A] transition-all duration-300 hover:border-[#10B981] hover:bg-[#EEF9F6] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default Pagination;