import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const CityChart = ({ data }) => {
  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
          Properties by City
        </h2>

        <p className="mt-1 text-sm text-[#64748B]">
          Distribution of listed properties across cities
        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={330}
      >
        <BarChart data={data}>

          <CartesianGrid
            stroke="#E2E8F0"
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            dataKey="city"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#64748B",
              fontSize: 12,
            }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#64748B",
              fontSize: 12,
            }}
          />

          <Tooltip
            cursor={{ fill: "#F8FAFC" }}
            contentStyle={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              boxShadow: "0 12px 30px rgba(15,23,42,.08)",
            }}
            formatter={(value) => [
              value,
              "Properties",
            ]}
          />

          <Bar
            dataKey="properties"
            fill="#10B981"
            radius={[12, 12, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default CityChart;