import { Briefcase, Award, FileText } from "lucide-react";

const AgentAbout = ({ agent }) => {
  return (
    <section className="lg:col-span-2 flex h-full flex-col rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">
      {/* Heading */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6]">
          <FileText size={20} className="text-[#10B981]" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0F172A]">About Agent</h2>

          <p className="text-sm text-[#64748B]">
            Professional profile and expertise
          </p>
        </div>
      </div>

      <p className=" leading-7 text-[#64748B]">{agent.about}</p>

      {/* Info Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Experience */}
        <div className="rounded-2xl bg-[#F8FAFC] p-4 transition-all duration-300 hover:bg-white hover:shadow-md">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF9F6]">
            <Briefcase size={18} className="text-[#10B981]" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
            Experience
          </p>

          <h3 className="mt-1 text-lg font-bold text-[#0F172A]">
            {agent.experience}
          </h3>
        </div>

        {/* Specialization */}
        <div className="rounded-2xl bg-[#F8FAFC] p-4 transition-all duration-300 hover:bg-white hover:shadow-md">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7FD]">
            <Award size={18} className="text-[#38BDF8]" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
            Specialization
          </p>

          <h3 className="mt-1 text-lg font-bold text-[#0F172A]">
            {agent.specialization}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AgentAbout;
