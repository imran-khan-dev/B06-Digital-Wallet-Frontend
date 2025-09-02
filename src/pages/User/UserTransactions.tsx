import TransactionHistory from "@/components/TransactionHistory";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function UserTransactions() {
  const { data: userData, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) return <p>Loading...</p>;

  const userId = userData?.data?._id;


  if (!userId) return <p>User not found</p>;

  return (
    <div>
      <TransactionHistory userId={userId} />
    </div>
  );
}
