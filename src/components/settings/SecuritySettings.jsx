import { useState } from "react";
import toast from "react-hot-toast";
import { Shield } from "lucide-react";

const SecuritySettings = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.currentPassword.trim()) {
      newErrors.currentPassword =
        "Current password is required.";
    }

    if (!form.newPassword) {
      newErrors.newPassword =
        "New password is required.";
    } else {
      if (form.newPassword.length < 8) {
        newErrors.newPassword =
          "Minimum 8 characters required.";
      } else if (!/[A-Z]/.test(form.newPassword)) {
        newErrors.newPassword =
          "Must contain one uppercase letter.";
      } else if (!/[a-z]/.test(form.newPassword)) {
        newErrors.newPassword =
          "Must contain one lowercase letter.";
      } else if (!/\d/.test(form.newPassword)) {
        newErrors.newPassword =
          "Must contain one number.";
      } else if (
        !/[!@#$%^&*(),.?":{}|<>]/.test(form.newPassword)
      ) {
        newErrors.newPassword =
          "Must contain one special character.";
      }
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      form.confirmPassword !== form.newPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSaving(true);

    setTimeout(() => {
      toast.success("Password updated successfully!");

      setSaving(false);

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
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

          <Shield
            size={26}
            className="text-[#10B981]"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-[#0F172A]">
            Security Settings
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Update your account password to keep your account secure.
          </p>

        </div>

      </div>

      {/* Form */}

      <div className="space-y-6">

        {/* Current Password */}

        <div>

          <label className="mb-2 block font-medium text-[#0F172A]">
            Current Password
          </label>

          <input
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            placeholder="Enter current password"
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          />

          {errors.currentPassword && (
            <p className="mt-2 text-sm font-medium text-[#EF4444]">
              {errors.currentPassword}
            </p>
          )}

        </div>

        {/* New Password */}

        <div>

          <label className="mb-2 block font-medium text-[#0F172A]">
            New Password
          </label>

          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          />

          {errors.newPassword && (
            <p className="mt-2 text-sm font-medium text-[#EF4444]">
              {errors.newPassword}
            </p>
          )}

        </div>

        {/* Confirm Password */}

        <div>

          <label className="mb-2 block font-medium text-[#0F172A]">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          />

          {errors.confirmPassword && (
            <p className="mt-2 text-sm font-medium text-[#EF4444]">
              {errors.confirmPassword}
            </p>
          )}

        </div>

      </div>

      {/* Password Requirements */}

      <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">

        <h3 className="font-semibold text-[#0F172A]">
          Password Requirements
        </h3>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#64748B]">
          <li>Minimum 8 characters</li>
          <li>At least one uppercase letter</li>
          <li>At least one lowercase letter</li>
          <li>At least one number</li>
          <li>At least one special character</li>
        </ul>

      </div>

      {/* Button */}

      <button
        type="submit"
        disabled={saving}
        className={`mt-8 rounded-2xl px-7 py-3 font-semibold text-white transition-all duration-300 ${
          saving
            ? "cursor-not-allowed bg-[#94A3B8]"
            : "bg-[#10B981] hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-lg"
        }`}
      >
        {saving ? "Updating..." : "Update Password"}
      </button>

    </form>
  );
};

export default SecuritySettings;