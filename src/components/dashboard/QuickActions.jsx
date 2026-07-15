import { quickActions } from "../../data/quickActions";

const QuickActions = () => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)] sm:p-7">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      <div className="absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-[#10B981]/10 blur-3xl transition-all duration-500 group-hover:bg-[#38BDF8]/10"></div>

      <div className="relative mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#38BDF8]">
            Shortcuts
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#0F172A]">
            Quick Actions
          </h2>
        </div>

        <div className="rounded-2xl bg-[#EEF9F6] px-4 py-2 text-sm font-semibold text-[#10B981]">
          Manage
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group/action relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8] hover:bg-white hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/0 via-[#38BDF8]/0 to-[#10B981]/5 opacity-0 transition-opacity duration-300 group-hover/action:opacity-100"></div>

              <div className="relative flex flex-col items-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-md transition-all duration-300 group-hover/action:scale-110 group-hover/action:rotate-3 ${action.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-center text-base font-semibold text-[#0F172A]">
                  {action.title}
                </h3>

                <p className="mt-1 text-center text-xs text-[#64748B]">
                  Quick access
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
