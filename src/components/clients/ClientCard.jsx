import { Eye, Pencil, Trash2, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ClientCard = ({ client, onEdit, onDelete }) => {
  const statusStyles = {
    Interested: "bg-[#EEF9F6] text-[#10B981]",
    Negotiating: "bg-[#EAF7FD] text-[#38BDF8]",
    "Deal Closed": "bg-[#F1F5F9] text-[#1E293B]",
    Inactive: "bg-[#F8FAFC] text-[#64748B]",
  };

  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-lg">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#10B981] to-[#38BDF8] text-lg font-bold text-white shadow">
            {client.name.charAt(0)}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate text-lg font-bold text-[#0F172A]">
                {client.name}
              </h3>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[client.status]}`}
              >
                {client.status}
              </span>
            </div>

            <div className="mt-2 flex min-w-0 items-center gap-2 text-sm text-[#64748B]">
              <Mail size={15} className="shrink-0 text-[#10B981]" />

              <span className="truncate">{client.email}</span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-[#F8FAFC] px-3 py-2">
                <MapPin size={15} className="text-[#10B981]" />

                <span className="text-sm font-medium text-[#0F172A]">
                  {client.city}
                </span>
              </div>

              <div className="rounded-full bg-[#EEF9F6] px-3 py-2">
                <span className="text-sm font-semibold text-[#10B981]">
                  PKR {client.budget.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-[#E2E8F0] pt-4 sm:border-0 sm:pt-0">
          <Link
            to={`/clients/${client.id}`}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF9F6] text-[#10B981] transition-all duration-300 hover:bg-[#10B981] hover:text-white"
          >
            <Eye size={18} />
          </Link>

          <button
            onClick={() => onEdit(client)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7FD] text-[#38BDF8] transition-all duration-300 hover:bg-[#38BDF8] hover:text-white"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(client.id)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEF2F2] text-[#EF4444] transition-all duration-300 hover:bg-[#EF4444] hover:text-white"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
