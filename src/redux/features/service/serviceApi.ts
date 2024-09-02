import { baseApi } from "../../api/baseApi";
export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    CreateService: builder.mutation({
      query: (userInfo) => ({
        url: "/services",
        method: "POST",
        body: userInfo,
      }),

      invalidatesTags: ["service"],
    }),
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
      providesTags: ["service"],
    }),

    UpdateService: builder.mutation({
      query: (userInfo) => {
        console.log("api", userInfo);
        return {
          url: `/services/${userInfo._id}`,
          method: "PUT",
          body: userInfo.data,
        };
      },
      invalidatesTags: ["services"],
    }),
    getSingleService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: ["services"],
      async onQueryStarted(userInfo, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Manually refetch the getSingleService query
          dispatch(
            ServiceApi.util.invalidateTags([
              { type: "services", id: userInfo._id },
            ])
          );
        } catch (err) {
          console.error("Update failed", err);
        }
      },
    }),
  }),
});

export const {
  useGetServiceQuery,
  useGetSingleServiceQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
} = ServiceApi;
