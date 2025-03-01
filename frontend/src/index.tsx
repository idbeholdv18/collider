import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

if (!rootElement) throw Error('cannot find element with id "root"');

const root = createRoot(rootElement);
root.render(<div>test</div>);
