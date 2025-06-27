import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-2xl px-4 py-12 flex flex-col justify-center">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
