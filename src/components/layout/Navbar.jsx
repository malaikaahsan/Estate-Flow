import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = ({ setIsOpen }) => {
  const location = useLocation();
  const { user } = useAuth();

  const pageTitle =
    location.pathname === "/"
      ? "Dashboard"
      : location.pathname
          .split("/")
          .filter(Boolean)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

  return (
    <header className="w-full">
      <div className="flex h-16 sm:h-[72px] items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white px-4 sm:px-6 shadow-md transition-all duration-300">
        <div className="flex flex-1 items-center gap-3 min-w-0">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#1E293B] transition-all duration-300 hover:bg-[#EEF9F6]"
          >
            <Menu size={22} />
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-[#0F172A] sm:text-xl lg:text-2xl">
              {pageTitle}
            </h1>

            <p className="hidden md:block text-sm text-[#64748B]">
              Property Management Dashboard
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="relative hidden lg:block">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
            />

            <input
              type="text"
              placeholder="Search..."
              className="h-11 w-72 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#38BDF8] focus:ring-4 focus:ring-sky-100"
            />
          </div>

          <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] transition-all duration-300 hover:bg-[#EEF9F6] hover:scale-105">
            <Bell size={19} className="text-[#1E293B]" />

            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#EF4444]"></span>
          </button>

          <button className="group flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-1.5 pr-2 transition-all duration-300 hover:bg-white hover:shadow-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] font-semibold text-white">
              {user?.name?.charAt(0)}
            </div>

            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-[#0F172A]">
                {user?.name}
              </p>

              <p className="text-xs text-[#64748B] capitalize">{user?.role}</p>
            </div>

            <ChevronDown
              size={18}
              className=" text-[#64748B] transition-transform duration-300 group-hover:rotate-180"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
