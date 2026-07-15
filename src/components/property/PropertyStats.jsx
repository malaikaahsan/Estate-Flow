import { BedDouble, Bath, Car, Ruler } from "lucide-react";

const PropertyStats = ({ property }) => {
  const stats = [
    {
      icon: BedDouble,
      label: "Bedrooms",
      value: property.bedrooms,
      color: "text-[#10B981]",
      bg: "bg-[#10B981]/10",
    },
    {
      icon: Bath,
      label: "Bathrooms",
      value: property.bathrooms,
      color: "text-[#38BDF8]",
      bg: "bg-[#38BDF8]/10",
    },
    {
      icon: Car,
      label: "Garage",
      value: property.garage,
      color: "text-[#F59E0B]",
      bg: "bg-[#F59E0B]/10",
    },
    {
      icon: Ruler,
      label: "Area",
      value: `${property.area} sqft`,
      color: "text-[#1E293B]",
      bg: "bg-[#1E293B]/10",
    },
  ];

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-xl sm:p-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#10B981]/10 blur-3xl" />

      <div className="relative mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#10B981]">
          Property Information
        </p>

        <h2 className="mt-1 text-2xl font-bold text-[#0F172A]">Key Features</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8] hover:bg-white hover:shadow-lg"
            >
              <div
                className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon className={item.color} size={22} />
              </div>

              <h3 className="text-xl font-bold text-[#0F172A]">{item.value}</h3>

              <p className="mt-1 text-sm text-[#64748B]">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyStats;
