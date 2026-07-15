import { useState } from "react";
import toast from "react-hot-toast";
import { Bell } from "lucide-react";

const NotificationSettings = ({ settings, setSettings }) => {
  const notifications = settings.notifications;

  const [saving, setSaving] = useState(false);

  const handleToggle = (key) => {
    setSettings({
      ...settings,
      notifications: {
        ...notifications,
        [key]: !notifications[key],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSaving(true);

    setTimeout(() => {
      toast.success("Notification preferences updated!");
      setSaving(false);
    }, 1000);
  };

  const options = [
    {
      key: "email",
      label: "Email Notifications",
      description: "Receive important updates via email.",
    },
    {
      key: "sms",
      label: "SMS Notifications",
      description: "Get instant alerts on your mobile phone.",
    },
    {
      key: "browser",
      label: "Browser Notifications",
      description: "Show desktop notifications while using the app.",
    },
    {
      key: "marketing",
      label: "Marketing Emails",
      description: "Receive promotional offers and announcements.",
    },
    {
      key: "weekly",
      label: "Weekly Reports",
      description: "Get weekly performance summaries.",
    },
    {
      key: "monthly",
      label: "Monthly Reports",
      description: "Receive monthly business reports.",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="mb-8 flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FD]">
          <Bell size={26} className="text-[#38BDF8]" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#0F172A]">
            Notification Preferences
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Choose how and when you want to receive updates, reports, and
            alerts.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {options.map((option) => (
          <div
            key={option.key}
            className="flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-[#10B981]/40 hover:bg-white"
          >
            <div className="pr-4">
              <h3 className="font-semibold text-[#0F172A]">{option.label}</h3>

              <p className="mt-1 text-sm text-[#64748B]">
                {option.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleToggle(option.key)}
              className={`relative h-8 w-14 rounded-full transition-all duration-300 ${
                notifications[option.key] ? "bg-[#10B981]" : "bg-[#CBD5E1]"
              }`}
            >
              <span
                className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 ${
                  notifications[option.key] ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={saving}
        className={`mt-8 rounded-2xl px-7 py-3 font-semibold text-white transition-all duration-300 ${
          saving
            ? "cursor-not-allowed bg-[#94A3B8]"
            : "bg-[#10B981] hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-lg"
        }`}
      >
        {saving ? "Saving..." : "Save Preferences"}
      </button>
    </form>
  );
};

export default NotificationSettings;
