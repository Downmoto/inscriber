import React from "react";
import { createRoot } from "react-dom/client";

import FileExplorer from "./components/file-explorer";
import Header from "./components/header";
import Inspector from "./components/inspector";
import Page from "./components/page";

import "./styles/app.sass";

function App() {
  return (
    <>
      <Header />
      <div className="body">
        <FileExplorer />
        <div className="main">
          <Page />
        </div>
        <Inspector />
      </div>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
