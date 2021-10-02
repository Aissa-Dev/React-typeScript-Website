// Global Styles
import { GlobalStyle } from "./components/GlobalStyle";
//Import Pages
import { AboutMe } from "./pages/AboutMe";
import { ContactMe } from "./pages/ContactMe";
import { OurWork } from "./pages/OurWork";
import { Nav } from "./components/Nav";
//Import Route
import { Switch, Route } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
