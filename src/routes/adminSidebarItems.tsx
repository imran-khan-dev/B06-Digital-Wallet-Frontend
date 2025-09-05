import { AdminDashboardOverviewData } from "@/components/modules/admin/AdminDashboardOverviewData";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const ManageUsers = lazy(() => import("@/pages/Admin/ManageUsers"));
const MangeAgents = lazy(() => import("@/pages/Admin/MangeAgents"));
const EditProfile = lazy(() => import("@/pages/Admin/AdminEditProfile"));
const AllTransactions = lazy(() => import("@/pages/Admin/AllTransactions"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        component: AdminDashboardOverviewData,
      },
      {
        title: "Manage Users",
        url: "/admin/manage-users",
        component: ManageUsers,
      },
      {
        title: "Manage Agents",
        url: "/admin/manage-agents",
        component: MangeAgents,
      },
      {
        title: "View All Transactions",
        url: "/admin/all-transactions",
        component: AllTransactions,
      },
      {
        title: "Profile Management",
        url: "/admin/edit-profile",
        component: EditProfile,
      },
    ],
  },
];
