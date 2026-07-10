import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { propertyTypeData } from "../../data/chartData";

const COLORS = [
  "#10B981", // Emerald
  "#38BDF8", // Sky Blue
  "#1E293B", // Deep Slate
  "#F59E0B", // Amber
];

const PropertyTypeChart = () => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)] sm:p-7">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Glow */}
      <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-[#10B981]/10 blur-3xl"></div>

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#38BDF8]">
            Distribution
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#0F172A]">
            Property Types
          </h2>
        </div>

      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[300px] sm:min-h-[340px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={propertyTypeData}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={105}
              paddingAngle={4}
            >
              {propertyTypeData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 12px 30px rgba(15,23,42,.12)",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-4">

        {propertyTypeData.map((item, index) => (

          <div
            key={item.name}
            className="flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 transition-all duration-300 hover:border-[#38BDF8] hover:bg-white"
          >

            <div className="flex items-center gap-3">

              <span
                className="h-3.5 w-3.5 rounded-full"
                style={{
                  backgroundColor: COLORS[index % COLORS.length],
                }}
              ></span>

              <span className="text-sm font-medium text-[#0F172A]">
                {item.name}
              </span>

            </div>

            <span className="text-sm font-semibold text-[#64748B]">
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default PropertyTypeChart;