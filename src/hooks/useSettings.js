import { useEffect, useState } from "react";

const defaultSettings = {
  general: {
    agencyName: "EstateFlow",
    email: "contact@estateflow.com",
    phone: "+92 300 1234567",
    website: "www.estateflow.com",
    address: "Lahore, Pakistan",
    timezone: "Asia/Karachi",
  },

  appearance: {
    theme: "light",
    fontSize: "medium",
    sidebar: "expanded",
    layout: "comfortable",
  },

  notifications: {
    email: true,
    sms: false,
    browser: true,
    marketing: false,
    weekly: true,
    monthly: true,
  },

  language: {
    language: "English",
    currency: "PKR",
    dateFormat: "DD/MM/YYYY",
  },
};

const useSettings = () => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("settings");

    return saved
      ? JSON.parse(saved)
      : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );
  }, [settings]);

  return {
    settings,
    setSettings,
  };
};

export default useSettings;