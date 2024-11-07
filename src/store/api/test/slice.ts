import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApiSlice = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL,
  }),
  tagTypes: ["Tests"],
  endpoints: (builder) => ({}),
});

export const {} = testApiSlice;
