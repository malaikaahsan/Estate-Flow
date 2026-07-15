import { useState } from "react";
import toast from "react-hot-toast";
import { Languages } from "lucide-react";

const LanguageSettings = ({ settings, setSettings }) => {
  const language = settings.language;

  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      language: {
        ...language,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSaving(true);

    setTimeout(() => {
      toast.success("Language settings updated successfully!");
      setSaving(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="mb-8 flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F6]">
          <Languages size={26} className="text-[#10B981]" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#0F172A]">
            Language & Regional Settings
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Customize language, currency, and regional preferences for your
            dashboard.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-[#0F172A]">
            Language
          </label>

          <select
            name="language"
            value={language.language}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 text-[#0F172A] outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium text-[#0F172A]">
            Currency
          </label>

          <select
            name="currency"
            value={language.currency}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 text-[#0F172A] outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          >
            <option value="PKR">PKR</option>
            <option value="USD">USD</option>
            <option value="SAR">SAR</option>
            <option value="AED">AED</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-[#0F172A]">
            Date Format
          </label>

          <select
            name="dateFormat"
            value={language.dateFormat}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 text-[#0F172A] outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          >
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
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
        {saving ? "Saving..." : "Save Language Settings"}
      </button>
    </form>
  );
};

export default LanguageSettings;
