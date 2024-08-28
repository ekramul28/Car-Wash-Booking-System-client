import { baseApi } from "../../api/baseApi";

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getService: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
    getSingleService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
    }),
    CreateService: builder.mutation({
      query: (userInfo) => ({
        url: "/services",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useGetServiceQuery,
  useGetSingleServiceQuery,
  useCreateServiceMutation,
} = ServiceApi;
