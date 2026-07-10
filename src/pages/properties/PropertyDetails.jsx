import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  MapPin,
  Home,
  BadgeDollarSign,
  Calendar,
  CalendarDays,
} from "lucide-react";

import { properties } from "../../data/properties";
import { agents } from "../../data/agents";

import PropertyGallery from "../../components/property/PropertyGallery";
import PropertyAmenities from "../../components/property/PropertyAmenities";
import PropertyLocation from "../../components/property/PropertyLocation";
import PropertyReviews from "../../components/property/PropertyReviews";
import PropertyStats from "../../components/property/PropertyStats";
import PropertyAgent from "../../components/property/PropertyAgent";
import BookVisitModal from "../../components/property/BookVisitModal";

const PropertyDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();

  const property = properties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-3xl font-bold text-[#0F172A]">
          Property Not Found
        </h2>
      </div>
    );
  }

  const agent = agents.find((item) => item.id === property.agentId);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-6 shadow-lg backdrop-blur-xl sm:p-8">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#10B981]/10 blur-3xl"></div>

       <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

  {/* Left */}
  <div className="flex-1">

    <span className="inline-flex rounded-full bg-[#EEF9F6] px-3 py-1 text-xs font-semibold text-[#10B981]">
      {property.status}
    </span>

    <h1 className="mt-3 text-2xl font-bold leading-tight text-[#0F172A] sm:text-3xl">
      {property.title}
    </h1>

    <div className="mt-4 grid gap-3 text-sm text-[#64748B] sm:grid-cols-2">

      <div className="flex items-center gap-2">
        <MapPin size={16} className="text-[#10B981]" />
        <span className="truncate">
          {property.address}, {property.city}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Home size={16} className="text-[#38BDF8]" />
        {property.type}
      </div>

      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-[#F59E0B]" />
        {property.createdAt}
      </div>

    </div>

  </div>

  {/* Price Card */}
  <div className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 shadow-sm sm:w-auto">

    <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
      Price
    </p>

    <h2 className="mt-1 text-2xl font-bold text-[#10B981] sm:text-3xl">
      PKR {property.price.toLocaleString()}
    </h2>

  </div>

</div>
      </div>
      {/* Gallery */}
      <PropertyGallery property={property} />
      {/* Stats */}
      <PropertyStats property={property} />
      {/* Description */}
      <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-7 shadow-lg backdrop-blur-xl">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

        <div className="absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-[#38BDF8]/10 blur-3xl"></div>

        <p className="text-sm font-semibold uppercase tracking-widest text-[#10B981]">
          About Property
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">Description</h2>

        <p className="mt-6 leading-8 text-[#64748B]">{property.description}</p>
      </div>
      {/* Amenities */}
      <PropertyAmenities property={property} />
      {/* Agent */}
      <PropertyAgent agent={agent} />
      {/* Book Visit */}
      {/* Location */}
      <PropertyLocation property={property} />
      {/* Reviews */}
      <PropertyReviews />

      <div className="flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#10B981] via-[#0EA5A4] to-[#1E293B] px-10 py-5 text-lg font-semibold text-white transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] ] active:scale-95"
        >
          {/* Shine Effect */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>

          {/* Glow */}
          <span className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-[#10B981]/30 to-[#38BDF8]/30 blur-xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"></span>

          <CalendarDays
            size={22}
            className="relative transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          />

          <span className="relative">Book Property Visit</span>
        </button>
      </div>
      {showModal && (
        <BookVisitModal
          property={property}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default PropertyDetails;
