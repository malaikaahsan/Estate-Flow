import {
  Wifi,
  Car,
  Trees,
  ShieldCheck,
  Dumbbell,
  Waves,
  Snowflake,
} from "lucide-react";

const icons = {
  WiFi: Wifi,
  Garage: Car,
  "Swimming Pool": Waves,
  Garden: Trees,
  Security: ShieldCheck,
  Gym: Dumbbell,
  "Air Conditioning": Snowflake,
};

const PropertyAmenities = ({ property }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-5 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,.10)] sm:p-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#10B981]/10 blur-3xl transition-all duration-500 group-hover:bg-[#38BDF8]/10"></div>

      <div className="relative mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#10B981]">
            Features
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#0F172A]">
            Property Amenities
          </h2>
        </div>

        <div className="hidden rounded-2xl bg-[#EEF9F6] px-4 py-2 text-sm font-semibold text-[#10B981] sm:block">
          {property.amenities.length} Amenities
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
        {property.amenities.map((amenity) => {
          const Icon = icons[amenity];

          return (
            <div
              key={amenity}
              className="group/item flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8] hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#10B981]/15 to-[#38BDF8]/15 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6">
                <Icon size={22} className="text-[#10B981]" />
              </div>

              <span className="text-sm font-semibold text-[#0F172A]">
                {amenity}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyAmenities;
