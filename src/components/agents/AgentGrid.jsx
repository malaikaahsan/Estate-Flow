import { Users } from "lucide-react";
import AgentCard from "./AgentCard";

const AgentGrid = ({ agents, onEdit }) => {
  if (agents.length === 0) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm">

        <div className="max-w-md text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#EEF9F6]">

            <Users
              size={36}
              className="text-[#10B981]"
            />

          </div>

          <h2 className="mt-6 text-2xl font-bold text-[#0F172A]">
            No Agents Found
          </h2>

          <p className="mt-2 text-[#64748B] leading-7">
            We couldn't find any agents matching your current search or
            filters. Try adjusting your search criteria or add a new agent.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          agent={agent}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default AgentGrid;