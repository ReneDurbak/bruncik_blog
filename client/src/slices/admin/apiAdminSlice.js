import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiAdminSlice = createApi({
  baseQuery,
  tagTypes: ["Admin"],
  endpoints: (builder) => ({}),
});
