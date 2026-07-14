import { useState } from "react";
import toast from "react-hot-toast";
import { Palette } from "lucide-react";

const AppearanceSettings = ({
  settings,
  setSettings,
}) => {
  const appearance = settings.appearance;

  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      appearance: {
        ...appearance,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSaving(true);

    setTimeout(() => {
      toast.success("Appearance settings updated successfully!");
      setSaving(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6"
    >
      {/* Header */}

      <div className="mb-8 flex items-start gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F6]">

          <Palette
            size={26}
            className="text-[#10B981]"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-[#0F172A]">
            Appearance Settings
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Customize your dashboard theme, layout, font size
            and sidebar preferences.
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Theme */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Theme
          </label>

          <select
            name="theme"
            value={appearance.theme}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>

        </div>

        {/* Font Size */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Font Size
          </label>

          <select
            name="fontSize"
            value={appearance.fontSize}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

        </div>

        {/* Sidebar */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Sidebar Style
          </label>

          <select
            name="sidebar"
            value={appearance.sidebar}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          >
            <option value="expanded">Expanded</option>
            <option value="collapsed">Collapsed</option>
          </select>

        </div>

        {/* Layout */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Layout Density
          </label>

          <select
            name="layout"
            value={appearance.layout}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          >
            <option value="comfortable">Comfortable</option>
            <option value="compact">Compact</option>
          </select>

        </div>

      </div>

      {/* Save Button */}

      <div className="mt-8">

        <button
          type="submit"
          disabled={saving}
          className={`rounded-2xl px-7 py-3 font-semibold text-white transition-all duration-300 ${
            saving
              ? "cursor-not-allowed bg-[#94A3B8]"
              : "bg-[#10B981] hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-lg"
          }`}
        >
          {saving ? "Saving..." : "Save Appearance"}
        </button>

      </div>

    </form>
  );
};

export default AppearanceSettings;