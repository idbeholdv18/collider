import { useGetImageByNameQuery } from "@/features/upload_image/api/image.api";
import { selectImageUrl } from "@/features/upload_image/selectors/imageUrl.selector";
import { useAppSelector } from "@/shared/store/hooks";
import { FC, useEffect } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export interface AppPageProps {}

export const AppPage: FC<AppPageProps> = () => {
  const url = useAppSelector(selectImageUrl);
  const { data } = useGetImageByNameQuery(url, {
    skip: !url,
  });

  useEffect(() => {
    if (data) {
      const img = new Image(); // Создаем новый объект Image
      img.src = data; // Устанавливаем источник
    }
  }, [data]); // Зависимость от data

  return (
    <div className='h-screen lg:ms-96 pt-14 flex flex-col'>
      <TransformWrapper
        initialScale={1}
        minScale={0.2}
        maxScale={6}
        centerOnInit={true}
        disablePadding={true}
      >
        <TransformComponent
          wrapperStyle={{ width: "100%", height: "100%", marginBottom: "12px" }}
        >
          {data ? (
            <img
              className='object-contain w-full h-full'
              src={data}
              alt='Uploaded'
              style={{ imageRendering: "revert-layer" }}
            />
          ) : (
            "upload"
          )}
        </TransformComponent>
      </TransformWrapper>
      <div className='p-3 mb-3 mx-3 rounded-md outline outline-border-primary bg-background-contranst'>
        <h1>Toolbar</h1>
      </div>
    </div>
  );
};
