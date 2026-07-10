import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex min-w-0 flex-1 flex-col transition-all duration-300 overflow-hidden">
        <div className="sticky top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8">
          <Navbar setIsOpen={setIsSidebarOpen} />
        </div>

        <main className="flex-1 overflow-y-auto px-4 pb-6 pt-5 sm:px-6 sm:pb-8 lg:px-8 lg:pb-10">
          <div className="mx-auto w-full max-w-7xl animate-[fadeIn_.35s_ease]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
