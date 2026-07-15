import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const RevenueChart = ({ data }) => {
  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
            Monthly Revenue
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Revenue generated over time
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={330}>
        <LineChart data={data}>
          <CartesianGrid stroke="#E2E8F0" strokeDasharray="4 4" />

          <XAxis
            dataKey="month"
            tick={{
              fill: "#64748B",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tickFormatter={(value) => `$${value / 1000}K`}
            tick={{
              fill: "#64748B",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "16px",
              border: "1px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(15,23,42,.08)",
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#10B981"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#10B981",
              stroke: "#fff",
              strokeWidth: 3,
            }}
            activeDot={{
              r: 8,
              fill: "#38BDF8",
              stroke: "#fff",
              strokeWidth: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
