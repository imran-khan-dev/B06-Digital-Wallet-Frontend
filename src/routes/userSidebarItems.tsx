import AllUsers from "@/pages/Admin/AllUsers";
import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Cash In",
        url: "/user/cash-in",
        component: Analytics,
      },
      {
        title: "Cash Out",
        url: "/user/cash-out",
        component: AllUsers,
      },
      {
        title: "Send Money",
        url: "/user/send-money",
        component: AllUsers,
      },
      {
        title: "Transaction History",
        url: "/user/transactions-history",
        component: AllUsers,
      },
      {
        title: "Edit Profile",
        url: "/user/edit-profile",
        component: AllUsers,
      },
    ],
  },
];
