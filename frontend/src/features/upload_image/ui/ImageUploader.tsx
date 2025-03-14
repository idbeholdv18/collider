import clsx from "clsx";
import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useUploadImageMutation } from "../api/image.api";

interface ImageUploaderProps {}

export const ImageUploader: FC<ImageUploaderProps> = () => {
  const [uploadImage, result] = useUploadImageMutation();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const formData = new FormData();
      formData.append("image", file);
      uploadImage(formData);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/png": [".png"] },
    maxFiles: 1,
  });
  return (
    <div
      {...getRootProps({
        className: clsx(
          "dropzone",
          "flex flex-col items-center w-full rounded-md outline-dashed outline-border-primary py-5 px-3 relative justify-center select-none cursor-pointer"
        ),
      })}
    >
      <input {...getInputProps()} />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 -960 960 960'
        width='24px'
        fill={getComputedStyle(document.body).getPropertyValue(
          "--foreground-primary"
        )}
      >
        <path d='M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z' />
      </svg>
      <p className='font-medium mt-1'>Upload image</p>
    </div>
  );
};
