import {
  Star,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const AgentHero = ({ agent }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm">

      {/* Top Gradient */}
      <div className="h-1 bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Decorative Glow */}
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#10B981]/10 blur-3xl" />

      <div className="relative flex flex-col items-center gap-5 p-5 sm:p-6 lg:flex-row">

        {/* Profile Image */}

        <div className="shrink-0">

          <img
            src={agent.image}
            alt={agent.name}
            className="h-28 w-28 rounded-full border-4 border-[#EEF9F6] object-cover shadow-md sm:h-32 sm:w-32"
          />

        </div>

        {/* Agent Info */}

        <div className="flex-1 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF9F6] px-3 py-1 text-xs font-semibold text-[#10B981]">

            <BadgeCheck size={14} />

            Verified Agent

          </div>

          <h1 className="mt-3 text-2xl font-bold text-[#0F172A] sm:text-3xl">
            {agent.name}
          </h1>

          <div className="mt-3 flex flex-col items-center gap-3 text-sm text-[#64748B] sm:flex-row lg:justify-start">

            <div className="flex items-center gap-2">

              <Briefcase
                size={16}
                className="text-[#38BDF8]"
              />

              <span>{agent.specialization}</span>

            </div>

            <span className="hidden sm:block text-[#CBD5E1]">
              •
            </span>

            <div className="flex items-center gap-2">

              <Star
                size={16}
                className="fill-[#F59E0B] text-[#F59E0B]"
              />

              <span className="font-medium text-[#0F172A]">
                {agent.rating}
              </span>

              <span>Rating</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AgentHero;