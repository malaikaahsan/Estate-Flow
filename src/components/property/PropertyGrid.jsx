import PropertyCard from "./PropertyCard";
import SkeletonCard from "../common/SkeletonCard";
import EmptyState from "../common/EmptyState";

const PropertyGrid = ({ properties, loading }) => {
  if (loading) {
    return (
      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <EmptyState
        title="No Properties Found"
        message="Try changing your search or filters."
      />
    );
  }

  return (
    <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {properties.map((property) => (
        <div key={property.id} className="h-full">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;
