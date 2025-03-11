import { ImageUploader } from "@/features/upload_image";
import { FC } from "react";

interface ImageModuleProps {}

export const ImageModule: FC<ImageModuleProps> = () => {
  return <ImageUploader />;
};
