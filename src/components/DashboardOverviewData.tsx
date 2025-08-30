import { useGetMyWalletQuery } from "@/redux/features/auth/auth.api";

export function DashboardOverviewData() {
  const { data, isLoading } = useGetMyWalletQuery(undefined);
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {" "}
      <div className="bg-white shadow rounded p-4">
        {" "}
        <h2 className="text-lg font-bold">Balance</h2>{" "}
        <p className="text-2xl text-green-600">{data?.data.balance} BDT</p>{" "}
      </div>{" "}
      <div className="bg-white shadow rounded p-4">
        {" "}
        <h2 className="text-lg font-bold">Transactions</h2>{" "}
        <p>Total: {data?.data.totalTransactions}</p>{" "}
        <p>Money In: {data?.data.totalIn}</p>{" "}
        <p>Money Out: {data?.data.totalOut}</p>{" "}
      </div>{" "}
    </div>
  );
}
