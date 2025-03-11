import { FC, memo } from "react";

interface SidebarOpenIconProps {}

export const SidebarOpenIcon: FC<SidebarOpenIconProps> = memo(() => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='32px'
      viewBox='0 -960 960 960'
      width='32px'
      fill={getComputedStyle(document.body).getPropertyValue(
        "--foreground-primary"
      )}
    >
      <path d='M400-280v-400l200 200-200 200Z' />
    </svg>
  );
});
