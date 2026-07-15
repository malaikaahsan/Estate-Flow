import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logos/estateflow_logo.png";
import { Mail, Lock, Building2, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    const result = login(data.email, data.password, data.rememberMe);

    if (result.success) {
      switch (result.user.role) {
        case "admin":
          navigate("/");
          break;

        case "agent":
          navigate("/");
          break;

        default:
          navigate("/");
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 scale-110 rounded-[40px] bg-gradient-to-r from-[#38BDF8]/20 via-[#10B981]/15 to-[#38BDF8]/20 blur-3xl"></div>

      <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/80 md:p-7 p-5 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_100px_rgba(16,185,129,.18)]">
        <div className="absolute inset-0 rounded-[30px] p-[1px] bg-gradient-to-br from-[#38BDF8]/40 via-white/20 to-[#10B981]/40 pointer-events-none">
          <div className="h-full w-full rounded-[30px] bg-transparent"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-[#E2E8F0]">
            <img
              src={logo}
              alt="EstateFlow"
              className="h-10 w-10 md:h-14 md:w-14 object-contain"
            />
          </div>

          <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-[#0F172A]">
            EstateFlow
          </h1>

          <p className="mt-1 text-center text-sm text-[#64748B]">
            Property Management Platform
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
              Email
            </label>

            <div className="group flex items-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 transition-all duration-300 hover:border-[#38BDF8] focus-within:border-[#38BDF8] focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-100">
              <Mail
                size={18}
                className="text-[#64748B] group-focus-within:text-[#10B981]"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full bg-transparent px-3 outline-none placeholder:text-[#94A3B8]"
                {...register("email", {
                  required: "Email is required",

                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>

            {errors.email && (
              <p className="mt-2 text-sm text-[#EF4444]">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
              Password
            </label>

            <div className="group flex items-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 transition-all duration-300 hover:border-[#38BDF8] focus-within:border-[#38BDF8] focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-100">
              <Lock
                size={18}
                className="text-[#64748B] group-focus-within:text-[#10B981]"
              />

              <input
                type="password"
                placeholder="Enter your password"
                className="h-12 w-full bg-transparent px-3 outline-none placeholder:text-[#94A3B8]"
                {...register("password", {
                  required: "Password is required",

                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>

            {errors.password && (
              <p className="mt-2 text-sm text-[#EF4444]">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-[#64748B]">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#10B981]"
                {...register("rememberMe")}
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-sm font-medium text-[#10B981] transition hover:text-[#059669]"
            >
              Forgot password?
            </button>
          </div>

          <button
            disabled={isLoading}
            className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full"></span>

            <span className="relative flex items-center gap-2 font-semibold">
              {isLoading ? "Signing In..." : "Sign In"}

              {!isLoading && (
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
