import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { FeedPage } from "./FeedPage";
import { ErrorPage } from "./ErrorPage";
import { RootPage } from "./RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <FeedPage /> },
          {
            path: "feed",
            element: <FeedPage />,
          },
        ],
      },
    ],
  },
]);

export function PageRouter() {
  return <RouterProvider router={router} />;
}
