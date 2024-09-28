import { baseApi } from "../../api/baseApi";

const PaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    payment: builder.mutation({
      query: (data) => {
        console.log({ api: data });
        return {
          url: "payment/Create-checkout-session",
          method: "POST",
          body: data,
        };
      },
    }),
    amrpayPayment: builder.mutation({
      query: (data) => {
        console.log({ api: data });
        return {
          url: "payment/amrPay",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { usePaymentMutation, useAmrpayPaymentMutation } = PaymentApi;
