import AllUsers from "@/pages/Admin/ManageUsers";
import type { ISidebarItem } from "@/types";
import ManageUsers from "@/pages/Admin/ManageUsers";
import MangeAgents from "@/pages/Admin/MangeAgents";
import ManageWallets from "@/pages/Admin/ManageWallets";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
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
        title: "Manage Wallets",
        url: "/admin/manage-wallets",
        component: ManageWallets,
      },
      {
        title: "View All Transactions",
        url: "/admin/all-transactions",
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
