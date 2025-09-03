import { Info } from "lucide-react";

export default function CashIn() {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow rounded-2xl p-6 border text-center">
        <div className="flex flex-col items-center space-y-3">
          <Info className="w-10 h-10 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-800">Cash In</h2>
          <p className="text-gray-600 text-sm">
            To add money to your wallet, please visit a registered{" "}
            <span className="font-medium">Agent</span> physically. Cash-in is
            not available directly from the dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
