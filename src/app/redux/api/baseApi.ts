import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://medicine-e-commerce-server-green.vercel.app/api/v1",
    credentials: "include",
  }),
  tagTypes: ["cart", "cart2"],

  endpoints: () => ({}),
});
