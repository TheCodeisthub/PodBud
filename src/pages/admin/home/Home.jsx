import React, { Component } from "react";
import Layout from "../../../layout";

import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <section className="card--container">
          <div className="podcast--card">
            <div className="card--content">
              <h2>BUILDING BRAND LOYALTY</h2>
              <p>Wes McDowell</p>
              <span>23.05.2019</span>
              <span>24:15:05</span>
              <div className="play--btn--red"></div>
            </div>
          </div>

          <div className="podcast--card">
            <div className="card--content">
              <h2>BUILDING BRAND LOYALTY</h2>
              <p>Wes McDowell</p>
              <span>23.05.2019</span>
              <span>24:15:05</span>
              <div className="play--btn--red"></div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
