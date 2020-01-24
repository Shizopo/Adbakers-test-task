import React from "react";
import Authentication from "./Authentication";

class AuthenticationContainer extends React.Component {
  state = {
    loginInput: "",
    passwordInput: "",
    isLoaded: false,
    token: "",
    error: "",
  };

  handleInput = e => {
    let { name, value } = e.currentTarget;
    this.setState(
      {
        [name]: value,
      },
      () => console.log("done", this.state)
    );
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { loginInput, passwordInput } = this.state;
    const requestBody = { email: loginInput, password: passwordInput };

    let response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    let result = await response.json();

    if (response.ok) {
      this.setState({ token: result.token });
      this.props.handleLogin();
    } else {
      this.setState({ error: result.error });
    }

    return true;
  };

  render() {
    return (
      <>
        <Authentication
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default AuthenticationContainer;
