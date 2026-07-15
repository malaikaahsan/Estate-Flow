import { activities } from "../../data/activityData";

const RecentActivity = () => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)] sm:p-7">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-[#10B981]/10 blur-3xl transition-all duration-500 group-hover:bg-[#38BDF8]/10"></div>

      <div className="relative mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#10B981]">
            Timeline
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#0F172A]">
            Recent Activity
          </h2>
        </div>

        <div className="rounded-2xl bg-[#EEF9F6] px-4 py-2 text-sm font-semibold text-[#10B981]">
          Live
        </div>
      </div>

      <div className="relative flex-1 space-y-5">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="group/item relative flex items-start justify-between gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-[#38BDF8] hover:bg-white hover:shadow-md"
          >
            {index !== activities.length - 1 && (
              <div className="absolute left-[33px] top-16 h-8 w-[2px] bg-[#E2E8F0]"></div>
            )}

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] font-bold text-white shadow-lg transition-transform duration-300 group-hover/item:scale-105">
                {activity.avatar}
              </div>

              <div>
                <p className="leading-6 text-[#64748B]">
                  <span className="font-semibold text-[#0F172A]">
                    {activity.user}
                  </span>{" "}
                  {activity.message}
                </p>

                <p className="mt-2 text-sm text-[#94A3B8]">{activity.time}</p>
              </div>
            </div>

            <span
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                activity.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : activity.status === "Pending"
                    ? "bg-amber-100 text-amber-700"
                    : activity.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-sky-100 text-sky-700"
              }`}
            >
              {activity.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
