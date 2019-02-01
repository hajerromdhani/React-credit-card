import React from "react";
import ReactDOM from "react-dom";
import CreditCard from "./CreditCard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <CreditCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
