import React, { Component } from "react";
import userAvatar from "../../images/chris.png";

import "./topbar.scss";

export default class Topbar extends Component {
  render() {
    return (
      <div className="db__header">
        <form className="topbar--form">
          <input type="search" name="" id="" placeholder="Search" />
        </form>
        <div>
          <div className="notify"></div>
          <img className="avatar" src={userAvatar} alt="avatar" />
        </div>
      </div>
    );
  }
}
