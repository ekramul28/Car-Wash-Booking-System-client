import { baseApi } from "../../api/baseApi";

const SlotsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSlots: builder.query({
      query: (userInfo) => ({
        url: `/slots/availability?serviceId=${userInfo.serviceId}&date=${userInfo?.date}`,
        method: "GET",
      }),
      providesTags: ["Slot"],
    }),
    createSlots: builder.mutation({
      query: (userInfo) => ({
        url: `services/slots`,
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["Slot"],
    }),
    bookingSlots: builder.mutation({
      query: (userInfo) => ({
        url: `/bookings`,
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["booking"],
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
  useCreateSlotsMutation,
  useBookingSlotsMutation,
  useUpdateSlotsMutation,
} = SlotsApi;
