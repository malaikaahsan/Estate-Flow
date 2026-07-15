import { useState } from "react";

import SettingsTabs from "../../components/settings/SettingsTabs";
import GeneralSettings from "../../components/settings/GeneralSettings";
import AppearanceSettings from "../../components/settings/AppearanceSettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import LanguageSettings from "../../components/settings/LanguageSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";

import useSettings from "../../hooks/useSettings";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const { settings, setSettings } = useSettings();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="text-slate-500 mt-2">Manage your account preferences.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="lg:col-span-3">
          {activeTab === "general" && (
            <GeneralSettings settings={settings} setSettings={setSettings} />
          )}

          {activeTab === "appearance" && (
            <AppearanceSettings settings={settings} setSettings={setSettings} />
          )}

          {activeTab === "notifications" && (
            <NotificationSettings
              settings={settings}
              setSettings={setSettings}
            />
          )}

          {activeTab === "language" && (
            <LanguageSettings settings={settings} setSettings={setSettings} />
          )}

          {activeTab === "security" && <SecuritySettings />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
