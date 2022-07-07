import React from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Page from "./components/Page";
import UserActionDemo from "./components/UserActionDemo";
import ResourceDemo from "./components/ResourceDemo";
import NewContact from "./components/NewContact";
import ErrorDemo from "./components/ErrorDemo";
import "./styles.css";
import { generateHandles, sampleUser } from "./generateHandles";
import { DD_RUM, DD_LOGS } from "./DD_RUM";
import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";

DD_RUM();
DD_LOGS() &&
  datadogLogs.logger.setHandler("console") &&
  datadogLogs.logger.setLevel("debug");

DD_RUM &&
  datadogRum.setUser({
    ...sampleUser()
  });

generateHandles();

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/user-action-demo"
          render={() => {
            return <UserActionDemo title="UserActionDemo" />;
          }}
        />

        <Route
          exact
          path="/resource-demo"
          render={() => {
            return <ResourceDemo title="Resource Collection" />;
          }}
        />

        <Route
          exact
          path="/contacts/new"
          render={() => {
            return <NewContact title="Add Contact" />;
          }}
        />

        <Route
          exact
          path="/error-demo"
          render={() => {
            return <ErrorDemo title="Error Events" />;
          }}
        />

        <Route
          exact
          path="/error-demo-v5"
          render={() => {
            return <ErrorDemo title="Error Events" />;
          }}
        />

        <Route
          exact
          path="/error-demo-v4"
          render={() => {
            return <ErrorDemo title="Error Events" />;
          }}
        />

        <Route
          path="/:sector/contact/random"
          render={(props) => {
            return <Page sector={props.match.params.sector} title="Sector" />;
          }}
        />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
