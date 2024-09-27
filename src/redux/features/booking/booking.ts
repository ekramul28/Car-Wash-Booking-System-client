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
    deleteSingleMyBooking: builder.mutation({
      query: (id) => ({
        url: `/my-bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const { useGetMyBookingQuery, useDeleteSingleMyBookingMutation } =
  Booking;
