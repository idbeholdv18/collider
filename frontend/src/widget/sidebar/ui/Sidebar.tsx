import { FilterModule } from "@/app/module/filter/ui/Filter.Module";
import { ImageModule } from "@/app/module/image/ui/Image.Module";
import { Sidebar as SharedSidebar, useSidebar } from "@/shared/ui/sidebar";
import { FC } from "react";
import { SidebarOpenIcon } from "./Sidebar.Icon.Open";
import clsx from "clsx";
import { SidebarCloseIcon } from "./Sidebar.Icon.Close";

export interface SidebarProps {}

const testFilterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const Sidebar: FC<SidebarProps> = () => {
  const { isOpen } = useSidebar();
  return (
    <div
      className={clsx(
        "z-10 fixed h-screen w-80 lg:w-96 bg-background-contranst border border-e-border-primary pt-14 transition-transform",
        !isOpen && "max-lg:-translate-x-80"
      )}
    >
      <SharedSidebar.Toggle
        className={clsx("lg:hidden absolute top-16 -right-8 z-10")}
        closeIcon={<SidebarCloseIcon />}
        openIcon={<SidebarOpenIcon />}
      />
      <div className='flex flex-col p-3 gap-6 h-full overflow-y-scroll'>
        <ImageModule />
        {testFilterArray.map((filter, idx) => (
          <FilterModule key={idx} />
        ))}
      </div>
    </div>
  );
};
