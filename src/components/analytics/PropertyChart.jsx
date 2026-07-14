import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#10B981", // Emerald
  "#38BDF8", // Sky Blue
  "#1E293B", // Deep Slate
  "#F59E0B", // Amber
  "#22C55E", // Success Green
  "#64748B", // Slate Gray
];

const PropertyChart = ({ data }) => {
  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
          Property Types
        </h2>

        <p className="mt-1 text-sm text-[#64748B]">
          Distribution of properties by category
        </p>

      </div>

      <ResponsiveContainer width="100%" height={330}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
            cornerRadius={8}
            label={({ percent }) =>
              `${(percent * 100).toFixed(0)}%`
            }
          >

            {data.map((entry, index) => (
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
              boxShadow:
                "0 10px 30px rgba(15,23,42,.08)",
            }}
          />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              paddingTop: 20,
              fontSize: 13,
            }}
          />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
};

export default PropertyChart;