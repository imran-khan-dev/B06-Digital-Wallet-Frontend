import { EditProfileForm } from "@/components/EditProfile";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function UserEditProfile() {
  const { data: user, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <EditProfileForm user={user} />
    </div>
  );
}
