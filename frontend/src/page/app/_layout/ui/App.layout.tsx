import { FC } from "react";
import { Outlet } from "react-router-dom";

export interface AppLayoutProps {}

export const AppLayout: FC<AppLayoutProps> = () => {
  return (
    <div>
      <h1>App layout</h1>
      <Outlet />
    </div>
  );
};
