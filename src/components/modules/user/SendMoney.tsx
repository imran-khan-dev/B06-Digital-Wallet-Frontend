"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { useSendMoneyMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const schema = z.object({
  receiver: z.string().min(1, "Receiver phone or email is required"),
  amount: z.number().min(10, "Minimum send money is 10 BDT"),
});

type FormValues = z.infer<typeof schema>;

export function SendMoneyForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      receiver: "",
      amount: 0,
    },
  });

  const [sendMoney, { isLoading }] = useSendMoneyMutation();

  const onSubmit = async (values: FormValues) => {
    console.log(values);
    try {
      await sendMoney(values).unwrap();
      toast.success("Money sent successfully!");
      form.reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error?.data?.message || "Failed to send money");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-4">Send Money</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="receiver"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Receiver ID (Phone/Email)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com / 01XXXXXXXXX"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Money"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
