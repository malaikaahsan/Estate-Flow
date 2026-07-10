import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { visitsData } from "../../data/chartData";

const VisitsChart = () => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)] sm:p-7">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Glow */}
      <div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-[#10B981]/10 blur-3xl transition-all duration-500 group-hover:bg-[#38BDF8]/10"></div>

      {/* Header */}
      <div className="relative mb-8 flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#10B981]">
            Traffic
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#0F172A]">
            Property Visits
          </h2>
        </div>

        <div className="rounded-2xl bg-[#EEF9F6] px-4 py-2 text-sm font-semibold text-[#10B981]">
          Monthly
        </div>

      </div>

      {/* Chart */}
      <div className="relative flex-1 min-h-[300px] sm:min-h-[340px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={visitsData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <CartesianGrid
              stroke="#E2E8F0"
              strokeDasharray="5 5"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{
                fill: "#10B981",
                fillOpacity: 0.08,
              }}
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 15px 35px rgba(15,23,42,.12)",
              }}
              labelStyle={{
                color: "#0F172A",
                fontWeight: 600,
              }}
              itemStyle={{
                color: "#10B981",
                fontWeight: 600,
              }}
            />

            <Bar
              dataKey="visits"
              fill="#10B981"
              radius={[12, 12, 0, 0]}
              maxBarSize={42}
              animationDuration={1200}
              animationEasing="ease-out"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default VisitsChart;