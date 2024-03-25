import App from "../App";
import DashboardScreen from "../pages/interface/DashboardScreen";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<DashboardScreen />} />
    </Route>
  )
)