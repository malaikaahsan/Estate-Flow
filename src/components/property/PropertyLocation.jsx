import { MapPin, Navigation } from "lucide-react";

const PropertyLocation = ({ property }) => {
  const mapQuery = encodeURIComponent(
    `${property.address}, ${property.city}`
  );

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,.10)]">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Glow */}
      <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-[#10B981]/10 blur-3xl"></div>

      {/* Header */}
      <div className="relative mb-6">

        <p className="text-sm font-semibold uppercase tracking-widest text-[#10B981]">
          Property Location
        </p>

        <h2 className="mt-1 text-3xl font-bold text-[#0F172A]">
          Find this Property
        </h2>

      </div>

      {/* Content */}
      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">

        {/* Left Info Card */}
        <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF9F6]">
            <MapPin
              size={30}
              className="text-[#10B981]"
            />
          </div>

          <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
            Property Address
          </h3>

          <p className="mt-3 leading-7 text-[#64748B]">
            {property.address}
          </p>

          <p className="font-semibold text-[#0F172A]">
            {property.city}
          </p>

          <div className="mt-8 rounded-2xl bg-white p-4 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6]">
                <Navigation
                  size={20}
                  className="text-[#10B981]"
                />
              </div>

              <div>

                <p className="font-semibold text-[#0F172A]">
                  Google Maps
                </p>

                <p className="text-sm text-[#64748B]">
                  Interactive Location
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] shadow-md">

          <iframe
            title="Property Location"
            src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>

    </div>
  );
};

export default PropertyLocation;