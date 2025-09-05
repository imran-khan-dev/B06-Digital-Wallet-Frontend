import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useWithdrawMoneyMutation } from "@/redux/features/auth/auth.api";
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


const schema = z.object({
  agentID: z.string().min(1, "Agent phone or email is required"),
  amount: z.number().min(10, "Minimum cashout is 10 BDT"),
});

type FormValues = z.infer<typeof schema>;

export function CashOutForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      agentID: "",
      amount: 0,
    },
  });

  const [cashOut, { isLoading }] = useWithdrawMoneyMutation();

  const onSubmit = async (values: FormValues) => {
    try {
      await cashOut(values).unwrap();
      toast.success("Cash out successful!");
      form.reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || "Cash out failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-4">Cash Out</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Agent ID */}
          <FormField
            control={form.control}
            name="agentID"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agent ID (Phone/Email)</FormLabel>
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

          {/* Amount */}
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

          {/* Submit */}
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Processing..." : "Cash Out"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
