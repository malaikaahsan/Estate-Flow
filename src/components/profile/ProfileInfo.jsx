import {
  Mail,
  Phone,
  Building2,
  Briefcase,
  MapPin,
  User,
  Info,
} from "lucide-react";

const ProfileInfo = ({ profile }) => {
  const info = [
    {
      icon: User,
      label: "Full Name",
      value: profile.name,
    },
    {
      icon: Mail,
      label: "Email Address",
      value: profile.email,
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: profile.phone,
    },
    {
      icon: Building2,
      label: "Agency",
      value: profile.agency,
    },
    {
      icon: Briefcase,
      label: "Experience",
      value: profile.experience,
    },
    {
      icon: Briefcase,
      label: "Department",
      value: profile.department,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
    },
    {
      icon: User,
      label: "Role",
      value: profile.role,
    },
  ];

  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">

      {/* Header */}

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F6]">

          <Info
            size={26}
            className="text-[#10B981]"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-[#0F172A]">
            Profile Information
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Personal and professional details associated with your account.
          </p>

        </div>

      </div>

      {/* Info Grid */}

      <div className="grid gap-5 sm:grid-cols-2">

        {info.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981] hover:bg-white hover:shadow-md"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF9F6] transition-all duration-300 group-hover:bg-[#10B981]">

                  <Icon
                    size={20}
                    className="text-[#10B981] transition-all duration-300 group-hover:text-white"
                  />

                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-sm font-medium text-[#64748B]">
                    {item.label}
                  </p>

                  <h3 className="mt-1 break-words text-base font-semibold text-[#0F172A]">
                    {item.value || "-"}
                  </h3>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default ProfileInfo;