import "./style.css";
import "./index.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1 class="text-3xl font-bold">Hello</h1>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
