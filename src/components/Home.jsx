import React from "react";
import { withRouter } from "react-router";
import { datadogRum } from "@datadog/browser-rum";

const Home = () => {
  return (
    <div
      id="home"
      onclick={datadogRum.addTiming("app_onclick")}
      onscroll={datadogRum.addTiming("app_onscroll")}
      onload={datadogRum.addTiming("app_onload")}
      onchange={datadogRum.addTiming("app_onchange")}
      onerror={datadogRum.addTiming("app_onerror")}
      onblur={datadogRum.addTiming("app_onblur")}
      onfocus={datadogRum.addTiming("app_onfocus")}>
      <div id="homeContent">
        <div className="page-title">Home Page</div>
        <h3> Welcome! </h3>
      </div>
    </div>
  );
};

export default withRouter(Home);
