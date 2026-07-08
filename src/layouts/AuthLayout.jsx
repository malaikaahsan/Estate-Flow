import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF9F6]">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        {/* Top Left */}
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#38BDF8]/20 blur-3xl animate-pulse"></div>

        {/* Bottom Right */}
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#10B981]/20 blur-3xl animate-pulse"></div>

        {/* Center */}
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1E293B 1px, transparent 1px),
              linear-gradient(to bottom, #1E293B 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Auth Container */}
      <div className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md animate-[fadeIn_.5s_ease]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;