import React from "react";
import Form from "./Form";
import Form2 from "./Form2";

var userIsRegistered = true;

function renderConditionally() {
  if (userIsRegistered === true) {
    return <Form2 />;
  } else {
    return <Form />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
