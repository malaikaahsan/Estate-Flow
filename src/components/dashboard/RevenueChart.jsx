import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { revenueData } from "../../data/chartData";

const RevenueChart = () => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)] sm:p-7">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#38BDF8]/10 blur-3xl transition-all duration-500 group-hover:bg-[#10B981]/15"></div>

      <div className="relative mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#10B981]">
            Analytics
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#0F172A]">
            Monthly Revenue
          </h2>
        </div>

        <div className="rounded-2xl bg-[#EEF9F6] px-4 py-2 text-sm font-semibold text-[#10B981]">
          This Year
        </div>
      </div>

      <div className="relative flex-1 min-h-[300px] sm:min-h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
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
                stroke: "#38BDF8",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFF",
                boxShadow: "0 12px 30px rgba(15,23,42,.12)",
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10B981"
              strokeWidth={4}
              dot={{
                r: 4,
                fill: "#10B981",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: "#38BDF8",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
