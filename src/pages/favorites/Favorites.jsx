import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";

import { properties } from "../../data/properties";
import PropertyGrid from "../../components/property/PropertyGrid";

const Favorites = () => {
  const favoriteIds = useSelector(
    (state) => state.favorites.favorites
  );

  const favoriteProperties = properties.filter((property) =>
    favoriteIds.includes(property.id)
  );

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-4 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEE2E2]">
              <Heart
                size={22}
                className="fill-[#EF4444] text-[#EF4444]"
              />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
                Favorite Properties
              </h1>

              <p className="mt-1 text-sm text-[#64748B] sm:text-base">
                Quickly access your saved listings.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-4 text-center">

          <p className="text-sm font-medium text-[#64748B]">
            Total Favorites
          </p>

          <h2 className="mt-1 text-3xl font-bold text-[#EF4444]">
            {favoriteProperties.length}
          </h2>

        </div>

      </div>

      {/* Content */}

      {favoriteProperties.length === 0 ? (

        <div className="rounded-3xl border border-[#E2E8F0] bg-white px-6 py-14 text-center shadow-sm">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#FEE2E2]">

            <Heart
              size={42}
              className="fill-[#EF4444] text-[#EF4444]"
            />

          </div>

          <h2 className="mt-6 text-2xl font-bold text-[#0F172A]">
            No Favorite Properties
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[#64748B]">
            You haven't saved any properties yet. Browse available
            listings and add your favorites for quick access.
          </p>

          <Link
            to="/properties"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#10B981] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#059669] hover:shadow-lg"
          >
            Browse Properties
            <ArrowRight size={18} />
          </Link>

        </div>

      ) : (

        <PropertyGrid properties={favoriteProperties} />

      )}

    </div>
  );
};

export default Favorites;