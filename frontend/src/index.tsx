import { createRoot } from "react-dom/client";
import "@/app/ui/main.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw Error('cannot find element with id "root"');

const root = createRoot(rootElement);
root.render(
  <div>
    <h1>test</h1>
  </div>
);
