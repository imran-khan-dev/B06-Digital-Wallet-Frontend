/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetMyWalletQuery,
  useGetMyRecentTransactionsQuery,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { Link } from "react-router";
import Loading from "./Loading";

export function DashboardOverviewData() {
  const { data: user, isLoading: userLoading } = useUserInfoQuery(undefined);
  const { data: walletData, isLoading: walletLoading } =
    useGetMyWalletQuery(undefined);

  console.log(walletData);

  const userId = user?.data?._id;
  const userRole = user?.data?.role;
  const { data: txData, isLoading: txLoading } =
    useGetMyRecentTransactionsQuery(userId, {
      skip: !userId,
    });

  if (walletLoading || txLoading || userLoading)
    return <Loading text="Loading Overview..." />;

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Wallet Overview */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          💰 Wallet Balance
        </h2>
        <p className="text-3xl font-bold text-green-600">
          {walletData?.data.balance ?? 0} BDT
        </p>

        <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="font-semibold text-gray-800">
              {walletData?.data.totalTransactions ?? 0}
            </p>
            <p className="text-xs break-words truncate">Transactions</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <p className="font-semibold text-green-700">
              {walletData?.data.totalIn ?? 0}
            </p>
            <p className="text-xs">
              {userRole === "AGENT"
                ? "Total Cash Out for User"
                : "Cash In Total"}
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 text-center">
            <p className="font-semibold text-red-700">
              {walletData?.data.totalOut ?? 0}
            </p>
            <p className="text-xs">
              {userRole === "AGENT"
                ? "Total Cash In to User"
                : "Cash Out Total"}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          📑 Recent Transactions
        </h2>

        {txData?.data?.data?.transactions?.length > 0 ? (
          <div className="grid gap-4">
            {txData.data.data.transactions.slice(0, 5).map((tx: any) => (
              <div
                key={tx._id}
                className="bg-gray-50 rounded-xl shadow-sm p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-md transition-shadow"
              >
                {/* Left: Type & Date */}
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tx.type === "SEND_MONEY"
                        ? "bg-blue-100 text-blue-600"
                        : tx.type === "CASH_IN" || tx.type === "RECEIVE"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {tx.type.replace("_", " ")}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(tx.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Middle: From & To */}
                <div className="flex-1 mt-2 sm:mt-0 sm:px-6">
                  <p className="text-sm text-gray-600">
                    From:
                    <span className="font-medium text-gray-800 ml-1">
                      {user?.data?.email === tx.from ? "Me" : tx.from}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    To:
                    <span className="font-medium text-gray-800 ml-1">
                      {user?.data?.email === tx.to ? "Me" : tx.to}
                    </span>
                  </p>
                </div>

                {/* Right: Amount & Status */}
                <div className="flex flex-col items-end">
                  <span className="text-lg font-semibold text-gray-900">
                    ৳{tx.amount}
                  </span>
                  <span
                    className={`text-xs mt-1 font-medium ${
                      tx.status === "COMPLETED"
                        ? "text-green-600"
                        : tx.status === "PENDING"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {tx.status.toLowerCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No recent transactions</p>
        )}

        <div className="mt-4 text-right">
          <Link
            to={`/${userRole}/transactions-history`}
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            View All →
          </Link>
        </div>
      </div>
    </div>
  );
}
