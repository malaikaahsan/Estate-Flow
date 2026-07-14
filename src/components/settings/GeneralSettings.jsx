import { useState } from "react";
import toast from "react-hot-toast";
import { Settings } from "lucide-react";

const GeneralSettings = ({
  settings,
  setSettings,
}) => {
  const general = settings.general;

  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      general: {
        ...general,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !general.agencyName ||
      !general.email ||
      !general.phone
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    setSaving(true);

    setTimeout(() => {
      toast.success("General settings updated successfully!");
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

          <Settings
            size={26}
            className="text-[#10B981]"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-[#0F172A]">
            General Settings
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Manage your agency information, contact details,
            address and regional preferences.
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Agency Name */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Agency Name *
          </label>

          <input
            type="text"
            name="agencyName"
            value={general.agencyName}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          />

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Email *
          </label>

          <input
            type="email"
            name="email"
            value={general.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          />

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Phone *
          </label>

          <input
            type="text"
            name="phone"
            value={general.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          />

        </div>

        {/* Website */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Website
          </label>

          <input
            type="text"
            name="website"
            value={general.website}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          />

        </div>

        {/* Address */}

        <div className="md:col-span-2">

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Address
          </label>

          <textarea
            rows={4}
            name="address"
            value={general.address}
            onChange={handleChange}
            className="w-full resize-none rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          />

        </div>

        {/* Timezone */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
            Timezone
          </label>

          <select
            name="timezone"
            value={general.timezone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          >
            <option>Asia/Karachi</option>
            <option>Asia/Dubai</option>
            <option>Europe/London</option>
            <option>America/New_York</option>
          </select>

        </div>

      </div>

      {/* Button */}

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
          {saving ? "Saving..." : "Save Changes"}
        </button>

      </div>

    </form>
  );
};

export default GeneralSettings;