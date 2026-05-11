import RegisterForm from "@/src/components/auth/register-form";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-center">
        Create Account
      </h1>

      <p className="mt-3 text-center text-muted-foreground">
        Join Smart Scholars Hub.
      </p>

      <div className="mt-8">
        <RegisterForm />
      </div>
    </div>
  );
}