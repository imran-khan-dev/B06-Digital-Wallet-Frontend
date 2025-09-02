import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    allUserInfo: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    allAgentInfo: builder.query({
      query: () => ({
        url: "/user/all-agents",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
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
    transactionSum: builder.query({
      query: () => ({
        url: "/transaction/transaction-sum",
        method: "GET",
      }),
    }),
    getMyRecentTransactions: builder.query({
      query: (userId) => ({
        url: `/transaction/transaction-history/${userId}?limit=5`,
        method: "GET",
      }),
    }),
    withdrawMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/withdraw-money",
        method: "POST",
        data: payload, // { agentID, amount }
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
    sendMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/send-money",
        method: "POST",
        data: payload, // { userID, amount }
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
    getMyTransactions: builder.query({
      query: ({ userId, type, fromDate, toDate, page = 1, limit = 5 }) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (type) params.append("type", type);
        if (fromDate) params.append("fromDate", fromDate);
        if (toDate) params.append("toDate", toDate);

        return {
          url: `/transaction/transaction-history/${userId}?${params.toString()}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUserInfoQuery,
  useAllUserInfoQuery,
  useAllAgentInfoQuery,
  useGetAllWalletQuery,
  useTransactionSumQuery,
  useGetMyRecentTransactionsQuery,
  useGetMyTransactionsQuery,
  useWithdrawMoneyMutation,
  useSendMoneyMutation,
  useLogoutMutation,
  useGetMyWalletQuery,
} = authApi;
