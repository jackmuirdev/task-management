import App from "../App";
import LoginScreen from "../pages/auth/LoginScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import DashboardScreen from "../pages/interface/DashboardScreen";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      // Interface
      <Route path="/" element={<DashboardScreen />} />

      // Authentication
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Route>
  )
)