import { NavLink } from "react-router-dom";
import { LogOut, X } from "lucide-react";
import { navigation } from "../../constants/navigation";
import logo from "../../assets/logos/estateflow_logo.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-[#0F172A]/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-[290px] flex-col bg-white border-r border-[#E2E8F0] shadow-2xl transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
        lg:translate-x-0 lg:static`}
      >
        {/* Logo Section */}
        <div className="relative flex items-center gap-4 border-b border-[#E2E8F0] px-6 py-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg">
            <img
              src={logo}
              alt="EstateFlow"
              className="h-10 w-10 object-contain"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#0F172A]">
              EstateFlow
            </h1>

            <p className="mt-1 text-xs font-medium tracking-wide text-[#64748B]">
              Property Management
            </p>
          </div>

          {/* Mobile Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 rounded-xl p-2 text-[#64748B] transition-all duration-300 hover:bg-[#F1F5F9] hover:text-[#0F172A] lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 scrollbar-thin">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `group relative mb-2 flex items-center gap-4 overflow-hidden rounded-2xl px-4 py-3.5 transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#1E293B] text-white shadow-lg"
                      : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A] hover:translate-x-1"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Active Indicator */}
                    {isActive && (
                      <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-[#10B981]" />
                    )}

                    <Icon
                      size={20}
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    />

                    <span className="font-medium tracking-wide">
                      {item.title}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-[#E2E8F0] p-4">
          <button
            className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-[#EF4444] transition-all duration-300 hover:bg-red-50 hover:translate-x-1"
          >
            <LogOut
              size={20}
              className="transition-transform duration-300 group-hover:rotate-12"
            />

            <span className="font-medium">
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
