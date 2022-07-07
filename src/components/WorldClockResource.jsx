import React, { useState, useEffect } from "react";
import { datadogRum } from "@datadog/browser-rum";
import { withRouter } from "react-router";

const WorldClockResource = () => {
  if (DD_RUM.getRumGlobalContext() && DD_RUM.getRumGlobalContext().sector) {
    DD_RUM.removeRumGlobalContext("sector");
  }

  const [worldClock, setWorldClock] = useState("");

  useEffect(() => {
    fetch("https://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((response) => setWorldClock(Object.assign({}, response)));
  }, []);

  const updateLocation = (event) => {
    return setWorldClock(event.target.value);
  };

  const clearForm = (event) => {
    event.preventDefault();
    setWorldClock("");
  };

  return (
    <div
      className="worldclock"
      onclick={datadogRum.addTiming("app_onclick")}
      onscroll={datadogRum.addTiming("app_onscroll")}
      onload={datadogRum.addTiming("app_onload")}
      onchange={datadogRum.addTiming("app_onchange")}
      onerror={datadogRum.addTiming("app_onerror")}
      onblur={datadogRum.addTiming("app_onblur")}
      onfocus={datadogRum.addTiming("app_onfocus")}>
      <h3>Your location</h3>

      <div className="detailSection">
        {Object.keys(worldClock).map((detail) => {
          return (
            <div id={detail} className="detail">
              <div className="label">{detail}</div>
              <div className="value">{worldClock[detail]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(WorldClockResource);
