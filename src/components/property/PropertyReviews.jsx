import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ali Khan",
    avatar: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    date: "12 Jul 2026",
    comment:
      "Amazing property with great location and excellent facilities.",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    avatar: "https://i.pravatar.cc/100?img=32",
    rating: 4,
    date: "20 Jun 2026",
    comment:
      "Very spacious and clean. The neighborhood is peaceful.",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    avatar: "https://i.pravatar.cc/100?img=44",
    rating: 5,
    date: "02 Jun 2026",
    comment:
      "Highly recommended. Worth every penny.",
  },
];

const average =
  (
    reviews.reduce((sum, review) => sum + review.rating, 0) /
    reviews.length
  ).toFixed(1);

const PropertyReviews = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">

      {/* Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Header */}
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">
            Reviews
          </p>

          <h2 className="mt-1 text-xl font-bold text-[#0F172A]">
            Customer Reviews
          </h2>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] px-4 py-2 border border-[#E2E8F0]">

          <Star
            size={18}
            className="fill-[#F59E0B] text-[#F59E0B]"
          />

          <span className="font-semibold text-[#0F172A]">
            {average}
          </span>

          <span className="text-sm text-[#64748B]">
            ({reviews.length} Reviews)
          </span>

        </div>

      </div>

      {/* Reviews */}

      <div className="space-y-3">

        {reviews.map((review) => (

          <div
            key={review.id}
            className="rounded-xl border border-[#E2E8F0] p-4 transition-all duration-300 hover:border-[#10B981] hover:shadow-md"
          >

            <div className="flex items-start gap-3">

              <img
                src={review.avatar}
                alt={review.name}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="flex-1">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <h3 className="font-semibold text-[#0F172A]">
                      {review.name}
                    </h3>

                    <p className="text-xs text-[#64748B]">
                      {review.date}
                    </p>

                  </div>

                  <div className="flex">

                    {Array.from({ length: 5 }).map((_, index) => (

                      <Star
                        key={index}
                        size={15}
                        className={
                          index < review.rating
                            ? "fill-[#F59E0B] text-[#F59E0B]"
                            : "text-gray-300"
                        }
                      />

                    ))}

                  </div>

                </div>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {review.comment}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default PropertyReviews;