import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Properties from "../pages/properties/Properties";
import PropertyDetails from "../pages/properties/PropertyDetails";
import Clients from "../pages/clients/Clients";
import Agents from "../pages/agents/Agents";
import Visits from "../pages/visits/Visits";
import Favorites from "../pages/favorites/Favorites";
import Analytics from "../pages/analytics/Analytics";
import Notifications from "../pages/notifications/Notifications";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import Login from "../pages/auth/Login";
import NotFound from "../pages/error/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard Layout */}

        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />

          <Route
            path="properties"
            element={<Properties />}
          />

          <Route
            path="properties/:id"
            element={<PropertyDetails />}
          />

          <Route
            path="clients"
            element={<Clients />}
          />

          <Route
            path="agents"
            element={<Agents />}
          />

          <Route
            path="visits"
            element={<Visits />}
          />

          <Route
            path="favorites"
            element={<Favorites />}
          />

          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route
            path="notifications"
            element={<Notifications />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

        </Route>

        {/* Auth */}

        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<Login />}
          />

        </Route>

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;