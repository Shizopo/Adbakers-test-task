import React from "react";
import "./App.sass";

import Authentication from "../Authentication";
import Users from "../Users";

class App extends React.Component {
  state = {
    isLogged: false,
  };

  handleLogin = () => {
    this.setState({ isLogged: true });
  };

  render() {
    let isLogged = this.state.isLogged;

    return (
      <div className="App">
        {!isLogged ? (
          <Authentication handleLogin={this.handleLogin} />
        ) : (
          <Users />
        )}
      </div>
    );
  }
}

export default App;
