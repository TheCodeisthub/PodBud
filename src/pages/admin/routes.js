import React from "react";

// Pages
import Home from "./home";
import Browse from "./browse";
import Favorites from "./favorites";
// import Subscribed from "./subscribed";
import History from "./history";
import Payments from "./payments";
import AccountSettings from "./accountSettings";

/**
 * Array format
 * { name: string, icon: component, path: string, children: array of same format }
 */
const routes = [
  {
    title: "Home",
    // icon: <MdEqualizer className="icon" />,
    path: "/admin",
    component: Home
  },
  {
    title: "Browse",
    // icon: <MdLibraryBooks className="icon" />,
    path: "./admin/browse",
    component: Browse
  },
  // {
  //   title: "Subscribed",
  //   // icon: <MdLayers className="icon" />,
  //   path: "./admin/subscribed",
  //   component: Subscribed
  // },
  {
    title: "Favorites",
    // icon: <MdColorLens className="icon" />,
    path: "./admin/favorites",
    component: Favorites
  },
  {
    title: "History",
    // icon: <MdSpeakerNotes className="icon" />,
    path: "./admin/history",
    component: History
  },
  {
    title: "Payments",
    // icon: <MdGraphicEq className="icon" />,
    path: "./admin/payments",
    component: Payments
  },
  {
    title: "Account Settings",
    // icon: <MdGraphicEq className="icon" />,
    path: "./admin/settings",
    component: AccountSettings
  }
];

function formatRoutes() {
  const froutes = routes.reduce((total, route) => {
    // check if it's not a main route
    if (route.path) {
      // total.push(route);
    }
  }, []);

  return froutes;
}

export const routerPaths = formatRoutes();
export default routes;
