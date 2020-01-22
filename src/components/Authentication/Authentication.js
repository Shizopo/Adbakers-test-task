import React from "react";
import logo from "./logo.png";
import "./Authentication.sass";

const Authentication = () => {
  return (
    <>
      <form
        className="AuthForm"
        onSubmit={() => console.log("submit button clicked (form)")}
        noValidate
      >
        <img src={logo} className="AuthForm_Logo" alt="LOGO" />
        <label className="InputLabel" title="Enter your login">
          <span className="InputLabel_Text">Login</span>
          <input
            type="text"
            name="LoginInput"
            // minLength="16"
            // maxLength="16"
            placeholder="Login"
            // value={this.state.value}
            // className={valid.cardNum === true ? "" : "invalidInput"}
            className="InputLabel_Input"
            onChange={e => console.log(e.currentTarget.value)}
          />
        </label>
        <label className="InputLabel" title="Enter your password">
          <span className="InputLabel_Text">Password</span>
          <input
            type="password"
            name="PasswordInput"
            // minLength="16"
            // maxLength="16"
            placeholder="Password"
            // value={this.state.value}
            // className={valid.cardNum === true ? "" : "invalidInput"}
            className="InputLabel_Input"
            onChange={e => console.log(e.currentTarget.value)}
          />
        </label>
        <button type="submit" className="AuthForm_Button">
          Submit
        </button>
      </form>
    </>
  );
};

export default Authentication;
