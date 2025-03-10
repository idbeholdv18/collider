import { Sidebar } from "@/widget/sidebar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export interface AppLayoutProps {}

export const AppLayout: FC<AppLayoutProps> = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};
