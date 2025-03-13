import { useNavbar } from "@/shared/ui/navbar";
import clsx from "clsx";
import { FC } from "react";

export interface BurgerProps {}

export const Burger: FC<BurgerProps> = () => {
  const { isOpen } = useNavbar();
  return (
    <div className='flex flex-col justify-center items-center w-10 h-10 p-0.5'>
      <span
        className={clsx(
          "block w-6 h-0.5 bg-foreground-contranst transition-transform",
          isOpen ? "translate-y-1.5 rotate-45" : ""
        )}
      />
      <span
        className={clsx(
          "block w-6 h-0.5 my-1 bg-foreground-contranst transition-opacity",
          isOpen ? "opacity-0" : ""
        )}
      />
      <span
        className={clsx(
          "block w-6 h-0.5 bg-foreground-contranst transition-transform",
          isOpen ? "-translate-y-1.5 -rotate-45" : ""
        )}
      />
    </div>
  );
};
