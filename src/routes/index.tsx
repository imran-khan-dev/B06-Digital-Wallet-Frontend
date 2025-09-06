import { createBrowserRouter } from "react-router";
import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { generateRoutes } from "@/utils/generateRoutes";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import type { TRole } from "@/types";
import { role } from "@/constants/role";
import { agentSidebarItems } from "./agentSidebarItems";
import UserOverview from "@/pages/User/UserDashboardOverview";
import AdminDashboardOverview from "@/pages/Admin/AdminDashboardOverview";
import AgentOverview from "@/pages/Agent/AgentDashboardOverview";
import Homepage from "@/pages/Homepage";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
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
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <AdminDashboardOverview /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: "/user",
    children: [
      { index: true, element: <UserOverview /> },
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.agent as TRole),
    path: "/agent",
    children: [
      { index: true, element: <AgentOverview /> },
      ...generateRoutes(agentSidebarItems),
    ],
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);
