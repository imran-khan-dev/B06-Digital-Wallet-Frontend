import { RegisterForm } from "@/components/modules/authentication/RegisterForm";

export default function Registration() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm my-10">
        <RegisterForm />
      </div>
    </div>
  );
}
