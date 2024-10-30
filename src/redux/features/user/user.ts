import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: `/user`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    UpdateUser: builder.mutation({
      query: (data) => {
        return {
          url: `/user/${data.id}`,
          method: "PATCH",
          body: data.updateData,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetAllUserQuery, useUpdateUserMutation } = userApi;
