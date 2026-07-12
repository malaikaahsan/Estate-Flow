import { useState } from "react";
import {
  X,
  Calendar,
  Clock,
 User,
  Home,
  BadgeCheck,
  FileText,
} from "lucide-react";

import { clients } from "../../data/clients";
import { agents } from "../../data/agents";
import { properties } from "../../data/properties";

const VisitModal = ({ isOpen, onClose, addVisit }) => {
  const [formData, setFormData] = useState({
    clientId: "",
    propertyId: "",
    agentId: "",
    date: "",
    time: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.clientId ||
      !formData.propertyId ||
      !formData.agentId ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert("Visit date cannot be in the past.");
      return;
    }

    addVisit(formData);

    setFormData({
      clientId: "",
      propertyId: "",
      agentId: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  const inputStyle =
    "w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none transition-all duration-300 focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/10";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#E2E8F0] bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#E2E8F0] px-6 py-5">

          <div>
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Schedule Visit
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Create a new property visit
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-[#F1F5F9]"
          >
            <X size={20} />
          </button>

        </div>

        {/* Form */}

        <div className="space-y-5 p-6">

          {/* Client */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
              <User size={16} className="text-[#10B981]" />
              Client
            </label>

            <select
              name="clientId"
              value={formData.clientId}
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="">Select Client</option>

              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>

          {/* Property */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
              <Home size={16} className="text-[#38BDF8]" />
              Property
            </label>

            <select
              name="propertyId"
              value={formData.propertyId}
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="">Select Property</option>

              {properties.map((property) => (
                <option key={property.id} value={property.id}>
                  {property.title}
                </option>
              ))}
            </select>
          </div>

          {/* Agent */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
              <BadgeCheck size={16} className="text-[#10B981]" />
              Agent
            </label>

            <select
              name="agentId"
              value={formData.agentId}
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="">Select Agent</option>

              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date + Time */}

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                <Calendar size={16} className="text-[#10B981]" />
                Visit Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                <Clock size={16} className="text-[#F59E0B]" />
                Visit Time
              </label>

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

          </div>

          {/* Notes */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
              <FileText size={16} className="text-[#38BDF8]" />
              Notes
            </label>

            <textarea
              rows={4}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional notes..."
              className={`${inputStyle} resize-none`}
            />
          </div>

        </div>

        {/* Footer */}

        <div className="flex flex-col-reverse gap-3 border-t border-[#E2E8F0] px-6 py-5 sm:flex-row sm:justify-end">

          <button
            onClick={onClose}
            className="rounded-xl border border-[#E2E8F0] px-6 py-3 font-medium text-[#64748B] transition hover:bg-[#F8FAFC]"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#10B981] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#059669] hover:shadow-lg"
          >
            Schedule Visit
          </button>

        </div>

      </div>

    </div>
  );
};

export default VisitModal;