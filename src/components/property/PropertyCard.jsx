import { BedDouble, Bath, Car, Ruler, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { agents } from "../../data/agents";
import FavoriteButton from "./FavoriteButton";

const PropertyCard = ({ property }) => {
  const agent = agents.find((item) => item.id === property.agentId);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52 lg:h-56"
        />

        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white shadow-md sm:left-4 sm:top-4 sm:px-3 sm:text-xs ${
            property.status === "Available"
              ? "bg-[#22C55E]"
              : property.status === "Pending"
                ? "bg-[#F59E0B]"
                : "bg-[#EF4444]"
          }`}
        >
          {property.status}
        </span>

        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <FavoriteButton property={property} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="text-xl font-bold text-[#10B981] sm:text-2xl">
          PKR {property.price.toLocaleString()}
        </h2>

        <h3 className="mt-2 min-h-[46px] line-clamp-2 text-lg font-bold leading-6 text-[#0F172A] sm:mt-3 sm:min-h-[52px] sm:text-xl">
          {property.title}
        </h3>

        <p className="mt-2 text-xs text-[#64748B] sm:text-sm">
          Agent{" "}
          <span className="font-semibold text-[#1E293B]">{agent?.name}</span>
        </p>

        <div className="mt-3 flex items-start gap-2 text-xs text-[#64748B] sm:text-sm">
          <MapPin size={16} className="mt-0.5 shrink-0 text-[#38BDF8]" />

          <p className="line-clamp-2">
            {property.address}, {property.city}
          </p>
        </div>

        <div className="my-4 h-px bg-[#E2E8F0]" />

        <div className="grid grid-cols-4 gap-2">
          <div className="rounded-xl bg-[#F8FAFC] p-2 text-center">
            <BedDouble size={16} className="mx-auto mb-1 text-[#10B981]" />
            <p className="text-xs font-semibold text-[#0F172A]">
              {property.bedrooms}
            </p>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] p-2 text-center">
            <Bath size={16} className="mx-auto mb-1 text-[#38BDF8]" />
            <p className="text-xs font-semibold text-[#0F172A]">
              {property.bathrooms}
            </p>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] p-2 text-center">
            <Car size={16} className="mx-auto mb-1 text-[#F59E0B]" />
            <p className="text-xs font-semibold text-[#0F172A]">
              {property.garage}
            </p>
          </div>

          <div className="rounded-xl bg-[#F8FAFC] p-2 text-center">
            <Ruler size={16} className="mx-auto mb-1 text-[#1E293B]" />
            <p className="text-xs font-semibold text-[#0F172A]">
              {property.area}
            </p>
          </div>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="mt-5 flex h-10 items-center justify-center rounded-xl bg-[#1E293B] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#10B981] sm:h-11"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
