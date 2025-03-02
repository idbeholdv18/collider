import { FC } from "react";
import { Outlet } from "react-router-dom";

export interface RootLayoutProps {}

export const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <div>
      <h1>Root layout</h1>
      <Outlet />
    </div>
  );
};
