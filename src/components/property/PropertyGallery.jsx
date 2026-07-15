import { useState } from "react";

const PropertyGallery = ({ property }) => {
  const images = [
    property.image,
    property.image + "&1",
    property.image + "&2",
    property.image + "&3",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-5 shadow-lg backdrop-blur-xl">
      <img
        src={selectedImage}
        alt={property.title}
        className="h-64 w-full rounded-2xl object-cover transition-all duration-500 sm:h-80 lg:h-96"
      />

      <div className="mt-5 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setSelectedImage(image)}
            className={`h-20 cursor-pointer rounded-2xl object-cover transition-all duration-300 sm:h-24 lg:h-28
              ${
                selectedImage === image
                  ? "scale-95 border-4 border-[#10B981] shadow-lg"
                  : "border-2 border-transparent hover:scale-95 hover:border-[#38BDF8]"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
