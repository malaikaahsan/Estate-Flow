import {
  Calendar,
  Clock,
  User,
  Building2,
  BadgeCheck,
  MapPin,
} from "lucide-react";

import { clients } from "../../data/clients";
import { properties } from "../../data/properties";
import { agents } from "../../data/agents";

const VisitCard = ({ visit }) => {
  const client = clients.find((item) => item.id === visit.clientId);

  const property = properties.find((item) => item.id === visit.propertyId);

  const agent = agents.find((item) => item.id === visit.agentId);

  const statusColors = {
    Pending: "bg-[#FEF3C7] text-[#F59E0B]",
    Confirmed: "bg-[#EAF7FD] text-[#38BDF8]",
    Completed: "bg-[#EEF9F6] text-[#10B981]",
    Cancelled: "bg-[#FEF2F2] text-[#EF4444]",
  };

  const details = [
    {
      icon: User,
      label: "Client",
      value: client?.name,
      color: "text-[#10B981]",
      bg: "bg-[#EEF9F6]",
    },
    {
      icon: BadgeCheck,
      label: "Agent",
      value: agent?.name,
      color: "text-[#38BDF8]",
      bg: "bg-[#EAF7FD]",
    },
    {
      icon: MapPin,
      label: "Location",
      value: property?.city,
      color: "text-[#1E293B]",
      bg: "bg-[#F1F5F9]",
    },
    {
      icon: Calendar,
      label: "Date",
      value: visit.date,
      color: "text-[#10B981]",
      bg: "bg-[#EEF9F6]",
    },
    {
      icon: Clock,
      label: "Time",
      value: visit.time,
      color: "text-[#F59E0B]",
      bg: "bg-[#FEF3C7]",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-[#0F172A]">
            {property?.title}
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">{property?.city}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${statusColors[visit.status]}`}
        >
          {visit.status}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
        <Info icon={User} value={client?.name} color="text-[#10B981]" />

        <Info icon={BadgeCheck} value={agent?.name} color="text-[#38BDF8]" />

        <Info icon={Calendar} value={visit.date} color="text-[#10B981]" />

        <Info icon={Clock} value={visit.time} color="text-[#F59E0B]" />
      </div>

      {visit.notes && (
        <div className="mt-4 border-t border-[#E2E8F0] pt-3">
          <p className="line-clamp-2 text-sm text-[#64748B]">{visit.notes}</p>
        </div>
      )}
    </div>
  );
};
const Info = ({ icon: Icon, value, color }) => (
  <div className="flex items-center gap-2">
    <Icon size={16} className={color} />

    <span className="truncate text-sm font-medium text-[#0F172A]">{value}</span>
  </div>
);
export default VisitCard;
