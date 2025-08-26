import { createBrowserRouter } from "react-router";
import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import DashboardLayout from "@/components/layout/DashboardLayout";
import UserOverview from "@/pages/User/UserOverview";
import AgentOverview from "@/pages/Agent/AgentOverview";
import { generateRoutes } from "@/utils/generateRoutes";
import { adminSidebarItems } from "./adminSidebarItems";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Registration,
    path: "/Register",
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [...generateRoutes(adminSidebarItems)],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
      {
        Component: UserOverview,
        path: "overview",
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/agent",
    children: [
      {
        Component: AgentOverview,
        path: "overview",
      },
    ],
  },
]);
