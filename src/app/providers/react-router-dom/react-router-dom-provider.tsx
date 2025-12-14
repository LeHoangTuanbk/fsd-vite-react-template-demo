import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "../../routes.tsx";

const router = createBrowserRouter(routes);

export const ReactRouterDomProvider = () => {
  return <RouterProvider router={router} />;
};
