import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import GoodLuck from "./components/good-luck";
import Redirect from "./components/redirect";
import SayHello from "./components/sayHello";
import NavBar from "./components/navbar";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/good-luck" exact component={GoodLuck} />
        <Route path="/sayHello" exact component={SayHello} />
        <Route path="/redirect" exact component={Redirect} />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
