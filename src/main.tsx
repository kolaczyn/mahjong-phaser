import { render } from "preact";
import { App } from "./app.tsx";
import { phaserInit } from "./phaserInit.ts";
import "./index.css";

const showReact = false;

if (showReact) {
  render(<App />, document.getElementById("app")!);
} else {
  phaserInit();
}
