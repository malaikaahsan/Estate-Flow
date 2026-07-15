import { useState } from "react";
import { Users } from "lucide-react";

import useAgents from "../../hooks/useAgents";
import toast from "react-hot-toast";

import AgentStats from "../../components/agents/AgentStats";
import AgentFilters from "../../components/agents/AgentFilters";
import AgentGrid from "../../components/agents/AgentGrid";
import AgentModal from "../../components/agents/AgentModal";

const Agents = () => {
  const { agents, setAgents, search, setSearch, filters, setFilters } =
    useAgents();

  const [showModal, setShowModal] = useState(false);
  const [editingAgent, setEditingAgent] = useState(null);

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-7">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#10B981]/10 blur-3xl" />

        <div className="absolute -bottom-16 left-0 h-36 w-36 rounded-full bg-[#38BDF8]/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#10B981] to-[#38BDF8] text-white shadow-lg">
              <Users size={28} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#10B981]">
                EstateFlow
              </p>

              <h1 className="mt-1 text-3xl font-bold text-[#0F172A]">Agents</h1>

              <p className="mt-2 text-sm text-[#64748B]">
                Manage your real estate agents, monitor their performance and
                keep track of listings.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              Total Agents
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#10B981]">
              {agents.length}
            </h2>
          </div>
        </div>
      </section>

      <AgentStats agents={agents} />

      <AgentFilters
        search={search}
        setSearch={setSearch}
        filters={filters}
        setFilters={setFilters}
        onAddAgent={() => {
          setEditingAgent(null);
          setShowModal(true);
        }}
      />

      <AgentGrid
        agents={agents}
        onEdit={(agent) => {
          setEditingAgent(agent);
          setShowModal(true);
        }}
      />

      <AgentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        editingAgent={editingAgent}
        onSave={(agent) => {
          if (editingAgent) {
            setAgents((prev) =>
              prev.map((item) =>
                item.id === editingAgent.id ? { ...item, ...agent } : item,
              ),
            );
            toast.success("Agent updated successfully!");
          } else {
            setAgents((prev) => [
              {
                id: Date.now(),
                image: "https://i.pravatar.cc/300",
                properties: 0,
                about: "",
                currentListings: 0,
                propertiesSold: 0,
                reviews: 0,
                ...agent,
              },
              ...prev,
            ]);
            toast.success("Agent added successfully!");
          }
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default Agents;
