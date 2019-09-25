import React, { Component } from 'react'

import SideBar from './sidebar'
import TopBar from './topbar'

export default class index extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SideBar />
      </div>
    )
  }
}
