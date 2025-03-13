import { FC } from "react";

export interface AppPageProps {}

export const AppPage: FC<AppPageProps> = () => {
  return (
    <div className='h-screen lg:ms-96'>
      <h1>AppPage</h1>
    </div>
  );
};
