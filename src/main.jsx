import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider";
import NotificationProvider from "./context/NotificationProvider";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <NotificationProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <App />
        </NotificationProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
