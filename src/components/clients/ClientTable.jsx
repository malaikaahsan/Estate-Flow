import ClientRow from "./ClientCard";
import { Users } from "lucide-react";

const ClientTable = ({
  clients,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-lg">

      {/* Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Client List */}
      <div className="space-y-4 p-4 sm:p-5">

        {clients.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#E2E8F0] bg-[#F8FAFC] py-16">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF9F6]">
              <Users
                size={30}
                className="text-[#10B981]"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
              No Clients Found
            </h3>

            <p className="mt-2 text-center text-sm text-[#64748B]">
              Try changing your search or filters.
            </p>

          </div>
        ) : (
          clients.map((client) => (
            <ClientRow
              key={client.id}
              client={client}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}

      </div>

    </div>
  );
};

export default ClientTable;
