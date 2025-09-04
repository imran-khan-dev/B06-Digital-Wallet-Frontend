/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useAllUserInfoQuery,
  useAllAgentInfoQuery,
  useUpdateUserByAdminMutation,
} from "@/redux/features/auth/auth.api";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import Loading from "@/components/Loading";

interface ManageUsersDataProps {
  role: "USER" | "AGENT";
}

export default function ManageUsersData({ role }: ManageUsersDataProps) {
  const { data: users, isLoading: usersLoading } =
    role === "USER"
      ? useAllUserInfoQuery(undefined)
      : { data: null, isLoading: false };
  const { data: agents, isLoading: agentsLoading } =
    role === "AGENT"
      ? useAllAgentInfoQuery(undefined)
      : { data: null, isLoading: false };

  const [updateUserStatus, { isLoading: statusLoading }] =
    useUpdateUserByAdminMutation();

  if (usersLoading || agentsLoading) return <Loading />;

  const userData = role === "USER" ? users?.data ?? [] : agents?.data ?? [];

  const handleStatusChange = async (user: any, newStatus: boolean) => {
    try {
      let payload: any = {};

      if (role === "USER") {
        payload = { isActive: newStatus ? "ACTIVE" : "BLOCKED" };
      } else if (role === "AGENT") {
        payload = {
          isActive: newStatus ? "ACTIVE" : "BLOCKED",
          isApproved: newStatus,
        };
      }

      await updateUserStatus({
        userId: user._id,
        payload,
      }).unwrap();

      toast.success(
        role === "USER"
          ? `User ${payload.isActive} successfully`
          : `Agent ${
              payload.isApproved ? "Approved" : "Suspended"
            } successfully`
      );
    } catch (err) {
      toast.error("Failed to update status");
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {role === "AGENT" ? "All Agents" : "All Users"}
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user: any) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{user.name}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3 capitalize">{user.role}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.isActive === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {role === "AGENT"
                      ? user.isApproved
                        ? "Approved"
                        : "Suspended"
                      : user.isActive}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <Switch
                    checked={
                      role === "AGENT"
                        ? user.isApproved
                        : user.isActive === "ACTIVE"
                    }
                    onCheckedChange={(checked) =>
                      handleStatusChange(user, checked)
                    }
                    disabled={statusLoading}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
