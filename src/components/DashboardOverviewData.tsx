import {
  useGetMyWalletQuery,
  useGetMyRecentTransactionsQuery,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";

export function DashboardOverviewData() {
  const { data: user, isLoading: userLoading } = useUserInfoQuery(undefined);
  const { data: walletData, isLoading: walletLoading } =
    useGetMyWalletQuery(undefined);

  const userId = user?.data?._id;
  const { data: txData, isLoading: txLoading } =
    useGetMyRecentTransactionsQuery(userId, {
      skip: !userId,
    });

  if (walletLoading || txLoading || userLoading) return <p>Loading...</p>;

  console.log("transactions data:", txData);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Wallet Overview */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-bold mb-2">Balance</h2>
        <p className="text-2xl text-green-600">
          {walletData?.data.balance} BDT
        </p>
        <div className="mt-2 text-sm text-gray-600">
          <p>Total Transactions: {walletData?.data.totalTransactions}</p>
          <p>Money In: {walletData?.data.totalIn}</p>
          <p>Money Out: {walletData?.data.totalOut}</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-bold mb-2">Recent Transactions</h2>
        <ul className="space-y-2">
          {txData?.data?.data?.transactions?.length > 0 ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            txData.data.data.transactions.map((tx: any) => (
              <li
                key={tx._id}
                className="flex justify-between items-center border-b pb-1 text-sm"
              >
                <span className="capitalize">
                  {tx.type.replace("_", " ")} {/* CASH_IN -> Cash in */}
                </span>
                <span
                  className={
                    tx.type === "CASH_IN" || tx.type === "RECEIVE"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {tx.amount} BDT
                </span>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No recent transactions</p>
          )}
        </ul>

        <div className="mt-3 text-right">
          <a
            href="/transactions"
            className="text-blue-600 text-sm hover:underline"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
}
