import { useState } from "react";
import { Search, Plus } from "lucide-react";
import toast from "react-hot-toast";

import { clients } from "../../data/clients";
import { agents } from "../../data/agents";
import { properties } from "../../data/properties";
import { visits as visitData } from "../../data/visits";

import VisitCard from "../../components/visits/VisitCard";
import VisitModal from "../../components/visits/VisitModal";
import VisitCalendar from "../../components/visits/VisitCalendar";

const Visits = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visits, setVisits] = useState(visitData);

  const addVisit = (newVisit) => {
    setVisits((prev) => [
      {
        id: Date.now(),
        status: "Pending",
        ...newVisit,
      },
      ...prev,
    ]);

    toast.success("Visit scheduled successfully!");

    setIsModalOpen(false);
  };

  const filteredVisits = visits.filter((visit) => {
    const client = clients.find(
      (item) => item.id === visit.clientId
    );

    const agent = agents.find(
      (item) => item.id === visit.agentId
    );

    const property = properties.find(
      (item) => item.id === visit.propertyId
    );

    const query = search.toLowerCase();

    const matchesSearch =
      client?.name.toLowerCase().includes(query) ||
      agent?.name.toLowerCase().includes(query) ||
      property?.title.toLowerCase().includes(query);

    const matchesStatus =
      status === "All" || visit.status === status;

    return matchesSearch && matchesStatus;
  });

  const upcomingVisits = filteredVisits.filter(
    (visit) =>
      visit.status === "Pending" ||
      visit.status === "Confirmed"
  );

  const completedVisits = filteredVisits.filter(
    (visit) =>
      visit.status === "Completed" ||
      visit.status === "Cancelled"
  );

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <p className="text-sm font-semibold uppercase tracking-[3px] text-[#10B981]">
          Property Visits
        </p>

        <h1 className="mt-1 text-3xl font-bold text-[#0F172A]">
          Visits
        </h1>

        <p className="mt-2 text-[#64748B]">
          Schedule, track and manage every property visit from one place.
        </p>

      </div>
            {/* Controls */}

      <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-1 flex-col gap-4 md:flex-row">

            {/* Search */}

            <div className="relative flex-1">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                type="text"
                placeholder="Search by client, agent or property..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-4 text-[#0F172A] outline-none transition-all duration-300 placeholder:text-[#94A3B8] focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
              />

            </div>

            {/* Status Filter */}

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

          </div>

          {/* Button */}

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#10B981] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-lg"
          >
            <Plus size={18} />
            Schedule Visit
          </button>

        </div>

      </div>

      {/* Calendar */}

      <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm">

        <div className="mb-5 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-[#0F172A]">
              Visit Calendar
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Overview of all scheduled property visits.
            </p>

          </div>

        </div>

        <VisitCalendar visits={visits} />

      </div>
            {/* Upcoming Visits */}

      <section>

        <div className="mb-5 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-[#0F172A]">
              Upcoming Visits
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Pending and confirmed property visits.
            </p>

          </div>

          <span className="rounded-full bg-[#EEF9F6] px-4 py-1.5 text-sm font-semibold text-[#10B981]">
            {upcomingVisits.length}
          </span>

        </div>

        {upcomingVisits.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-[#E2E8F0] bg-white py-16 text-center shadow-sm">

            <h3 className="text-lg font-semibold text-[#0F172A]">
              No Upcoming Visits
            </h3>

            <p className="mt-2 text-[#64748B]">
              Schedule a new visit to see it here.
            </p>

          </div>

        ) : (

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {upcomingVisits.map((visit) => (

              <VisitCard
                key={visit.id}
                visit={visit}
              />

            ))}

          </div>

        )}

      </section>
            {/* Completed Visits */}

      <section>

        <div className="mb-5 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-[#0F172A]">
              Completed Visits
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Successfully completed and cancelled visits.
            </p>

          </div>

          <span className="rounded-full bg-[#F1F5F9] px-4 py-1.5 text-sm font-semibold text-[#64748B]">
            {completedVisits.length}
          </span>

        </div>

        {completedVisits.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-[#E2E8F0] bg-white py-16 text-center shadow-sm">

            <h3 className="text-lg font-semibold text-[#0F172A]">
              No Completed Visits
            </h3>

            <p className="mt-2 text-[#64748B]">
              Completed and cancelled visits will appear here.
            </p>

          </div>

        ) : (

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {completedVisits.map((visit) => (

              <VisitCard
                key={visit.id}
                visit={visit}
              />

            ))}

          </div>

        )}

      </section>

      {/* Modal */}

      <VisitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addVisit={addVisit}
      />

    </div>
  );
};

export default Visits;
