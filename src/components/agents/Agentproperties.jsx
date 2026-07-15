import { Building2 } from "lucide-react";
import PropertyCard from "../property/PropertyCard";

const AgentProperties = ({ properties }) => {
  return (
    <section className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6]">
            <Building2 size={20} className="text-[#10B981]" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0F172A]">
              Assigned Properties
            </h2>

            <p className="text-sm text-[#64748B]">
              {properties.length}{" "}
              {properties.length === 1 ? "Property" : "Properties"} Assigned
            </p>
          </div>
        </div>
      </div>

      {properties.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#E2E8F0] bg-[#F8FAFC] px-6 py-12 text-center">
          <Building2 size={42} className="mb-3 text-[#CBD5E1]" />

          <h3 className="text-lg font-semibold text-[#0F172A]">
            No Properties Found
          </h3>

          <p className="mt-2 text-sm text-[#64748B]">
            This agent doesn't have any assigned properties yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AgentProperties;
