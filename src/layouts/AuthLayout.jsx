import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-[#F8FAFC]">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1E293B 1px, transparent 1px),
            linear-gradient(to bottom, #1E293B 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      <div className="absolute -top-44 -left-44 h-[420px] w-[420px] rounded-full bg-[#38BDF8]/25 blur-[130px] animate-pulse"></div>

      <div className="absolute -bottom-56 -right-56 h-[500px] w-[500px] rounded-full bg-[#10B981]/20 blur-[150px] animate-pulse"></div>

      <div
        className="absolute top-1/3 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-white/70 blur-[120px]"
        style={{
          animation: "float 8s ease-in-out infinite",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#10B981]/5"></div>

      <div className="absolute left-16 top-20 h-32 w-px bg-gradient-to-b from-transparent via-[#10B981]/40 to-transparent"></div>

      <div className="absolute right-20 bottom-24 h-40 w-px bg-gradient-to-b from-transparent via-[#38BDF8]/40 to-transparent"></div>

      <div className="absolute left-20 bottom-20 w-40 h-px bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent"></div>

      <div className="absolute right-16 top-24 w-52 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/30 to-transparent"></div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div
          className="w-full max-w-md"
          style={{
            animation: "fadeUp .7s ease",
          }}
        >
          <Outlet />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% {
            transform: translate(-50%,0px);
          }

          50% {
            transform: translate(-50%,-20px);
          }

          100% {
            transform: translate(-50%,0px);
          }
        }

        @keyframes fadeUp {

          from{
            opacity:0;
            transform:translateY(30px);
          }

          to{
            opacity:1;
            transform:translateY(0);
          }

        }
      `}</style>
    </div>
  );
};

export default AuthLayout;
