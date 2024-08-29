import { baseApi } from "../../api/baseApi";

const SlotsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSlots: builder.query({
      query: (userInfo) => ({
        url: `/slots/availability?serviceId=${userInfo.serviceId}&date=${userInfo?.date}`,
        method: "GET",
      }),
    }),
    bookingSlots: builder.mutation({
      query: (userInfo) => ({
        url: `/bookings`,
        method: "POST",
        body: userInfo,
      }),
    }),
    updateSlots: builder.mutation({
      query: (userInfo) => ({
        url: `/slots/${userInfo.id}`,
        method: "PUT",
        body: userInfo?.dataUp,
      }),
    }),
  }),
});

export const {
  useGetSlotsQuery,
  useBookingSlotsMutation,
  useUpdateSlotsMutation,
} = SlotsApi;
