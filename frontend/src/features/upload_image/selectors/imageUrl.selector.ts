import { RootState } from "@/shared/store/store";

export const selectImageUrl = (store: RootState) => store.image.url;
