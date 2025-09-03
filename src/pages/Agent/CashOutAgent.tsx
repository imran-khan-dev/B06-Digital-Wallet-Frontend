import { Info } from "lucide-react";

export default function CashOut() {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow rounded-2xl p-6 border text-center">
        <div className="flex flex-col items-center space-y-3">
          <Info className="w-10 h-10 text-red-500" />
          <h2 className="text-lg font-semibold text-gray-800">Cash Out</h2>
          <p className="text-gray-600 text-sm">
            As an <span className="font-medium">Agent</span>, you cannot
            directly cash out from users. Instead, users will visit you to
            perform a cash-out. They will send money to your wallet, and you
            will provide them with the equivalent cash.
          </p>
        </div>
      </div>
    </div>
  );
}
