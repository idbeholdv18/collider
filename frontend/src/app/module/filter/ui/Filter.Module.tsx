import clsx from "clsx";
import { FC } from "react";

export interface FilterModuleProps {}

export const FilterModule: FC<FilterModuleProps> = () => {
  return (
    <div
      className={clsx(
        "w-full bg-background-primary rounded-md outline outline-border-primary p-3 relative"
      )}
    >
      <div className={clsx("flex justify-between items-center")}>
        {/* heading */}
        <button className='bg-[#fd4646] w-3 h-3 rounded-full' />
        <h1 className='font-medium'>Module name</h1>
      </div>
      {/* add button */}
      <button className='w-6 h-6 rounded-full absolute -bottom-3 bg-background-primary flex justify-center items-center left-1/2 -translate-x-1/2 outline outline-border-primary'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='16px'
          viewBox='0 -960 960 960'
          width='16px'
          fill={getComputedStyle(document.body).getPropertyValue(
            "--foreground-contranst"
          )}
        >
          <path d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' />
        </svg>
      </button>
    </div>
  );
};
