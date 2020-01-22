import React from "react";
import "./App.sass";

import Authentication from "../Authentication";
import Users from "../Users";

function App() {
  return (
    <div className="App">
      <Authentication />
      <Users />
    </div>
  );
}

export default App;
