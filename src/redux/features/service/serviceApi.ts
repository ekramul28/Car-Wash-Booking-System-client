import { baseApi } from "../../api/baseApi";
export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getService: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        console.log({ args });
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/services",
          method: "GET",
          params: params,
        };
      },
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
