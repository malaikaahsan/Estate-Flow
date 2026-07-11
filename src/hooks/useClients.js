import { useMemo, useState } from "react";
import { clients as clientData } from "../data/clients";

const useClients = () => {
  const [clients, setClients] = useState(clientData);

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    status: "",
    city: "",
    budget: "",
  });

  const filteredClients = useMemo(() => {
    let data = [...clients];

    if (search) {
      const query = search.toLowerCase();

      data = data.filter(
        (client) =>
          client.name.toLowerCase().includes(query) ||
          client.email.toLowerCase().includes(query) ||
          client.phone.includes(query) ||
          client.interestedProperty
            .toLowerCase()
            .includes(query)
      );
    }

    if (filters.status) {
      data = data.filter(
        (client) => client.status === filters.status
      );
    }

    if (filters.city) {
      data = data.filter(
        (client) => client.city === filters.city
      );
    }

    if (filters.budget) {
      data = data.filter(
        (client) =>
          client.budget <= Number(filters.budget)
      );
    }

    return data;
  }, [clients, search, filters]);

  return {
    clients: filteredClients,

    setClients,

    search,
    setSearch,

    filters,
    setFilters,
  };
};

export default useClients;