import { useState } from "react";
import { X } from "lucide-react";

const ClientModal = ({
  client,
  onClose,
  onSave,
}) => {
  const [form, setForm] = useState(
    client || {
      name: "",
      email: "",
      phone: "",
      budget: "",
      interestedProperty: "",
      assignedAgent: "",
      city: "",
      status: "Interested",
    },
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim())
      newErrors.name = "Name is required.";

    if (!form.email.trim())
      newErrors.email = "Email is required.";
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    )
      newErrors.email = "Invalid email.";

    if (!form.phone.trim())
      newErrors.phone = "Phone is required.";
    else if (form.phone.length < 11)
      newErrors.phone = "Phone must be 11 digits.";

    if (!form.budget)
      newErrors.budget = "Budget is required.";
    else if (Number(form.budget) <= 0)
      newErrors.budget = "Budget must be positive.";

    if (!form.interestedProperty.trim())
      newErrors.interestedProperty =
        "Property is required.";

    if (!form.assignedAgent.trim())
      newErrors.assignedAgent =
        "Assigned agent is required.";

    if (!form.city.trim())
      newErrors.city = "City is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSave({
      id: client?.id || Date.now(),
      createdAt: new Date().toISOString(),
      ...form,
      budget: Number(form.budget),
    });

    onClose();
  };

  const inputStyle =
    "h-11 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-sm text-[#0F172A] outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-5 backdrop-blur-sm">

      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-2xl">

        {/* Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4 sm:px-6">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#10B981]">
              Client
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#0F172A]">
              {client ? "Edit Client" : "Add New Client"}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC] text-[#64748B] transition hover:bg-[#EEF9F6] hover:text-[#10B981]"
          >
            <X size={20} />
          </button>

        </div>

        {/* Scrollable Body */}
        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto px-5 py-5 sm:px-6"
        >

          <div className="grid gap-4 md:grid-cols-2">

            <Input
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              className={inputStyle}
            />

            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              className={inputStyle}
            />

            <Input
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              className={inputStyle}
            />

            <Input
              label="Budget"
              name="budget"
              type="number"
              value={form.budget}
              onChange={handleChange}
              error={errors.budget}
              className={inputStyle}
            />

            <Input
              label="Interested Property"
              name="interestedProperty"
              value={form.interestedProperty}
              onChange={handleChange}
              error={errors.interestedProperty}
              className={inputStyle}
            />

            <Input
              label="Assigned Agent"
              name="assignedAgent"
              value={form.assignedAgent}
              onChange={handleChange}
              error={errors.assignedAgent}
              className={inputStyle}
            />

            <Input
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
              error={errors.city}
              className={inputStyle}
            />

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className={inputStyle}
              >
                <option>Interested</option>
                <option>Negotiating</option>
                <option>Deal Closed</option>
                <option>Inactive</option>
              </select>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-col-reverse gap-3 border-t border-[#E2E8F0] pt-5 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={onClose}
              className="h-11 rounded-xl border border-[#E2E8F0] px-6 font-semibold text-[#64748B] transition hover:bg-[#F8FAFC]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="h-11 rounded-xl bg-[#1E293B] px-6 font-semibold text-white transition hover:bg-[#10B981]"
            >
              {client ? "Update Client" : "Save Client"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

const Input = ({
  label,
  error,
  className,
  ...props
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
      {label}
    </label>

    <input
      {...props}
      className={className}
    />

    {error && (
      <p className="mt-1 text-sm text-[#EF4444]">
        {error}
      </p>
    )}
  </div>
);

export default ClientModal;