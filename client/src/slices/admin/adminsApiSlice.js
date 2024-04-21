import { apiAdminSlice } from "./apiAdminSlice";
const ADMINS_URL = "/admins";

export const adminsApiSlice = apiAdminSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${ADMINS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${ADMINS_URL}/logout`,
        method: "POST",
      }),

    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = adminsApiSlice;
