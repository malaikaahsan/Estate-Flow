import { useState } from "react";
import { Upload, X } from "lucide-react";
import toast from "react-hot-toast";

const EditProfileModal = ({ profile, setProfile, onClose }) => {
  const [form, setForm] = useState(profile);
  const [preview, setPreview] = useState(profile.image);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      ["linkedin", "facebook", "instagram", "twitter", "website"].includes(name)
    ) {
      setForm({
        ...form,
        social: {
          ...form.social,
          [name]: value,
        },
      });

      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    setForm({
      ...form,
      image: imageUrl,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!form.email.includes("@")) {
      toast.error("Enter a valid email");
      return;
    }

    if (form.phone.length < 10) {
      toast.error("Phone number is too short");
      return;
    }

    setProfile({
  ...profile,
  ...form,
  image: preview,
});

    toast.success("Profile updated successfully");

    onClose();
  };

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/60 backdrop-blur-sm p-4">

    <div className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4 sm:px-6">

        <div>

          <h2 className="text-2xl font-bold text-[#0F172A]">
            Edit Profile
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Update your personal information and social links.
          </p>

        </div>

        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#64748B] transition-all duration-300 hover:bg-[#EEF9F6] hover:text-[#10B981]"
        >
          <X size={20} />
        </button>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="flex-1 overflow-y-auto p-5 sm:p-6"
      >

        {/* Avatar */}

        <div className="mb-8 flex flex-col items-center">

          <img
            src={preview}
            alt="Preview"
            className="h-32 w-32 rounded-full border-4 border-[#EEF9F6] object-cover shadow-lg"
          />

          <label className="mt-5 flex cursor-pointer items-center gap-2 rounded-xl bg-[#10B981] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#059669] hover:shadow-lg">

            <Upload size={18} />

            Upload Photo

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

          </label>

        </div>

        {/* Personal Information */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium text-[#0F172A]">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium text-[#0F172A]">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium text-[#0F172A]">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium text-[#0F172A]">
              Experience
            </label>

            <input
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
            />

          </div>

        </div>

        {/* About */}

        <div className="mt-8">

          <label className="mb-2 block font-medium text-[#0F172A]">
            About
          </label>

          <textarea
            rows={5}
            name="about"
            value={form.about}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
          />

        </div>

        {/* Social Links */}

        <div className="mt-8">

          <h3 className="mb-2 text-xl font-bold text-[#0F172A]">
            Social Links
          </h3>

          <p className="mb-6 text-sm text-[#64748B]">
            Connect your professional and social media profiles.
          </p>

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn"
              value={form.social.linkedin}
              onChange={handleChange}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white"
            />

            <input
              type="text"
              name="facebook"
              placeholder="Facebook"
              value={form.social.facebook}
              onChange={handleChange}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white"
            />

            <input
              type="text"
              name="instagram"
              placeholder="Instagram"
              value={form.social.instagram}
              onChange={handleChange}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white"
            />

            <input
              type="text"
              name="twitter"
              placeholder="Twitter"
              value={form.social.twitter}
              onChange={handleChange}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white"
            />

            <input
              type="text"
              name="website"
              placeholder="Website"
              value={form.social.website}
              onChange={handleChange}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white md:col-span-2"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="sticky bottom-0 mt-8 flex flex-col-reverse gap-3 border-t border-[#E2E8F0] bg-white pt-6 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-[#E2E8F0] px-6 py-3 font-semibold text-[#64748B] transition-all duration-300 hover:bg-[#F8FAFC]"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-xl bg-[#10B981] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#059669] hover:shadow-lg"
          >
            Save Changes
          </button>

        </div>

      </form>

    </div>

  </div>
);}
export default EditProfileModal