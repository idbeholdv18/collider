import { AppLayout } from "@/page/app/_layout/ui/App.layout";
import { AppPage } from "@/page/app/page/App.page";
import { RootLayout } from "@/page/root/_layout/ui/Root.layout";
import { RootPage } from "@/page/root/page/ui/Root.page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: "/app",
        element: <AppLayout />,
        children: [{ index: true, element: <AppPage /> }],
      },
    ],
  },
]);
