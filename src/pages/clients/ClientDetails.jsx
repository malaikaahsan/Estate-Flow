import {
  Mail,
  Phone,
  MapPin,
  User,
  Home,
  Wallet,
  CalendarDays,
  BadgeCheck,
  ClipboardList,
  FileText,
  Handshake,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { clients } from "../../data/clients";

const ClientDetails = () => {
  const { id } = useParams();

  const client = clients.find((item) => item.id === Number(id));

  if (!client) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Client Not Found
          </h2>
        </div>
      </div>
    );
  }

  const statusStyles = {
    Interested: "bg-[#EEF9F6] text-[#10B981]",
    Negotiating: "bg-[#EAF7FD] text-[#38BDF8]",
    "Deal Closed": "bg-[#F1F5F9] text-[#1E293B]",
    Inactive: "bg-[#F8FAFC] text-[#64748B]",
  };

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-lg">
        <div className="h-1 bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

        <div className="relative p-6 md:p-8">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#10B981]/10 blur-3xl"></div>

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#38BDF8] text-5xl font-bold text-white shadow-xl">
              {client.name.charAt(0)}
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#10B981]">
                Client Profile
              </p>

              <h1 className="mt-2 text-3xl font-bold text-[#0F172A]">
                {client.name}
              </h1>

              <div className="mt-4 flex flex-wrap gap-3">
                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${statusStyles[client.status]}`}
                >
                  {client.status}
                </span>

                <span className="rounded-full bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-[#64748B]">
                  {client.city}
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-[#1E293B] px-8 py-6 text-center shadow-lg">
              <p className="text-sm text-white/70">Budget</p>

              <h2 className="mt-2 text-2xl font-bold text-[#10B981]">
                PKR {client.budget.toLocaleString()}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Section title="Contact Information">
          <Info icon={<Mail size={20} />} label="Email" value={client.email} />

          <Info icon={<Phone size={20} />} label="Phone" value={client.phone} />

          <Info icon={<MapPin size={20} />} label="City" value={client.city} />
        </Section>

        <Section title="Property Information">
          <Info
            icon={<Home size={20} />}
            label="Interested Property"
            value={client.interestedProperty}
          />

          <Info
            icon={<User size={20} />}
            label="Assigned Agent"
            value={client.assignedAgent}
          />

          <Info
            icon={<Wallet size={20} />}
            label="Budget"
            value={`PKR ${client.budget.toLocaleString()}`}
          />
        </Section>

        <Section title="Client Information">
          <Info
            icon={<BadgeCheck size={20} />}
            label="Status"
            value={client.status}
          />

          <Info
            icon={<CalendarDays size={20} />}
            label="Created Date"
            value={client.createdAt}
          />

          <Info
            icon={<User size={20} />}
            label="Client ID"
            value={`#${client.id}`}
          />
        </Section>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <FutureCard
          icon={<ClipboardList size={26} />}
          title="Visits"
          subtitle="Client visit history will appear here."
        />

        <FutureCard
          icon={<FileText size={26} />}
          title="Notes"
          subtitle="Private notes about the client."
        />

        <FutureCard
          icon={<Handshake size={26} />}
          title="Deals"
          subtitle="Deals and transactions timeline."
        />
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
    <h2 className="mb-6 text-xl font-bold text-[#0F172A]">{title}</h2>

    <div className="space-y-4">{children}</div>
  </div>
);

const Info = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 rounded-2xl bg-[#F8FAFC] p-4 transition hover:border-[#10B981]/20 hover:bg-white hover:shadow">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF9F6] text-[#10B981]">
      {icon}
    </div>

    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
        {label}
      </p>

      <p className="mt-1 break-words font-semibold text-[#0F172A]">{value}</p>
    </div>
  </div>
);

const FutureCard = ({ icon, title, subtitle }) => (
  <div className="rounded-3xl border border-dashed border-[#E2E8F0] bg-white p-6 text-center transition hover:border-[#10B981]/30 hover:shadow-md">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F6] text-[#10B981]">
      {icon}
    </div>

    <h3 className="mt-4 text-lg font-bold text-[#0F172A]">{title}</h3>

    <p className="mt-2 text-sm text-[#64748B]">{subtitle}</p>
  </div>
);

export default ClientDetails;
