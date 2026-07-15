import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] px-6">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#1E293B 1px,transparent 1px),
            linear-gradient(to bottom,#1E293B 1px,transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#38BDF8]/15 blur-[130px]"></div>

      <div className="absolute -bottom-52 -right-52 h-[520px] w-[520px] rounded-full bg-[#10B981]/15 blur-[150px]"></div>

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E2E8F0]/60"></div>

      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E2E8F0]/60"></div>

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#E2E8F0] bg-white shadow-lg">
          <Compass size={42} className="text-[#10B981]" />
        </div>

        <h1 className="bg-gradient-to-r from-[#1E293B] via-[#10B981] to-[#38BDF8] bg-clip-text text-[120px] font-black leading-none text-transparent sm:text-[170px]">
          404
        </h1>

        <h2 className="mt-2 text-4xl font-bold text-[#0F172A]">
          Lost in EstateFlow?
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748B]">
          We searched everywhere, but the page you're looking for doesn't exist
          or has been moved.
        </p>

        <Link
          to="/"
          className="group mt-10 inline-flex h-14 items-center gap-3 rounded-2xl bg-[#1E293B] px-8 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F172A]"
        >
          <ArrowLeft
            size={20}
            className="transition group-hover:-translate-x-1"
          />
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
