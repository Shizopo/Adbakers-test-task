import React from "react";
import logo from "./logo.png";
import "./Authentication.sass";

const Authentication = ({ handleInput, handleSubmit }) => {
  return (
    <>
      <form
        className="AuthForm"
        onSubmit={e => handleSubmit(e)}
        method="post"
        noValidate
      >
        <img src={logo} className="AuthForm_Logo" alt="LOGO" />
        <label className="InputLabel" title="Enter your login">
          <span className="InputLabel_Text">Login</span>
          <input
            type="text"
            name="loginInput"
            placeholder="Login"
            className="InputLabel_Input"
            onChange={e => handleInput(e)}
          />
        </label>
        <label className="InputLabel" title="Enter your password">
          <span className="InputLabel_Text">Password</span>
          <input
            type="password"
            name="passwordInput"
            placeholder="Password"
            className="InputLabel_Input"
            onChange={e => handleInput(e)}
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
