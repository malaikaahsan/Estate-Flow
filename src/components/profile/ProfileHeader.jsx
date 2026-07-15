import {
  Building2,
  BadgeCheck,
  Pencil,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const ProfileHeader = ({ profile, onEdit }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm">
      <div className="relative h-32 bg-gradient-to-r from-[#1E293B] via-[#10B981] to-[#38BDF8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.25),transparent_45%)]" />
      </div>

      <div className="relative px-5 pb-6 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end">
            <div className="-mt-16">
              <img
                src={profile.image}
                alt={profile.name}
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl sm:h-36 sm:w-36"
              />
            </div>

            <div className="text-center sm:text-left">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <h1 className="text-3xl font-bold text-[#0F172A]">
                  {profile.name}
                </h1>

                <span className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EEF9F6] px-4 py-2 text-sm font-semibold text-[#10B981]">
                  <BadgeCheck size={17} />
                  Active
                </span>
              </div>

              <p className="mt-2 text-lg font-medium text-[#64748B]">
                {profile.role}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-[#64748B] sm:justify-start">
                <div className="flex items-center gap-2">
                  <Building2 size={17} className="text-[#10B981]" />

                  {profile.agency}
                </div>

                {profile.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={17} className="text-[#38BDF8]" />

                    {profile.email}
                  </div>
                )}

                {profile.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={17} className="text-[#F59E0B]" />

                    {profile.phone}
                  </div>
                )}

                {profile.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={17} className="text-[#1E293B]" />

                    {profile.location}
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={onEdit}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#10B981] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-lg"
          >
            <Pencil size={18} />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
