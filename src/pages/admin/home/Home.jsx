import React, { Component } from "react";
import Layout from "../../../layout";

import "./home.scss";
import ListenPodcast from "./components/ListenPodcast";
import PodcastAuthors from "./components/PodcastAuthors";

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <section className="card--container">
          <div className="podcast--card-1">
            <div className="card--content">
              <h2>BUILDING BRAND LOYALTY</h2>
              <p>Wes McDowell</p>
              <span>23.05.2019</span>
              <span>24:15:05</span>
              <div className="play--btn--red"></div>
            </div>
          </div>

          <div className="podcast--card-2">
            <div className="card--content">
              <h2>BUILDING BRAND LOYALTY</h2>
              <p>Wes McDowell</p>
              <span>23.05.2019</span>
              <span>24:15:05</span>
              <div className="play--btn--red"></div>
            </div>
          </div>

          <div className="podcast--card-3">
            <div className="card--content">
              <h2>BUILDING BRAND LOYALTY</h2>
              <p>Wes McDowell</p>
              <span>23.05.2019</span>
              <span>24:15:05</span>
              <div className="play--btn--red"></div>
            </div>
          </div>
        </section>

        <ListenPodcast />
        <PodcastAuthors />
      </Layout>
    );
  }
}
