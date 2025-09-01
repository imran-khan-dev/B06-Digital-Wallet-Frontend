import UserOverview from "@/pages/User/UserDashboardOverview";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const CashIn = lazy(() => import("@/pages/User/CashIn"));
const CashOutUser = lazy(() => import("@/pages/User/CashOutUser"));
const SendMoney = lazy(() => import("@/pages/User/SendMoney"));
const UserTransactions = lazy(() => import("@/pages/User/UserTransactions"));
const UserEditProfile = lazy(() => import("@/pages/User/UserEditProfile"));

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/user/overview",
        component: UserOverview,
      },
      {
        title: "Cash In",
        url: "/user/cash-in",
        component: CashIn,
      },
      {
        title: "Cash Out",
        url: "/user/cash-out",
        component: CashOutUser,
      },
      {
        title: "Send Money",
        url: "/user/send-money",
        component: SendMoney,
      },
      {
        title: "Transaction History",
        url: "/user/transactions-history",
        component: UserTransactions,
      },
      {
        title: "Edit Profile",
        url: "/user/edit-profile",
        component: UserEditProfile,
      },
    ],
  },
];
