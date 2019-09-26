import React, { Component } from "react";
import FbIcon from "../../../images/facebook.png";
import GoogleIcon from "../../../images/google.png";

export default class LoginForm extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="login-form">
          <h2>Login</h2>
          <input type="text" name="text" placeholder="E-mail address" />
          <input type="password" name="pswrd" placeholder="Password" />
          <button className="btn btn--blue">Login</button>
          <a href="">Forgot password?</a>
          <div className="login--third--party">
            <button>
              <a href="">
                <img src={FbIcon} alt="" /> Facebook
              </a>
            </button>
            <button>
              <a href="">
                <img src={GoogleIcon} alt="" />  Google
              </a>
            </button>
          </div>
          <button className="btn btn--red">Create new account</button>
        </form>
      </React.Fragment>
    );
  }
}
