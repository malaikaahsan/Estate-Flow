import { dashboardCards } from "../../data/dashboard";
import DashboardCard from "../../components/dashboard/DashboardCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import PropertyTypeChart from "../../components/dashboard/PropertyTypeChart";
import VisitsChart from "../../components/dashboard/VisitsChart";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <div className="relative space-y-8">

      {/* Header */}
      <section className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/80 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 sm:p-8">

        {/* Decorative Glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#38BDF8]/10 blur-3xl"></div>
        <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#10B981]/10 blur-3xl"></div>

        <div className="relative flex flex-col gap-2">

          <span className="inline-flex w-fit items-center rounded-full bg-[#EEF9F6] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
            EstateFlow Dashboard
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Welcome Back
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
            Here's a complete overview of your properties, revenue,
            visitors, and recent activities.
          </p>

        </div>

      </section>

      {/* Stats Cards */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.title}
            {...card}
          />
        ))}
      </section>

      {/* Charts */}
      <section className="grid gap-6 items-stretch lg:grid-cols-2">

        <div className="rounded-3xl border border-[#E2E8F0] bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <RevenueChart />
        </div>

        <div className="rounded-3xl border border-[#E2E8F0] bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
         <VisitsChart />
        </div>

      </section>

      {/* Visits + Activity */}
      <section className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl border border-[#E2E8F0] bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          
          <PropertyTypeChart />
        </div>

        <div className="rounded-3xl border border-[#E2E8F0] bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <RecentActivity />
        </div>

      </section>

      {/* Quick Actions */}
      <section className="rounded-3xl border border-[#E2E8F0] bg-white/80 p-6 shadow-lg backdrop-blur-xl transition-all duration-300">
        <QuickActions />
      </section>

    </div>
  );
};

export default Dashboard;
