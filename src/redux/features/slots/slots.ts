import { baseApi } from "../../api/baseApi";

const SlotsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSlots: builder.query({
      query: (userInfo) => ({
        url: `/slots/availability`,
        method: "GET",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetSlotsQuery } = SlotsApi;
