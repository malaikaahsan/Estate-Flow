import {
  Settings,
  Palette,
  Bell,
  Languages,
  Shield,
  ChevronRight,
} from "lucide-react";

const tabs = [
  {
    id: "general",
    label: "General",
    icon: Settings,
    description: "Basic account settings",
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Palette,
    description: "Theme & display",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    description: "Alerts & reminders",
  },
  {
    id: "language",
    label: "Language",
    icon: Languages,
    description: "Language & region",
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    description: "Privacy & password",
  },
];

const SettingsTabs = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm">

      {/* Heading */}

      <div className="mb-6">

        <h2 className="text-xl font-bold text-[#0F172A]">
          Settings
        </h2>

        <p className="mt-1 text-sm text-[#64748B]">
          Choose a category to update your preferences.
        </p>

      </div>

      {/* Tabs */}

      <div className="space-y-2">

        {tabs.map((tab) => {
          const Icon = tab.icon;

          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300

              ${
                active
                  ? "bg-[#10B981] text-white shadow-lg"
                  : "border border-transparent hover:border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0F172A]"
              }`}
            >

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300

                  ${
                    active
                      ? "bg-white/20"
                      : "bg-[#EEF9F6] group-hover:bg-[#10B981]/10"
                  }`}
                >
                  <Icon
                    size={20}
                    className={
                      active
                        ? "text-white"
                        : "text-[#10B981]"
                    }
                  />
                </div>

                <div className="text-left">

                  <h3 className="font-semibold">
                    {tab.label}
                  </h3>

                  <p
                    className={`text-xs

                    ${
                      active
                        ? "text-white/80"
                        : "text-[#64748B]"
                    }`}
                  >
                    {tab.description}
                  </p>

                </div>

              </div>

              <ChevronRight
                size={18}
                className={`transition-transform duration-300

                ${
                  active
                    ? "translate-x-1 text-white"
                    : "text-[#94A3B8] group-hover:translate-x-1"
                }`}
              />

            </button>
          );
        })}

      </div>

    </div>
  );
};

export default SettingsTabs;