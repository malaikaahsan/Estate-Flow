import {
  Mail,
  Phone,
  Building2,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

const AgentContact = ({ agent }) => {
  const details = [
    {
      icon: Mail,
      label: "Email",
      value: agent.email,
      color: "text-[#10B981]",
      bg: "bg-[#EEF9F6]",
    },
    {
      icon: Phone,
      label: "Phone",
      value: agent.phone,
      color: "text-[#38BDF8]",
      bg: "bg-[#EAF7FD]",
    },
    {
      icon: Building2,
      label: "Current Listings",
      value: agent.currentListings,
      color: "text-[#1E293B]",
      bg: "bg-[#F1F5F9]",
    },
    {
      icon: BadgeCheck,
      label: "Properties Sold",
      value: agent.propertiesSold,
      color: "text-[#F59E0B]",
      bg: "bg-[#FEF3C7]",
    },
  ];

  return (
   <section className="flex h-full flex-col rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">

      {/* Header */}
      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6]">
          <Phone
            size={20}
            className="text-[#10B981]"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0F172A]">
            Contact Information
          </h2>

          <p className="text-sm text-[#64748B]">
            Agent contact details
          </p>
        </div>

      </div>

      {/* Details */}
   <div className="flex-1 space-y-3">

        {details.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-3 transition-all duration-300 hover:bg-white hover:shadow-md"
            >

              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.bg}`}
              >
                <Icon
                  size={18}
                  className={item.color}
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
                  {item.label}
                </p>

                <p className="truncate font-semibold text-[#0F172A]">
                  {item.value}
                </p>
              </div>

            </div>
          );
        })}

      </div>

      {/* Button */}
      <button
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#10B981] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#059669] hover:shadow-lg"
      >
        <MessageCircle size={18} />
        Contact Agent
      </button>

    </section>
  );
};

export default AgentContact;