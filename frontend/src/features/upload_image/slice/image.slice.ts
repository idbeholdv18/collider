import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { T_ImageState } from "../types/ImageState.type";
import { Cookies } from "react-cookie";
import { COOKIE } from "@/shared/const/cookies.const";

const cookies = new Cookies();

const initialState: T_ImageState = {
  url: cookies.get(COOKIE.IMAGE_URL) || undefined,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
      cookies.set(COOKIE.IMAGE_URL, action.payload, { path: "/" });
    },
  },
});

export const { actions: imageActions } = imageSlice;
export const { reducer: imageReducer } = imageSlice;
