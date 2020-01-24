import React from "react";
import Authentication from "./Authentication";

class AuthenticationContainer extends React.Component {
  state = {
    loginInput: "",
    passwordInput: "",
    token: "",
    error: "",
  };

  validatePassword = value => {
    if (value.length < 8) {
      this.setState({
        error: "Password is less than 8 chars",
      });
      return;
    }
    return true;
  };

  handleInput = e => {
    let { name, value } = e.currentTarget;
    this.setState({
      error: "",
      [name]: value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { loginInput, passwordInput } = this.state;

    if (!this.validatePassword(passwordInput)) {
      return;
    }

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
          error={this.state.error}
        />
      </>
    );
  }
}

export default AuthenticationContainer;
