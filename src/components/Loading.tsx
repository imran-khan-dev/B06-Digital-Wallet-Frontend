import { Loader2 } from "lucide-react";

export default function Loading({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-gray-600">
      <Loader2 className="w-6 h-6 animate-spin text-blue-500 mb-2" />
      <p className="text-sm">{text}</p>
    </div>
  );
}
