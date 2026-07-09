import logo from "../../assets/logos/estateflow_logo.png";
const LoadingScreen = () => {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-[#F8FAFC]">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1E293B 1px, transparent 1px),
            linear-gradient(to bottom, #1E293B 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#38BDF8]/20 blur-[120px] animate-pulse"></div>

      <div className="absolute -right-32 -bottom-32 h-[420px] w-[420px] rounded-full bg-[#10B981]/20 blur-[130px] animate-pulse"></div>

      <div className="relative w-full max-w-sm px-6">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 text-center shadow-[0_25px_70px_rgba(15,23,42,.12)] backdrop-blur-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg ring-1 ring-[#E2E8F0]">
            <img
              src={logo}
              alt="EstateFlow"
              className="h-12 w-12 object-contain"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#0F172A]">
            EstateFlow
          </h1>

          <p className="mt-2 text-sm text-[#64748B]">
            Property Management System
          </p>

          <div className="mt-8 flex justify-center">
            <div className="relative h-14 w-14">
              <div className="absolute inset-0 rounded-full border-4 border-[#E2E8F0]"></div>

              <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#10B981] border-r-[#38BDF8]"></div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1 text-sm font-medium text-[#64748B]">
            <span>Loading</span>

            <span className="animate-bounce">.</span>

            <span className="animate-bounce" style={{ animationDelay: ".15s" }}>
              .
            </span>

            <span className="animate-bounce" style={{ animationDelay: ".3s" }}>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
