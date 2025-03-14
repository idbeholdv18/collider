import { imageApi } from "@/features/upload_image/api/image.api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [imageApi.reducerPath]: imageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imageApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
