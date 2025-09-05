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
    transactionHistory: builder.query({
      query: () => ({
        url: "/transaction/transaction-history",
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
    getMyTransactions: builder.query({
      query: ({
        userId,
        type,
        fromDate,
        toDate,
        page = 1,
        limit = 5,
        search,
        status,
        minAmount,
        maxAmount,
      }) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (type) params.append("type", type);
        if (fromDate) params.append("fromDate", fromDate);
        if (toDate) params.append("toDate", toDate);
        if (search) params.append("search", search);
        if (status) params.append("status", status);
        if (minAmount) params.append("minAmount", minAmount);
        if (maxAmount) params.append("maxAmount", maxAmount);

        return {
          url: `/transaction/transaction-history/${userId}?${params.toString()}`,
          method: "GET",
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (payload) => ({
        url: "/user/update-profile",
        method: "PATCH",
        data: payload,
      }),
    }),
    updateUserByAdmin: builder.mutation({
      query: ({ userId, payload }) => ({
        url: `/user/update/${userId}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: ["USER"],
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
  useTransactionHistoryQuery,
  useTransactionSumQuery,
  useGetMyRecentTransactionsQuery,
  useGetMyTransactionsQuery,
  useWithdrawMoneyMutation,
  useSendMoneyMutation,
  useAddMoneyMutation,
  useLogoutMutation,
  useGetMyWalletQuery,
  useUpdateProfileMutation,
  useUpdateUserByAdminMutation,
} = authApi;
