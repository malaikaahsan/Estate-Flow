import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import {
  CalendarDays,
  Clock3,
  Mail,
  Phone,
  User,
  MessageSquare,
  X,
  MapPin,
} from "lucide-react";

const BookVisitModal = ({ property, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "auto";
  };
}, []);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.date ||
      !form.time
    ) {
      return toast.error("Please fill all required fields.");
    }

    if (new Date(form.date) < new Date()) {
      return toast.error("Please select a future date.");
    }

    const visits =
      JSON.parse(localStorage.getItem("estateflow_visits")) || [];

    const visit = {
      id: Date.now(),

      propertyId: property.id,

      propertyTitle: property.title,

      propertyImage: property.image,

      propertyCity: property.city,

      propertyAddress: property.address,

      propertyPrice: property.price,

      agentId: property.agentId,

      ...form,

      bookingDate: new Date().toISOString(),

      status: "Pending",
    };

    visits.push(visit);

    localStorage.setItem(
      "estateflow_visits",
      JSON.stringify(visits)
    );

    toast.success("Visit Scheduled Successfully!");

    onClose();
  };

  const inputStyle =
    "w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-12 pr-4 text-[#0F172A] outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10";

  return (
   <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0F172A]/60 backdrop-blur-md">
  <div className="flex min-h-screen items-center justify-center p-4">

      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl animate-in zoom-in-95 duration-300">

        {/* Top Accent */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

        {/* Glow */}
        <div className="absolute pointer-events-none -right-20 -top-20 h-56 w-56 rounded-full bg-[#10B981]/10 blur-3xl"></div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] px-8 py-6">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-[#10B981]">
              Schedule Property Visit
            </p>

            <h2 className="mt-1 text-3xl font-bold text-[#0F172A]">
              Book a Visit
            </h2>

          </div>

          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F8FAFC] transition hover:bg-red-50 hover:text-red-500"
          >
            <X size={22} />
          </button>

        </div>

        {/* Property Preview */}
        <div className="mx-8 mt-6 flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">

          <img
            src={property.image}
            alt={property.title}
            className="h-24 w-32 rounded-xl object-cover"
          />

          <div className="flex-1">

            <h3 className="text-xl font-bold text-[#0F172A]">
              {property.title}
            </h3>

            <p className="mt-1 flex items-center gap-2 text-sm text-[#64748B]">
              <MapPin size={16} />
              {property.address}, {property.city}
            </p>

            <h4 className="mt-3 text-2xl font-bold text-[#10B981]">
              PKR {property.price.toLocaleString()}
            </h4>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-8"
        >

          <div className="grid gap-5 md:grid-cols-2">

            <div className="relative">

              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className={inputStyle}
              />

            </div>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className={inputStyle}
              />

            </div>

            <div className="relative">

              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className={inputStyle}
              />

            </div>

            <div className="relative">

              <CalendarDays
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                type="date"
                name="date"
                onChange={handleChange}
                className={inputStyle}
              />

            </div>

            <div className="relative md:col-span-2">

              <Clock3
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                type="time"
                name="time"
                onChange={handleChange}
                className={inputStyle}
              />

            </div>

          </div>

          <div className="relative">

            <MessageSquare
              size={18}
              className="absolute left-4 top-5 text-[#64748B]"
            />

            <textarea
              rows={4}
              name="message"
              placeholder="Additional message (optional)"
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] py-4 pl-12 pr-4 text-[#0F172A] outline-none transition-all duration-300 focus:border-[#10B981] focus:bg-white focus:ring-4 focus:ring-[#10B981]/10"
            />

          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-[#E2E8F0] px-7 py-3 font-semibold text-[#64748B] transition hover:bg-[#F8FAFC]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-2xl bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Schedule Visit
            </button>

          </div>

        </form>

      </div>
      </div>

    </div>
  );
};

export default BookVisitModal;
