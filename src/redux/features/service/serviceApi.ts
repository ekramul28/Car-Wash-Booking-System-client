import { baseApi } from "../../api/baseApi";

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getService: builder.query({
      query: (userInfo) => ({
        url: "/services",
        method: "GET",
        body: userInfo,
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

export const { useGetServiceQuery, useCreateServiceMutation } = ServiceApi;
