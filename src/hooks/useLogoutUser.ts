import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { authApi } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export function useLogoutUser() {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const logoutUser = async () => {
    try {
      await logout(undefined).unwrap();
      dispatch(authApi.util.resetApiState());
      toast.success("Logout successfully");
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  return logoutUser;
}
