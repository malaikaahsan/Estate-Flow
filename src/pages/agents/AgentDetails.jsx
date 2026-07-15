import { useParams } from "react-router-dom";
import { agents } from "../../data/agents";
import { properties } from "../../data/properties";

import AgentStat from "../../components/agents/AgentStat";
import AgentAbout from "../../components/agents/AgentAbout";
import AgentContact from "../../components/agents/AgentContact";
import AgentHero from "../../components/agents/AgentHero";
import AgentProperties from "../../components/agents/AgentProperties";
import AgentRecentSales from "../../components/agents/AgentRecentSales";
import AgentReviews from "../../components/agents/AgentReviews";

const AgentDetails = () => {
  const { id } = useParams();

  const agent = agents.find((item) => item.id === Number(id));

  if (!agent) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl border border-[#E2E8F0] bg-white px-8 py-10 text-center shadow-lg">
          <h1 className="text-3xl font-bold text-[#0F172A]">Agent Not Found</h1>

          <p className="mt-3 text-[#64748B]">
            The requested agent could not be found.
          </p>
        </div>
      </div>
    );
  }

  const assignedProperties = properties.filter(
    (property) => property.agentId === agent.id,
  );

  const recentSales = assignedProperties
    .filter((property) => property.status === "Sold")
    .slice(0, 3);

  const reviews = [
    {
      id: 1,
      name: "Ali Ahmed",
      rating: 5,
      comment: "Excellent service and very professional.",
      date: "12 Jun 2026",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Sara Khan",
      rating: 4,
      comment: "Helped us find our dream home quickly.",
      date: "28 May 2026",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Usman Malik",
      rating: 5,
      comment: "Highly recommended agent.",
      date: "17 Apr 2026",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <div className="space-y-6">
      <AgentHero agent={agent} />

      <AgentStat agent={agent} />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AgentAbout agent={agent} />
        </div>

        <div>
          <AgentContact agent={agent} />
        </div>
      </div>

      <AgentProperties properties={assignedProperties} />

      <AgentRecentSales sales={recentSales} />

      <AgentReviews reviews={reviews} />
    </div>
  );
};

export default AgentDetails;
