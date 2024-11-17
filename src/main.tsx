import { render } from "preact";
import { App } from "./app.tsx";
import { phaserInit } from "./phaserInit.ts";

const showReact = false;

if (showReact) {
  render(<App />, document.getElementById("app")!);
} else {
  phaserInit();
}
