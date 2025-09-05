/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetMyTransactionsQuery } from "@/redux/features/auth/auth.api";
import Loading from "./Loading";

interface TransactionHistoryProps {
  user: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
  };
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ user }) => {
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    search: "",
    minAmount: "",
    maxAmount: "",
    fromDate: "",
    toDate: "",
    page: 1,
    limit: 5,
  });

  const userId = user._id;

  const { data, isLoading } = useGetMyTransactionsQuery(
    { userId, ...filters },
    { skip: !userId }
  );

  const transactions = Array.isArray(data?.data?.data?.transactions)
    ? data.data.data.transactions
    : [];

  const meta = data?.data?.meta;
  const totalPages = meta ? Math.ceil(meta.total / meta.limit) : 1;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 });
  };

  const goPrev = () => {
    if (filters.page > 1) {
      setFilters((prev) => ({ ...prev, page: prev.page - 1 }));
    }
  };

  const goNext = () => {
    if (filters.page < totalPages) {
      setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Transaction History</h2>

      {/* Filter Form */}
      <div className="bg-white rounded-2xl shadow-md p-4 mb-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search bar */}
          {user.role === "ADMIN" ? (
            <input
              type="text"
              name="search"
              placeholder="Search by email"
              value={filters.search}
              onChange={handleChange}
              className="px-3 py-2 rounded-lg border border-gray-300 text-sm"
            />
          ) : null}

          {/* Status filter */}
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 text-sm"
          >
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>

          {/* Amount range */}
          <input
            type="number"
            name="minAmount"
            placeholder="Min"
            value={filters.minAmount}
            onChange={handleChange}
            className="w-20 px-2 py-1 rounded-lg border border-gray-300 text-sm"
          />
          <input
            type="number"
            name="maxAmount"
            placeholder="Max"
            value={filters.maxAmount}
            onChange={handleChange}
            className="w-20 px-2 py-1 rounded-lg border border-gray-300 text-sm"
          />

          {/* Type Filter */}
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="send">Send</option>
            <option value="cash-in">Cash In</option>
            <option value="cash-out">Cash Out</option>
          </select>

          {/* Date Filters */}
          <input
            type="date"
            name="fromDate"
            value={filters.fromDate}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="toDate"
            value={filters.toDate}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Reset Filters */}
        <button
          onClick={() =>
            setFilters({
              type: "",
              fromDate: "",
              toDate: "",
              page: 1,
              limit: 5,
              search: "",
              status: "",
              minAmount: "",
              maxAmount: "",
            })
          }
          className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-gray-200 transition cursor-pointer"
        >
          Reset
        </button>
      </div>

      {/* Transactions List */}
      {isLoading ? (
        <Loading text="Fetching History..." />
      ) : transactions.length === 0 ? (
        <p className="text-center py-6 text-gray-400">No transactions found</p>
      ) : (
        <div className="grid gap-4">
          {transactions.map((tx: any) => (
            <div
              key={tx._id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-lg transition-shadow"
            >
              {/* Left side: Type & Date */}
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tx.type === "send"
                      ? "bg-blue-100 text-blue-600"
                      : tx.type === "cash-in"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {tx.type}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(tx.createdAt).toLocaleDateString()}
                </span>
              </div>

              {/* Middle: To / From */}
              <div className="flex-1 mt-2 sm:mt-0 sm:px-6">
                <p className="text-sm text-gray-600">
                  From:
                  <span className="font-medium text-gray-800 ml-1">
                    {user.email === tx.from ? "Me" : tx.from}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  To:
                  <span className="font-medium text-gray-800 ml-1">
                    {user.email === tx.to ? "Me" : tx.to}
                  </span>
                </p>
              </div>

              {/* Right side: Amount & Status */}
              <div className="flex flex-col items-end">
                <span className="text-lg font-semibold text-gray-900">
                  ৳{tx.amount}
                </span>
                <span
                  className={`text-xs mt-1 font-medium ${
                    tx.status === "completed"
                      ? "text-green-600"
                      : tx.status === "pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          disabled={filters.page === 1}
          onClick={goPrev}
          className="px-4 py-2 rounded-lg border text-sm bg-white shadow-sm disabled:opacity-50 hover:bg-gray-50 transition cursor-pointer"
        >
          Prev
        </button>

        <span className="text-sm text-gray-600">
          Page <span className="font-medium">{filters.page}</span> of{" "}
          <span className="font-medium">{totalPages || 1}</span>
        </span>

        <button
          disabled={filters.page === totalPages}
          onClick={goNext}
          className="px-4 py-2 rounded-lg border text-sm bg-white shadow-sm disabled:opacity-50 hover:bg-gray-50 transition cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
