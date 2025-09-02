import type { ComponentType } from "react";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "ADMIN" | "AGENT" | "USER";

export type IMyTransactionsResponse = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
};


export type IMyTransactionsRequest = {
  userId: string; 
  page?: number; 
  limit?: number; 
};