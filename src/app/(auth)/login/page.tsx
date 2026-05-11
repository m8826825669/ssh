import LoginForm from "@/src/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-center">
        Student Login
      </h1>

      <p className="mt-3 text-center text-muted-foreground">
        Access your learning dashboard.
      </p>

      <div className="mt-8">
        <LoginForm />
      </div>
    </div>
  );
}