import { baseApi } from "../../api/baseApi";

const Booking = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyBooking: builder.query({
      query: () => ({
        url: `/my-bookings`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
  }),
});

export const { useGetMyBookingQuery } = Booking;
