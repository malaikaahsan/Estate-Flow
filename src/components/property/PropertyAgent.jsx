import { Mail, Phone, Star, BadgeCheck } from "lucide-react";

const PropertyAgent = ({ agent }) => {
  if (!agent) {
    return (
      <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-[#EF4444]">
          Agent information not available.
        </h2>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,.10)]">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#10B981]/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">

        {/* Avatar */}
        <div className="flex justify-center lg:block">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-[#10B981]/20 blur-2xl"></div>

            <img
              src={agent.image}
              alt={agent.name}
              className="relative h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
            />

          </div>

        </div>

        {/* Right */}
        <div className="flex-1">

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <h2 className="text-3xl font-bold text-[#0F172A]">
                  {agent.name}
                </h2>

                <span className="flex items-center gap-1 rounded-full bg-[#EEF9F6] px-3 py-1 text-xs font-semibold text-[#10B981]">
                  <BadgeCheck size={14} />
                  Verified
                </span>

              </div>

              <p className="mt-2 text-[#64748B]">
                Professional Property Consultant
              </p>

            </div>

            <button className="rounded-2xl bg-gradient-to-r from-[#10B981] to-[#1E293B] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Contact Agent
            </button>

          </div>

          {/* Info Row */}

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

            {/* Email */}

            <div className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF9F6]">
                <Mail
                  size={20}
                  className="text-[#10B981]"
                />
              </div>

              <div className="min-w-0">

                <p className="text-xs uppercase tracking-wide text-[#64748B]">
                  Email
                </p>

                <p className="truncate font-semibold text-[#0F172A]">
                  {agent.email}
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                <Phone
                  size={20}
                  className="text-[#38BDF8]"
                />
              </div>

              <div>

                <p className="text-xs uppercase tracking-wide text-[#64748B]">
                  Phone
                </p>

                <p className="font-semibold text-[#0F172A]">
                  {agent.phone}
                </p>

              </div>

            </div>

            {/* Rating */}

            <div className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <Star
                  size={20}
                  className="fill-[#F59E0B] text-[#F59E0B]"
                />
              </div>

              <div>

                <p className="text-xs uppercase tracking-wide text-[#64748B]">
                  Rating
                </p>

                <p className="font-bold text-[#0F172A]">
                  {agent.rating}/5
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PropertyAgent;