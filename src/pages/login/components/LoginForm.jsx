import React, { Component } from "react";
import FbIcon from "../../../images/facebook.png";
import GoogleIcon from "../../../images/google.png";
import { Link } from "react-router-dom";

export default class LoginForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login--form__container">
          <form className="login-form">
            <h2 id="login--h2">Login</h2>
            <input
              type="text"
              name="text"
              placeholder="E-mail address"
              required
            />
            <input
              type="password"
              name="pswrd"
              placeholder="Password"
              required
            />
            <Link className="blue--login--btn" to="/admin">
              <button className="btn btn--blue">Login</button>
            </Link>
            <a href="" className="forget-pswrd">
              Forgot password?
            </a>
            <p className="option--p">Or Continue with </p>
            <div className="login--third--party">
              <Link to="/login" className="fb--icon">
                <img src={FbIcon} alt="Icon" />{" "}
                <p className="btn--name">Facebook</p>
              </Link>
              <Link to="/login" className="google--icon">
                <img src={GoogleIcon} alt="Icon" />{" "}
                <p className="btn--name">Google</p>
              </Link>
            </div>
          </form>
          <button className="btn btn--red">Create new account</button>
        </div>
      </React.Fragment>
    );
  }
}
