import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useUpdateProfileMutation } from "@/redux/features/user/user.api";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLogoutUser } from "@/hooks/useLogoutUser";

const schema = z.object({
  name: z
    .string()
    .transform((val) => (val === "" ? undefined : val))
    .optional(),
  phone: z
    .string()
    .transform((val) => (val === "" ? undefined : val))
    .optional(),
  password: z
    .string()
    .transform((val) => (val === "" ? undefined : val))
    .optional(),
});

type FormValues = z.infer<typeof schema>;

interface ProfileFormProps {
  user: {
    name: string;
    email: string;
    phone: string;
    role: string;
  };
}

export function EditProfileForm({ user }: ProfileFormProps) {
  const logoutUser = useLogoutUser();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.name ?? undefined,
      phone: user?.phone ?? undefined,
      password: undefined,
    },
  });

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const onSubmit = async (values: FormValues) => {
    try {
      await updateProfile(values).unwrap();
      toast.success("Profile updated successfully!");
      form.reset({ ...values, password: "" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || "Update failed");
      console.error(error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Info Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4">Profile Details</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-medium">Name:</span> {user?.name}
              </p>
              <p>
                <span className="font-medium">Email:</span> {user?.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {user?.phone || "Not set"}
              </p>
              <p>
                <span className="font-medium">Role:</span>{" "}
                {user?.role?.toUpperCase()}
              </p>
            </div>
          </div>

          <Button
            onClick={logoutUser}
            variant="destructive"
            className="w-full mt-6 cursor-pointer"
          >
            Logout
          </Button>
        </div>

        {/* Edit Profile Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border">
          <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="01XXXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Leave blank to keep old password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer"
              >
                {isLoading ? "Updating..." : "Update Profile"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
