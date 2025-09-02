import { EditProfileForm } from "@/components/EditProfile";
import Loading from "@/components/Loading";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function UserEditProfile() {
  const { data: userData, isLoading } = useUserInfoQuery(undefined);

  const user = userData?.data;

  if (isLoading) return <Loading />;

  return (
    <div>
      <EditProfileForm user={user} />
    </div>
  );
}
