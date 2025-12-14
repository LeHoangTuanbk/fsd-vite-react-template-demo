import { LoginForm } from "@/features/auth";

export function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    console.log("Login:", email, password);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
