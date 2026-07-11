import { useState } from "react";
import toast from "react-hot-toast";
import { Users } from "lucide-react";

import useClients from "../../hooks/useClients";
import ClientTable from "../../components/clients/ClientTable";
import ClientFilters from "../../components/clients/ClientFilters";
import ClientModal from "../../components/clients/ClientModal";

const Clients = () => {
  const {
    clients,
    setClients,
    search,
    setSearch,
    filters,
    setFilters,
  } = useClients();

  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);

  const handleSaveClient = (client) => {
    setClients((prev) => {
      const exists = prev.some((item) => item.id === client.id);

      if (exists) {
        toast.success("Client updated successfully!");

        return prev.map((item) =>
          item.id === client.id ? client : item
        );
      }

      toast.success("Client added successfully!");

      return [client, ...prev];
    });

    setShowModal(false);
    setEditingClient(null);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this client?"
    );

    if (!confirmed) return;

    setClients((prev) =>
      prev.filter((client) => client.id !== id)
    );

    toast.success("Client deleted successfully!");
  };

  const handleEdit = (client) => {
    setEditingClient(client);
    setShowModal(true);
  };

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">

        {/* Accent */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Left */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">
              Customer Management
            </p>

            <h1 className="mt-1 text-2xl font-bold text-[#0F172A] sm:text-3xl">
              Clients
            </h1>

            <p className="mt-2 max-w-xl text-sm text-[#64748B]">
              Manage customer inquiries, client information and
              relationships from one place.
            </p>

          </div>

          {/* Right */}
          <div className="flex w-fit items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6]">
              <Users
                size={22}
                className="text-[#10B981]"
              />
            </div>

            <div>

              <p className="text-xs uppercase tracking-wide text-[#64748B]">
                Total Clients
              </p>

              <h2 className="text-2xl font-bold text-[#10B981]">
                {clients.length}
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* Filters */}
      <ClientFilters
        search={search}
        setSearch={setSearch}
        filters={filters}
        setFilters={setFilters}
        onAddClient={() => setShowModal(true)}
      />

      {/* Table */}
      <ClientTable
        clients={clients}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal */}
      {showModal && (
        <ClientModal
          client={editingClient}
          onClose={() => {
            setShowModal(false);
            setEditingClient(null);
          }}
          onSave={handleSaveClient}
        />
      )}

    </div>
  );
};

export default Clients;
