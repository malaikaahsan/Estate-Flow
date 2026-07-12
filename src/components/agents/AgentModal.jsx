import { useEffect, useState } from "react";
import {
  X,
  User,
  Mail,
  Phone,
 Briefcase,
  Award,
  Star,
  DollarSign,
  Building2,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  experience: "",
  specialization: "",
  rating: "",
  sales: "",
  propertiesManaged: "",
};

const AgentModal = ({
  isOpen,
  onClose,
  onSave,
  editingAgent,
}) => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingAgent) {
      setFormData({
        name: editingAgent.name,
        email: editingAgent.email,
        phone: editingAgent.phone,
        experience: editingAgent.experience,
        specialization: editingAgent.specialization,
        rating: editingAgent.rating,
        sales: editingAgent.sales,
        propertiesManaged: editingAgent.propertiesManaged,
      });
    } else {
      setFormData(initialForm);
    }

    setErrors({});
  }, [editingAgent, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";

    if (
      formData.email &&
      !/\S+@\S+\.\S+/.test(formData.email)
    )
      newErrors.email = "Invalid email";

    if (!formData.phone.trim())
      newErrors.phone = "Phone is required";

    if (!formData.specialization)
      newErrors.specialization =
        "Specialization is required";

    if (!formData.experience)
      newErrors.experience =
        "Experience is required";

    if (!formData.rating)
      newErrors.rating = "Rating is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4">

      <div className="flex min-h-full items-center justify-center">

        <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-2xl">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-[#E2E8F0] px-6 py-5">

            <div>

              <h2 className="text-2xl font-bold text-[#0F172A]">
                {editingAgent ? "Edit Agent" : "Add New Agent"}
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Fill in the agent information.
              </p>

            </div>

            <button
              onClick={onClose}
              className="rounded-xl p-2 transition hover:bg-[#F8FAFC]"
            >
              <X size={22} />
            </button>

          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 p-6 md:grid-cols-2"
          >

            <Input
              icon={User}
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            <Input
              icon={Mail}
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <Input
              icon={Phone}
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <Input
              icon={Briefcase}
              label="Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              error={errors.experience}
            />

            <Input
              icon={Award}
              label="Specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              error={errors.specialization}
            />

            <Input
              icon={Star}
              label="Rating"
              name="rating"
              type="number"
              value={formData.rating}
              onChange={handleChange}
              error={errors.rating}
            />

            <Input
              icon={DollarSign}
              label="Sales"
              name="sales"
              type="number"
              value={formData.sales}
              onChange={handleChange}
            />

            <Input
              icon={Building2}
              label="Properties Managed"
              name="propertiesManaged"
              type="number"
              value={formData.propertiesManaged}
              onChange={handleChange}
            />

            <div className="md:col-span-2 mt-3 flex justify-end gap-3 border-t border-[#E2E8F0] pt-5">

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-[#E2E8F0] px-6 py-3 font-semibold text-[#64748B] transition hover:bg-[#F8FAFC]"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-[#10B981] px-6 py-3 font-semibold text-white transition hover:bg-[#059669]"
              >
                {editingAgent ? "Update Agent" : "Add Agent"}
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

const Input = ({
  icon: Icon,
  label,
  error,
  ...props
}) => (
  <div>

    <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
      {label}
    </label>

    <div className="relative">

      <Icon
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
      />

      <input
        {...props}
        className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-4 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-2 focus:ring-[#10B981]/10"
      />

    </div>

    {error && (
      <p className="mt-1 text-sm text-[#EF4444]">
        {error}
      </p>
    )}

  </div>
);

export default AgentModal;