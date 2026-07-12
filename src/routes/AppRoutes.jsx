import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import ProtectedRoute from "./ProtectedRoute";
import RoleProtectedRoute from "./RoleProtectedRoute";

import Unauthorized from "../pages/error/Unauthorized";

import { navigation } from "../constants/navigation";

import Dashboard from "../pages/dashboard/Dashboard";
import Properties from "../pages/properties/Properties";
import PropertyDetails from "../pages/properties/PropertyDetails";
import Clients from "../pages/clients/Clients";
import ClientDetails from "../pages/clients/ClientDetails";
import Agents from "../pages/agents/Agents";
import AgentDetails from "../pages/agents/AgentDetails";
import Visits from "../pages/visits/Visits";
import Favorites from "../pages/favorites/Favorites";
import Analytics from "../pages/analytics/Analytics";
import Notifications from "../pages/notifications/Notifications";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import Login from "../pages/auth/Login";
import NotFound from "../pages/error/NotFound";
import ScrollToTop from "../components/common/ScrollToTop";

const AppRoutes = () => {
  const getRoles = (path) =>
    navigation.find((item) => item.path === path)?.roles || [];
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Auth */}

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Dashboard Layout */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="properties" element={<Properties />} />

          <Route path="properties/:id" element={<PropertyDetails />} />

          <Route
            path="clients"
            element={
              <RoleProtectedRoute allowedRoles={getRoles("/clients")}>
                <Clients />
              </RoleProtectedRoute>
            }
          />
          <Route path="/clients/:id" element={<ClientDetails />} />

          <Route
            path="agents"
            element={
              <RoleProtectedRoute allowedRoles={getRoles("/agents")}>
                <Agents />
              </RoleProtectedRoute>
            }
          />
          <Route path="agents/:id" element={<AgentDetails />} />
          <Route
            path="visits"
            element={
              <RoleProtectedRoute allowedRoles={getRoles("/visits")}>
                <Visits />
              </RoleProtectedRoute>
            }
          />

          <Route path="favorites" element={<Favorites />} />

          <Route
            path="analytics"
            element={
              <RoleProtectedRoute allowedRoles={getRoles("/analytics")}>
                <Analytics />
              </RoleProtectedRoute>
            }
          />

          <Route path="notifications" element={<Notifications />} />

          <Route
            path="settings"
            element={
              <RoleProtectedRoute allowedRoles={getRoles("/settings")}>
                <Settings />
              </RoleProtectedRoute>
            }
          />

          <Route path="profile" element={<Profile />} />
        </Route>

        {/* 404 */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
