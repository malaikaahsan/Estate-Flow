import { useMemo, useState } from "react";
import { agents as agentData } from "../data/agents";

const useAgents = () => {
  const [agents, setAgents] = useState(agentData);

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    specialization: "",
    experience: "",
    rating: "",
  });

  const filteredAgents = useMemo(() => {
    let data = [...agents];

    if (search) {
      const query = search.toLowerCase();

      data = data.filter(
        (agent) =>
          agent.name.toLowerCase().includes(query) ||
          agent.email.toLowerCase().includes(query) ||
          agent.phone.includes(query)
      );
    }

    if (filters.specialization) {
      data = data.filter(
        (agent) =>
          agent.specialization ===
          filters.specialization
      );
    }

    if (filters.experience) {
      data = data.filter(
        (agent) =>
          agent.experience === filters.experience
      );
    }

    if (filters.rating) {
      data = data.filter(
        (agent) =>
          agent.rating >= Number(filters.rating)
      );
    }

    return data;
  }, [agents, search, filters]);

  return {
    agents: filteredAgents,
    setAgents,

    search,
    setSearch,

    filters,
    setFilters,
  };
};

export default useAgents;