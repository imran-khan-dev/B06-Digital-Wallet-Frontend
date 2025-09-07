import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyWallet: builder.query({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
    }),
    getAllWallet: builder.query({
      query: () => ({
        url: "/wallet/all-wallets",
        method: "GET",
      }),
    }),
    withdrawMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/withdraw-money",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
    sendMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/send-money",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
    addMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/add-money",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
  }),
});

export const {
  useGetAllWalletQuery,
  useWithdrawMoneyMutation,
  useSendMoneyMutation,
  useAddMoneyMutation,
  useGetMyWalletQuery,
} = authApi;
