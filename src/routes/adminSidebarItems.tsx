import AllUsers from "@/pages/Admin/AllUsers";
import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Manage Users",
        url: "/admin/manage-users",
        component: Analytics,
      },
      {
        title: "Manage Agents",
        url: "/admin/manage-agents",
        component: AllUsers,
      },
      {
        title: "Manage Wallets",
        url: "/admin/manage-Wallets",
        component: AllUsers,
      },
      {
        title: "View All Transactions",
        url: "/admin/manage-Wallets",
        component: AllUsers,
      },
       {
        title: "Edit Profile",
        url: "/admin/edit-profile",
        component: AllUsers,
      },
    ],
  },
];
