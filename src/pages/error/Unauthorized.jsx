import { Link } from "react-router-dom";
import { ShieldX, ArrowLeft } from "lucide-react";

const Unauthorized = () => {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] px-6">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#1E293B 1px,transparent 1px),
            linear-gradient(to bottom,#1E293B 1px,transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <h1 className="absolute select-none text-[180px] font-black text-[#1E293B]/[0.03] sm:text-[260px] lg:text-[340px]">
        403
      </h1>

      <div className="absolute -top-48 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#EF4444]/10 blur-[150px]"></div>

      <div className="absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-[#38BDF8]/10 blur-[150px]"></div>

      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-[#EF4444]/20"></div>

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] shadow-[0_20px_50px_rgba(239,68,68,.35)]">
            <ShieldX size={42} className="text-white" />
          </div>
        </div>

        <div className="mt-8 rounded-full border border-red-200 bg-red-50 px-4 py-2">
          <span className="text-sm font-semibold tracking-wide text-[#DC2626] uppercase">
            Authorization Required
          </span>
        </div>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
          Access Denied
        </h2>

        <p className="mt-5 max-w-lg text-lg leading-8 text-[#64748B]">
          You don't have permission to access this resource. If you believe this
          is an error, please contact your administrator.
        </p>

        <Link
          to="/"
          className="group mt-10 inline-flex h-14 items-center gap-3 rounded-2xl bg-[#1E293B] px-8 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F172A]"
        >
          <ArrowLeft
            size={20}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
