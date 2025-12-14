import type { ReactNode } from "react";

interface AuthorizedGuardProps {
  children: ReactNode;
}

export const AuthorizedGuard = ({ children }: AuthorizedGuardProps) => {
  // TODO: Add auth logic
  return <>{children}</>;
};
