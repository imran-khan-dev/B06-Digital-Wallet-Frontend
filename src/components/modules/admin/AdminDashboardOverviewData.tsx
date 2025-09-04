import Loading from "@/components/Loading";
import {
  useAllUserInfoQuery,
  useAllAgentInfoQuery,
  useGetAllWalletQuery,
  useTransactionSumQuery,
  useTransactionHistoryQuery,
} from "@/redux/features/auth/auth.api";
import { Users, UserCheck, Wallet, Receipt, BarChart3 } from "lucide-react";

export function AdminDashboardOverviewData() {
  const { data: users, isLoading: usersLoading } =
    useAllUserInfoQuery(undefined);
  const { data: agents, isLoading: agentsLoading } =
    useAllAgentInfoQuery(undefined);
  const { data: wallets, isLoading: walletsLoading } =
    useGetAllWalletQuery(undefined);
  const { data: transaction, isLoading: txLoading } =
    useTransactionSumQuery(undefined);
  const { data: transactionHistory, isLoading: txHistoryLoading } =
    useTransactionHistoryQuery(undefined);

  if (
    usersLoading ||
    agentsLoading ||
    walletsLoading ||
    txLoading ||
    txHistoryLoading
  ) {
    return <Loading />;
  }

  const transactionsHistoryArray = transactionHistory?.data ?? [];
  const transactionsCount = transactionsHistoryArray.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (tx: any) => tx.status === "completed"
  ).length;

  const cards = [
    {
      title: "Total Users",
      value: users?.data?.length ?? 0,
      color: "text-blue-600",
      bg: "bg-blue-100",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Total Agents",
      value: agents?.data?.length ?? 0,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: <UserCheck className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Total Wallets",
      value: wallets?.data?.length ?? 0,
      color: "text-purple-600",
      bg: "bg-purple-100",
      icon: <Wallet className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Transactions Count",
      value: transactionsCount ?? 0,
      color: "text-red-600",
      bg: "bg-red-100",
      icon: <Receipt className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Transaction Volume",
      value: `${transaction?.data?.totalVolume ?? 0} BDT`,
      color: "text-orange-600",
      bg: "bg-orange-100",
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition-shadow"
        >
          <div className={`p-3 rounded-full ${card.bg}`}>{card.icon}</div>
          <h2 className="text-sm font-medium text-gray-600">{card.title}</h2>
          <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
}
