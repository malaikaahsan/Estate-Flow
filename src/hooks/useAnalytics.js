import { useMemo, useState } from "react";

import {
  revenueData,
  salesData,
  propertyTypeData,
  cityData,
  topAgents,
  viewedProperties,
} from "../data/analytics";

const useAnalytics = () => {
  const [filters, setFilters] = useState({
    dateRange: "Last Year",
    city: "",
    propertyType: "",
    agent: "",
  });

  const analytics = useMemo(() => {
    // In the future, filters will modify the data.
    // For now we're returning mock data.

    return {
      revenueData,
      salesData,
      propertyTypeData,
      cityData,
      topAgents,
      viewedProperties,
    };
  }, [filters]);

  return {
    filters,
    setFilters,
    ...analytics,
  };
};

export default useAnalytics;