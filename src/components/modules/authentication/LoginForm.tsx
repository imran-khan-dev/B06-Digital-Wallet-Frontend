import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Password from "@/components/ui/Password";

import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm();
  const [login] = useLoginMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();
      console.log(res);
      toast.success("Login successfully");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);

      if (err.status === 401) {
        toast.error("Your account is not verified");
      }
    }
  };

  
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login your account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john.doe@company.com"
                        type="email"
                        {...field}
                      />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full cursor-pointer">
                Login
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Does not have an account?{" "}
            <a href="/register" className="underline underline-offset-4">
              Register
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
