import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
// Global Styles
//Import Pages
import { AboutMe } from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutMe />
    </div>
  );
}

export default App;
