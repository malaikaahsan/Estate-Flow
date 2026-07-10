const SkeletonCard = () => {
  return (
    <div className="group flex h-[670px] flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 shadow-lg backdrop-blur-xl">

      {/* Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#1E293B]" />

      {/* Image */}
      <div className="relative h-64 overflow-hidden">

        <div className="absolute inset-0 animate-pulse bg-[#E2E8F0]" />

        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">

        {/* Price */}
        <div className="relative h-8 w-36 overflow-hidden rounded-xl bg-[#E2E8F0]">

          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        </div>

        {/* Title */}
        <div className="relative mt-5 h-6 w-5/6 overflow-hidden rounded-xl bg-[#E2E8F0]">

          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        </div>

        {/* Agent */}
        <div className="relative mt-4 h-4 w-1/2 overflow-hidden rounded-xl bg-[#E2E8F0]">

          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        </div>

        {/* Location */}
        <div className="relative mt-4 h-4 w-3/4 overflow-hidden rounded-xl bg-[#E2E8F0]">

          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-4 gap-3">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3"
            >
              <div className="mx-auto h-5 w-5 animate-pulse rounded-full bg-[#CBD5E1]" />

              <div className="mx-auto mt-3 h-3 w-8 animate-pulse rounded bg-[#CBD5E1]" />
            </div>
          ))}

        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Button */}
        <div className="relative mt-8 h-14 overflow-hidden rounded-2xl bg-[#E2E8F0]">

          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        </div>

      </div>

    </div>
  );
};

export default SkeletonCard;