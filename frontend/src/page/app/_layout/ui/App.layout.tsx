import { Sidebar } from "@/widget/sidebar";
import { Sidebar as SidebarProvider } from "@/shared/ui/sidebar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export interface AppLayoutProps {}

export const AppLayout: FC<AppLayoutProps> = () => {
  return (
    <div>
      <SidebarProvider>
        <Sidebar />
        <Outlet />
      </SidebarProvider>
    </div>
  );
};
