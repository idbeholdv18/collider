import { createRoot } from "react-dom/client";
import "@/app/ui/main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/router/router";

const rootElement = document.getElementById("root");

if (!rootElement) throw Error('cannot find element with id "root"');

const root = createRoot(rootElement);
root.render(<RouterProvider router={router} />);
