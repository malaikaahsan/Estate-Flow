import { TriangleAlert, RotateCw } from "lucide-react";

const ErrorState = ({ message = "Unable to load data.", onRetry }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/90 p-8 text-center shadow-lg backdrop-blur-xl sm:p-12">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#EF4444] via-[#F59E0B] to-[#38BDF8]" />

      <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#EF4444]/10 blur-3xl"></div>

      <div className="absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-[#38BDF8]/10 blur-3xl"></div>

      <div className="relative">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#EF4444] to-[#DC2626] shadow-xl transition-transform duration-300 hover:scale-105">
          <TriangleAlert size={48} className="text-white" />
        </div>

        <h2 className="mt-8 text-3xl font-bold text-[#0F172A]">
          Something Went Wrong
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#64748B]">
          {message}
        </p>

        <button
          onClick={onRetry}
          className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-[#1E293B] px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F172A] hover:shadow-xl"
        >
          <RotateCw
            size={18}
            className="transition-transform duration-500 group-hover:rotate-180"
          />
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorState;
