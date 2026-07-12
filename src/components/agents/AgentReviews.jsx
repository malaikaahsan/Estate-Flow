import {
  MessageSquare,
  Star,
  CalendarDays,
} from "lucide-react";

const AgentReviews = ({ reviews }) => {
  return (
    <section className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">

      {/* Header */}
      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6]">
          <MessageSquare
            size={20}
            className="text-[#10B981]"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0F172A]">
            Client Reviews
          </h2>

          <p className="text-sm text-[#64748B]">
            Feedback from satisfied clients
          </p>
        </div>

      </div>

      {reviews.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#E2E8F0] bg-[#F8FAFC] px-6 py-10 text-center">

          <MessageSquare
            size={42}
            className="mx-auto mb-3 text-[#CBD5E1]"
          />

          <h3 className="text-lg font-semibold text-[#0F172A]">
            No Reviews Yet
          </h3>

          <p className="mt-2 text-sm text-[#64748B]">
            Client reviews will appear here.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-[#10B981]/30 hover:bg-white hover:shadow-md"
            >

              <div className="flex items-start gap-4">

                {/* Avatar */}
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-[#EEF9F6]"
                />

                <div className="min-w-0 flex-1">

                  {/* Top */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <h3 className="font-semibold text-[#0F172A]">
                        {review.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-1">

                        {Array.from({ length: review.rating }).map((_, index) => (
                          <Star
                            key={index}
                            size={15}
                            className="fill-[#F59E0B] text-[#F59E0B]"
                          />
                        ))}

                      </div>

                    </div>

                    <div className="flex items-center gap-1 text-sm text-[#64748B]">

                      <CalendarDays size={15} />

                      <span>{review.date}</span>

                    </div>

                  </div>

                  {/* Review */}
                  <p className="mt-3 leading-7 text-[#64748B]">
                    {review.comment}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
};

export default AgentReviews;