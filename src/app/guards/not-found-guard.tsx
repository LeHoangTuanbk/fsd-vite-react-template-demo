import type { ReactNode } from "react";

interface NotFoundGuardProps {
  children: ReactNode;
}

export const NotFoundGuard = ({ children }: NotFoundGuardProps) => {
  return <>{children}</>;
};
