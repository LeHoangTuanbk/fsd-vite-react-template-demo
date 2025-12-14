import { LoginForm } from "@/features/auth";

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
}
