import clsx from "clsx";
import { FC, ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = (props) => {
  return (
    <div
      className={clsx(
        "container mx-auto px-4 sm:px-6 lg:px-8",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
