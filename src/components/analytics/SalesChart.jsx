import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const SalesChart = ({ data }) => {
  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
          Monthly Sales
        </h2>

        <p className="mt-1 text-sm text-[#64748B]">
          Properties sold each month
        </p>
      </div>

      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={data}>
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
            formatter={(value) => [value, "Properties Sold"]}
          />

          <Bar dataKey="sales" fill="#1E293B" radius={[12, 12, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
