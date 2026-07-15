import { Eye, Heart, DollarSign, ArrowUpRight } from "lucide-react";

const MostViewedProperties = ({ properties }) => {
  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#0F172A]">
            Most Viewed Properties
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Highest performing properties based on views, favorites and revenue.
          </p>
        </div>

        <div className="rounded-xl bg-[#EEF9F6] px-4 py-2 text-sm font-semibold text-[#10B981]">
          {properties.length} Properties
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="group overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#10B981] backdrop-blur-md">
                Top Performer
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="line-clamp-2 text-lg font-bold text-[#0F172A]">
                  {property.title}
                </h3>

                <ArrowUpRight size={18} className="text-[#10B981]" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#F8FAFC] p-3">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7FD]">
                    <Eye size={18} className="text-[#38BDF8]" />
                  </div>

                  <p className="text-xs text-[#64748B]">Views</p>

                  <h4 className="mt-1 font-bold text-[#0F172A]">
                    {property.views.toLocaleString()}
                  </h4>
                </div>

                <div className="rounded-2xl bg-[#F8FAFC] p-3">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEF2F2]">
                    <Heart size={18} className="text-[#EF4444]" />
                  </div>

                  <p className="text-xs text-[#64748B]">Favorites</p>

                  <h4 className="mt-1 font-bold text-[#0F172A]">
                    {property.favorites}
                  </h4>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-[#EEF9F6] p-4">
                <div>
                  <p className="text-xs text-[#64748B]">Revenue Generated</p>

                  <h3 className="mt-1 text-xl font-bold text-[#10B981]">
                    ${property.revenue.toLocaleString()}
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10B981]">
                  <DollarSign size={22} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostViewedProperties;
