import {
  useAllUserInfoQuery,
  useAllAgentInfoQuery,
  useGetAllWalletQuery,
  useTransactionSumQuery,
} from "@/redux/features/auth/auth.api";

export function AdminDashboardOverviewData() {
  const { data: users, isLoading: usersLoading } =
    useAllUserInfoQuery(undefined);
  const { data: agents, isLoading: agentsLoading } =
    useAllAgentInfoQuery(undefined);
  const { data: wallets, isLoading: walletsLoading } =
    useGetAllWalletQuery(undefined);
  const { data: transaction, isLoading: txLoading } =
    useTransactionSumQuery(undefined);

  if (usersLoading || agentsLoading || walletsLoading || txLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Users */}
      <div className="bg-white shadow rounded p-6 text-center">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <p className="text-3xl font-bold text-blue-600">
          {users?.data?.length ?? 0}
        </p>
      </div>

      {/* Agents */}
      <div className="bg-white shadow rounded p-6 text-center">
        <h2 className="text-lg font-semibold">Total Agents</h2>
        <p className="text-3xl font-bold text-green-600">
          {agents?.data?.length ?? 0}
        </p>
      </div>

      {/* Wallets */}
      <div className="bg-white shadow rounded p-6 text-center">
        <h2 className="text-lg font-semibold">Total Wallets</h2>
        <p className="text-3xl font-bold text-purple-600">
          {wallets?.data?.length ?? 0}
        </p>
      </div>

      {/* Transaction Volume */}
      <div className="bg-white shadow rounded p-6 text-center">
        <h2 className="text-lg font-semibold">Transaction Volume</h2>
        <p className="text-3xl font-bold text-red-600">
          {transaction?.data?.totalVolume ?? 0} BDT
        </p>
      </div>
    </div>
  );
}
