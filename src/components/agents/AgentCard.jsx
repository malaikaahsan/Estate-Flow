import { Link } from "react-router-dom";
import {
  Star,
  Briefcase,
  Building2,
  TrendingUp,
  Eye,
  Pencil,
} from "lucide-react";

const AgentCard = ({ agent, onEdit }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-xl">
      <div className="relative p-5">
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#10B981]/10 blur-3xl" />

        <div className="relative flex flex-col items-center text-center">
          <img
            src={agent.image}
            alt={agent.name}
            className="h-24 w-24 rounded-full border-4 border-[#EEF9F6] object-cover shadow-md transition duration-300 group-hover:scale-105"
          />

          <h2 className="mt-4 text-xl font-bold text-[#0F172A]">
            {agent.name}
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">{agent.specialization}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-5">
        <Stat
          icon={<Star size={16} fill="currentColor" />}
          color="text-[#F59E0B]"
          bg="bg-[#FEF3C7]"
          value={agent.rating}
          label="Rating"
        />

        <Stat
          icon={<TrendingUp size={16} />}
          color="text-[#10B981]"
          bg="bg-[#EEF9F6]"
          value={agent.sales}
          label="Sales"
        />

        <Stat
          icon={<Building2 size={16} />}
          color="text-[#38BDF8]"
          bg="bg-[#EAF7FD]"
          value={agent.propertiesManaged}
          label="Managed"
        />

        <Stat
          icon={<Briefcase size={16} />}
          color="text-[#1E293B]"
          bg="bg-[#F1F5F9]"
          value={agent.experience}
          label="Experience"
        />
      </div>

      <div className="mt-5 flex gap-3 border-t border-[#E2E8F0] p-5">
        <Link
          to={`/agents/${agent.id}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#10B981] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#059669]"
        >
          <Eye size={18} />
          View
        </Link>

        <button
          onClick={() => onEdit(agent)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#1E293B] transition-all duration-300 hover:border-[#38BDF8] hover:bg-[#EAF7FD] hover:text-[#38BDF8]"
        >
          <Pencil size={18} />
        </button>
      </div>
    </div>
  );
};

const Stat = ({ icon, value, label, color, bg }) => (
  <div className="rounded-2xl bg-[#F8FAFC] p-3 transition-all duration-300 hover:bg-white hover:shadow-sm">
    <div className="flex items-center gap-2">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${bg} ${color}`}
      >
        {icon}
      </div>

      <span className="text-base font-bold text-[#0F172A]">{value}</span>
    </div>

    <p className="mt-2 text-xs font-medium text-[#64748B]">{label}</p>
  </div>
);

export default AgentCard;
