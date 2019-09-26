import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import Podcaster from "./components/PodcasterImage";
import logo from '../../images/logo_dark.png';

import "./login.scss";

export default class login extends Component {
  render() {
    return (
      <div className="login--page--bg">
        <img src={logo} className="login--logo" alt="Logo"/>
        <section className="login--container">
          <div className="form--holder">
            <LoginForm />
            <Podcaster />
          </div>
        </section>
      </div>
    );
  }
}
