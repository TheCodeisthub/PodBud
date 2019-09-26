import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_dark.png";
import SidebarRoutes from "./partials/SidebarRoute";
import routes from "../../pages/admin/routes";

// styles
import "./sidebar.scss";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="db__sidebar">
        <Link className="logo" to="/admin">
          <img src={logo} width="100px" alt="logo" />
        </Link>

        {/* get all admin routes and pass to SidebarRoutes */}
        {routes.map((route, index) => (
          <SidebarRoutes key={index} item={route} />
        ))}
      </div>
    );
  }
}
