import { baseApi } from "../../api/baseApi";

const SlotsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSlots: builder.query({
      query: (userInfo) => ({
        url: `/slots/availability?serviceId=${userInfo.serviceId}&date=${userInfo?.date}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSlotsQuery } = SlotsApi;
