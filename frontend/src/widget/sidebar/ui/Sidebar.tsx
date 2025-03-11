import { FilterModule } from "@/app/module/filter/ui/Filter.Module";
import { ImageModule } from "@/app/module/image/ui/Image.Module";
import { Sidebar as SharedSidebar } from "@/shared/ui/sidebar";
import { FC } from "react";

export interface SidebarProps {}

const testFilterArray = [1, 2, 3];

export const Sidebar: FC<SidebarProps> = () => {
  return (
    <SharedSidebar>
      <div className='fixed h-screen w-96 bg-background-contranst border border-e-border-primary pt-14'>
        <div className='flex flex-col p-3 gap-6'>
          <ImageModule />
          {testFilterArray.map((filter, idx) => (
            <FilterModule key={idx} />
          ))}
        </div>
      </div>
    </SharedSidebar>
  );
};
