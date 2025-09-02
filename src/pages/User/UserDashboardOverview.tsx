import { DashboardOverviewData } from "@/components/DashboardOverviewData";
import { CashOutForm } from "@/components/modules/user/Cashout";
import { SendMoneyForm } from "@/components/modules/user/SendMoney";

export default function UserOverview() {
  return (
    <div className="space-y-6">
      {/* Overview Section */}
      <DashboardOverviewData />

      {/* Actions Section */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cash Out */}
        <div className="bg-white shadow rounded-2xl p-6">
          <CashOutForm />
        </div>

        {/* Send Money */}
        <div className="bg-white shadow rounded-2xl p-6">
          <SendMoneyForm />
        </div>
      </div>
    </div>
  );
}
