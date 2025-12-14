import type { User } from "../model/types.ts";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <span>{user.name}</span>
      <span>{user.email}</span>
    </div>
  );
}
