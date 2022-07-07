import React from "react";
import { withRouter } from "react-router";
import { generateContact } from "../generateHandles";
import { datadogRum } from "@datadog/browser-rum";

const Page = (props) => {
  datadogRum.addRumGlobalContext("sector", props.sector);
  return (
    <div id="sector-contact-page">
      <div className="page-title">
        {props.title}: <code>{props.sector}</code>
      </div>
      <div id="contact-group-section">
        {generateContact().map((card) => {
          return (
            <div
              className="card-contact-section"
              id={card.username}
              key={card.username}
            >
              <div className="card-contact-wrapper">
                <div className="card-field card-name">{card.name}</div>
                <div className="card-field card-email">{card.email}</div>
                <div className="card-field card-phone">{card.phone}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Page);
