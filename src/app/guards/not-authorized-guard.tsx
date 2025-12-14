import type { ReactNode } from "react";

interface NotAuthorizedGuardProps {
  children: ReactNode;
}

export const NotAuthorizedGuard = ({ children }: NotAuthorizedGuardProps) => {
  // TODO: Add auth logic
  return <>{children}</>;
};
