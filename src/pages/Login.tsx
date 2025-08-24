import { LoginForm } from "@/components/modules/authentication/LoginForm";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <LoginForm />
      </div>
    </div>
  );
}
