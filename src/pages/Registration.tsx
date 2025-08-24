import { RegisterForm } from "@/components/modules/authentication/RegisterForm";

export default function Registration() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <RegisterForm />
      </div>
    </div>
  );
}
