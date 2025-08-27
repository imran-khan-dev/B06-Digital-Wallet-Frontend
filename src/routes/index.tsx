import { createBrowserRouter } from "react-router";
import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AgentOverview from "@/pages/Agent/AgentOverview";
import { generateRoutes } from "@/utils/generateRoutes";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";

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
    children: [...generateRoutes(userSidebarItems)],
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
