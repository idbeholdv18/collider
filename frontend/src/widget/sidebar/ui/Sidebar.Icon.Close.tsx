import { FC, memo } from "react";

interface SidebarCloseIconProps {}

export const SidebarCloseIcon: FC<SidebarCloseIconProps> = memo(() => {
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
      <path d='M560-280 360-480l200-200v400Z' />
    </svg>
  );
});
