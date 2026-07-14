import {
  Download,
  FileText,
  BarChart3,
} from "lucide-react";

import AnalyticsFilters from "../../components/analytics/AnalyticsFilters";
import KPISection from "../../components/analytics/KPISection";
import RevenueChart from "../../components/analytics/RevenueChart";
import SalesChart from "../../components/analytics/SalesChart";
import PropertyChart from "../../components/analytics/PropertyChart";
import CityChart from "../../components/analytics/CityChart";
import TopAgentsTable from "../../components/analytics/TopAgentsTable";
import MostViewedProperties from "../../components/analytics/MostViewedProperties";
import useAnalytics from "../../hooks/useAnalytics";

const Analytics = () => {
  const {
    filters,
    setFilters,
    revenueData,
    salesData,
    propertyTypeData,
    cityData,
    topAgents,
    viewedProperties,
  } = useAnalytics();

  return (
    <div className="space-y-6 lg:space-y-8">

      {/* Header */}

      <div className="rounded-3xl border border-[#E2E8F0] bg-gradient-to-r from-[#FFFFFF] via-[#F8FAFC] to-[#EEF9F6] p-5 shadow-sm sm:p-7">

        <div className="flex flex-col gap-5 sm:gap-2 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10B981]/10">

                <BarChart3
                  size={24}
                  className="text-[#10B981]"
                />

              </div>

              <div>

                <h1 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
                  Analytics Dashboard
                </h1>

                <p className="mt-1 text-sm text-[#64748B] sm:text-base">
                  Monitor revenue, sales performance, properties and business
                  growth.
                </p>

              </div>

            </div>

          </div>

          {/* Export Buttons */}

          <div className="flex flex-col gap-3 sm:gap-1 sm:flex-row">

            <button
              className="
                flex items-center justify-center gap-2
                rounded-2xl
                border border-[#E2E8F0]
                bg-white
                px-5
                py-3
                font-semibold
                text-[#64748B]
                transition-all
                duration-300
                hover:border-[#10B981]
                hover:bg-[#EEF9F6]
                hover:text-[#10B981]
              "
            >
              <Download size={18} />
              Export CSV
            </button>

            <button
              className="
                flex items-center justify-center gap-2
                rounded-2xl
                bg-[#10B981]
                px-5
                py-3
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#059669]
                hover:shadow-lg
              "
            >
              <FileText size={18} />
              Export PDF
            </button>

          </div>

        </div>

      </div>

      {/* Filters */}

      <AnalyticsFilters
        filters={filters}
        setFilters={setFilters}
      />

      {/* KPI Cards */}

      <KPISection />

      {/* Revenue & Sales */}

      <div className="grid gap-6 xl:grid-cols-2">

        <RevenueChart data={revenueData} />

        <SalesChart data={salesData} />

      </div>

      {/* Property Charts */}

      <div className="grid gap-6 xl:grid-cols-2">

        <PropertyChart data={propertyTypeData} />

        <CityChart data={cityData} />

      </div>

      {/* Top Agents */}

      <TopAgentsTable agents={topAgents} />

      {/* Most Viewed Properties */}

      <MostViewedProperties
        properties={viewedProperties}
      />

    </div>
  );
};

export default Analytics;