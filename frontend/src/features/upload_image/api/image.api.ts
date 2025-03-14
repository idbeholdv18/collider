import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "images",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3001/api/image/" }),
  tagTypes: ["Image"],
  endpoints: (build) => ({
    getImageByName: build.query({
      query: (filename?) => `/get?filename=${filename}`,
      providesTags: ["Image"],
    }),
    uploadImage: build.mutation({
      query: (data: FormData) => ({
        url: `upload`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Image"],
    }),
  }),
});

export const { useUploadImageMutation, useGetImageByNameQuery } = imageApi;
