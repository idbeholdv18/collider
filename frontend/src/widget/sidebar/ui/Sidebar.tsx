import { FC } from "react";
import { Sidebar as SharedSidebar } from "@/shared/ui/sidebar";

export interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
  return (
    <SharedSidebar>
      <div className='fixed h-screen w-96 bg-background-contranst border border-e-border-primary pt-14'>
        <div className='flex flex-col'>
          <h1>Sidebar</h1>
        </div>
      </div>
    </SharedSidebar>
  );
};
