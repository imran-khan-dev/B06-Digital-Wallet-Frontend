import { EditProfileForm } from "@/components/EditProfile";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function UserEditProfile() {
  const { data: userData, isLoading } = useUserInfoQuery(undefined);

  const user = userData?.data;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <EditProfileForm user={user} />
    </div>
  );
}
