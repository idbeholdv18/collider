import { Navbar } from "@/widget/navbar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export interface RootLayoutProps {}

export const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
