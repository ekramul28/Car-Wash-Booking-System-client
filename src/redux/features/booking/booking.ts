import { baseApi } from "../../api/baseApi";
import { TQueryParam } from "../service/serviceApi";

const Booking = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/bookings`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["booking"],
    }),
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
    updateBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings/${data.id}`,
        method: "PATCH",
        body: data.updateData,
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetMyBookingQuery,
  useDeleteSingleMyBookingMutation,
  useGetAllBookingQuery,
  useUpdateBookingMutation,
} = Booking;
