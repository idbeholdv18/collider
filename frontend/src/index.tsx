import { createRoot } from "react-dom/client";
import "@/app/ui/main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/router/router";
import { Provider } from "react-redux";
import { store } from "./shared/store/store";

const rootElement = document.getElementById("root");

if (!rootElement) throw Error('cannot find element with id "root"');

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
