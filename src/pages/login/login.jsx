import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import Podcaster from "./components/PodcasterImage";

import "./login.scss";

export default class login extends Component {
  render() {
    return (
      <div className="login--page--bg">
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
