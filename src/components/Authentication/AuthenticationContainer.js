import React from "react";
import Authentication from "./Authentication";

class AuthenticationContainer extends React.Component {
  state = {
    someStateKey: "someStateValue",
  };

  render() {
    return (
      <>
        <Authentication />
      </>
    );
  }
}

export default AuthenticationContainer;
