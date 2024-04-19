import { adminApiSlice } from "./adminApiSlice";
const ADMINS_URL = '/admins';

export const adminsApiSlice = adminApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${ADMINS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),

  }),
});

export const { useLoginMutation } = adminsApiSlice;
