import type { User } from "@/entities/user";

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

export function Header({ user, onLogout }: HeaderProps) {
  return (
    <header className="header">
      <h1>FSD App</h1>
      {user ? (
        <div>
          <span>{user.name}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <span>Guest</span>
      )}
    </header>
  );
}
