import Loading from "@/components/Loading";
import TransactionHistory from "@/components/TransactionHistory";
import { useUserInfoQuery } from "@/redux/features/user/user.api";

export default function AllTransactions() {
  const { data: userData, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) return <Loading />;

  const user = userData?.data;

  return (
    <div>
      <TransactionHistory user={user} />
    </div>
  );
}
