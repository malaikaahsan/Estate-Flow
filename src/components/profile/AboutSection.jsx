import { FileText } from "lucide-react";

const AboutSection = ({ profile }) => {
  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F6]">
          <FileText size={24} className="text-[#10B981]" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#0F172A]">About</h2>

          <p className="mt-1 text-sm text-[#64748B]">
            A brief overview of your professional background and expertise.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
        <p className="leading-8 text-[#64748B]">
          {profile.about || "No description has been added yet."}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
