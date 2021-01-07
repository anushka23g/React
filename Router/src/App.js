import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Link to="/">About </Link>
      <Link to="/con"> Contact</Link>
      <Switch>
        <Route exact path="/" component={About} />
        
        <Route path="/con" component={Contact} />
      </Switch>
    </div>
  );
}
export default App;
