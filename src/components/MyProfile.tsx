import Loading from "./Loading";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyProfile() {
  const { data: user, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) return <Loading />;

  return (
    <Card className="max-w-md mx-auto bg-white shadow rounded p-4 border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-gray-800">
          My Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Name:</span>
          <span className="text-gray-900">{user?.name || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Email:</span>
          <span className="text-gray-900">{user?.email || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Phone:</span>
          <span className="text-gray-900">{user?.phone || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Role:</span>
          <span className="capitalize px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            {user?.role || "N/A"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
