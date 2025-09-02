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
            <p className="text-xs">Transactions</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <p className="font-semibold text-green-700">
              {walletData?.data.totalIn ?? 0}
            </p>
            <p className="text-xs">Money In</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 text-center">
            <p className="font-semibold text-red-700">
              {walletData?.data.totalOut ?? 0}
            </p>
            <p className="text-xs">Money Out</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          📑 Recent Transactions
        </h2>

        <ul className="space-y-3">
          {txData?.data?.data?.transactions?.length > 0 ? (
            txData.data.data.transactions.slice(0, 5).map((tx: any) => (
              <li
                key={tx._id}
                className="flex justify-between items-center bg-gray-50 rounded-lg p-3"
              >
                <span className="capitalize text-gray-700">
                  {tx.type.replace("_", " ")}
                </span>
                <span
                  className={`font-medium ${
                    tx.type === "CASH_IN" || tx.type === "RECEIVE"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {tx.amount} BDT
                </span>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No recent transactions</p>
          )}
        </ul>

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
