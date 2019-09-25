import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from 'images/logo_dark.png';

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src={logo} alt="Logo"/>
        </Link>
      </div>
    )
  }
}
