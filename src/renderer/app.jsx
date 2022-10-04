import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { v4 as uuidv4 } from "uuid";
import Page from "./components/page";

import './styles/app.sass'


function App() {
  const [pages, setPages] = useState([<Page initialPage key={uuidv4()}/>])
  return <>{pages}</>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);