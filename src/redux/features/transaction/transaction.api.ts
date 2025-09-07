import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const {
  useTransactionHistoryQuery,
  useTransactionSumQuery,
  useGetMyRecentTransactionsQuery,
  useGetMyTransactionsQuery,
} = authApi;
