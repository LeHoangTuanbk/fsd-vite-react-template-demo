import { Outlet, type RouteObject } from "react-router-dom";

import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/auth/login/index.ts";
import { paths } from "@/shared/config";

import { ErrorBoundary } from "./ui/error-boundary.tsx";
import { AuthorizedGuard, NotAuthorizedGuard, NotFoundGuard } from "./guards";

export const routes: RouteObject[] = [
  {
    ErrorBoundary,
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        element: (
          <AuthorizedGuard>
            <Outlet />
          </AuthorizedGuard>
        ),
        children: [
          {
            element: <HomePage />,
            path: paths.home,
          },
        ],
      },
      {
        element: (
          <NotAuthorizedGuard>
            <Outlet />
          </NotAuthorizedGuard>
        ),
        children: [
          {
            element: <LoginPage />,
            path: paths.login,
          },
        ],
      },
      {
        element: (
          <NotFoundGuard>
            <Outlet />
          </NotFoundGuard>
        ),
        children: [
          {
            element: <div>404 Not Found</div>,
            path: "*",
          },
        ],
      },
    ],
  },
];
