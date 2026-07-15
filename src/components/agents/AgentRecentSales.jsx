import { TrendingUp, MapPin, CalendarDays, Wallet } from "lucide-react";

const AgentRecentSales = ({ sales }) => {
  return (
    <section className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6]">
          <TrendingUp size={20} className="text-[#10B981]" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0F172A]">Recent Sales</h2>

          <p className="text-sm text-[#64748B]">
            Recently closed property deals
          </p>
        </div>
      </div>

      {sales.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#E2E8F0] bg-[#F8FAFC] px-6 py-10 text-center">
          <TrendingUp size={42} className="mx-auto mb-3 text-[#CBD5E1]" />

          <h3 className="text-lg font-semibold text-[#0F172A]">
            No Recent Sales
          </h3>

          <p className="mt-2 text-sm text-[#64748B]">
            Closed property sales will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {sales.map((property) => (
            <div
              key={property.id}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-[#10B981]/30 hover:bg-white hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-[#0F172A]">
                    {property.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <MapPin size={15} className="text-[#38BDF8]" />
                      {property.city}
                    </span>

                    <span className="flex items-center gap-1">
                      <CalendarDays size={15} className="text-[#10B981]" />
                      {new Date(property.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#EEF9F6] px-4 py-3 text-center sm:min-w-[170px]">
                  <div className="mb-1 flex items-center justify-center gap-2 text-[#10B981]">
                    <Wallet size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Sale Price
                    </span>
                  </div>

                  <p className="text-lg font-bold text-[#10B981]">
                    PKR {property.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AgentRecentSales;
