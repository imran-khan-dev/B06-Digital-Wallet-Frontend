import type { ISidebarItem } from "@/types";

export const generateRoutes = (sidebarItems: ISidebarItem[]) => {
  console.log("generateroute start", sidebarItems);

  const sidebarItemsRefined = sidebarItems.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
      Component: route.component,
    }))
  );

  console.log("generateroute end", sidebarItemsRefined);
  return sidebarItemsRefined;
};
