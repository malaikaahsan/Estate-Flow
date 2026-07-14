import { useMemo, useState } from "react";
import {
  ArrowUpDown,
  Star,
  DollarSign,
  BadgeCheck,
} from "lucide-react";

const TopAgentsTable = ({ agents }) => {
  const [sortBy, setSortBy] = useState("sales");
  const [order, setOrder] = useState("desc");

  const sortedAgents = useMemo(() => {
    const data = [...agents];

    data.sort((a, b) => {
      if (order === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      }

      return a[sortBy] < b[sortBy] ? 1 : -1;
    });

    return data;
  }, [agents, sortBy, order]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setOrder((prev) =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSortBy(field);
      setOrder("desc");
    }
  };

  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <h2 className="text-xl font-bold text-[#0F172A]">
            Top Performing Agents
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Agents ranked by sales performance.
          </p>

        </div>

        <div className="rounded-xl bg-[#EEF9F6] px-4 py-2 text-sm font-semibold text-[#10B981]">
          {sortedAgents.length} Agents
        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          {/* Head */}

          <thead>

            <tr className="border-b border-[#E2E8F0] text-left">

              <th className="pb-4 text-sm font-semibold text-[#64748B]">
                Agent
              </th>

              <th
                onClick={() => handleSort("sales")}
                className="cursor-pointer pb-4 text-sm font-semibold text-[#64748B]"
              >
                <div className="flex items-center gap-2 hover:text-[#10B981]">
                  Sales

                  <ArrowUpDown size={15} />
                </div>
              </th>

              <th
                onClick={() => handleSort("revenue")}
                className="cursor-pointer pb-4 text-sm font-semibold text-[#64748B]"
              >
                <div className="flex items-center gap-2 hover:text-[#10B981]">
                  Revenue

                  <ArrowUpDown size={15} />
                </div>
              </th>

              <th className="pb-4 text-sm font-semibold text-[#64748B]">
                Rating
              </th>

              <th className="pb-4 text-sm font-semibold text-[#64748B]">
                Deals
              </th>

            </tr>

          </thead>

          {/* Body */}

          <tbody>

            {sortedAgents.map((agent) => (

              <tr
                key={agent.id}
                className="border-b border-[#F1F5F9] transition-all duration-300 hover:bg-[#F8FAFC]"
              >

                {/* Agent */}

                <td className="py-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6] text-lg font-bold text-[#10B981]">

                      {agent.name.charAt(0)}

                    </div>

                    <div>

                      <h3 className="font-semibold text-[#0F172A]">
                        {agent.name}
                      </h3>

                      <p className="text-sm text-[#64748B]">
                        Real Estate Agent
                      </p>

                    </div>

                  </div>

                </td>

                {/* Sales */}

                <td>

                  <div className="inline-flex rounded-xl bg-[#EAF7FD] px-3 py-2 font-semibold text-[#38BDF8]">

                    {agent.sales}

                  </div>

                </td>

                {/* Revenue */}

                <td>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-[#EEF9F6] px-3 py-2 font-semibold text-[#10B981]">

                    <DollarSign size={16} />

                    ${agent.revenue.toLocaleString()}

                  </div>

                </td>

                {/* Rating */}

                <td>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-[#FEF3C7] px-3 py-2 font-semibold text-[#F59E0B]">

                    <Star
                      size={16}
                      fill="currentColor"
                    />

                    {agent.rating}

                  </div>

                </td>

                {/* Deals */}

                <td>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-[#F1F5F9] px-3 py-2 font-semibold text-[#1E293B]">

                    <BadgeCheck size={16} />

                    {agent.closedDeals}

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default TopAgentsTable;