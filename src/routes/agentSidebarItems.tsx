import AgentOverview from "@/pages/Agent/AgentDashboardOverview";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const TopUp = lazy(() => import("@/pages/Agent/CashIn"));
const CashOutAgent = lazy(() => import("@/pages/Agent/CashOutAgent"));
const AgentTransactions = lazy(() => import("@/pages/Agent/AgentTransactions"));
const AgentEditProfile = lazy(() => import("@/pages/Agent/AgentEditProfile"));

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/agent/overview",
        component: AgentOverview,
      },
      {
        title: "Cash In",
        url: "/agent/cash-in",
        component: TopUp,
      },
      {
        title: "Cash Out for users",
        url: "/agent/cash-out-users",
        component: CashOutAgent,
      },
      {
        title: "Agent Transactions List",
        url: "/agent/agent-transactions",
        component: AgentTransactions,
      },
      {
        title: "Profile Management",
        url: "/agent/edit-profile",
        component: AgentEditProfile,
      },
    ],
  },
];
