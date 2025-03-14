import { useGetImageByNameQuery } from "@/features/upload_image/api/image.api";
import { selectImageUrl } from "@/features/upload_image/selectors/imageUrl.selector";
import { useAppSelector } from "@/shared/store/hooks";
import { FC } from "react";

export interface AppPageProps {}

export const AppPage: FC<AppPageProps> = () => {
  const url = useAppSelector(selectImageUrl);
  const { data } = useGetImageByNameQuery(url, {
    skip: !url,
  });
  return (
    <div className='min-h-screen lg:ms-96 pt-14'>
      <div className='flex flex-col justify-between h-full p-3 gap-3'>
        <div className='rounded-md bg-border-primary p-3 flex justify-center items-center'>
          {data ? (
            <img className='object-scale-down w-full h-full' src={data} h-96 />
          ) : (
            "upload"
          )}
        </div>
        <div className='p-3 rounded-md outline outline-border-primary bg-background-contranst'>
          <h1>Toolbar</h1>
        </div>
      </div>
    </div>
  );
};
