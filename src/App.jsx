import AppRoutes from "./routes/AppRoutes";
import { useAuth } from "./context/AuthContext";
import LoadingScreen from "./components/common/LoadingScreen";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
}
  return <AppRoutes />;
}

export default App;
