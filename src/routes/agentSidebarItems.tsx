import AllUsers from "@/pages/Admin/ManageUsers";
import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Top Up",
        url: "/agent/top-up",
        component: Analytics,
      },
      {
        title: "Cash Out for users",
        url: "/agent/cash-out-users",
        component: AllUsers,
      },
      {
        title: "My Transaction List",
        url: "/agent/transaction List",
        component: AllUsers,
      },
      {
        title: "Edit Profile",
        url: "/agent/edit-profile",
        component: AllUsers,
      },
    ],
  },
];
