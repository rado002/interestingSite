import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { generateHandles } from "../generateHandles";

const Nav = () => {
  const sectorProp = () => {
    return `/${generateHandles()}/contact/random`;
  };
  return (
    <div id="nav">
      <span className="navButton" id="homeNav">
        <NavLink
          data-dd-action-name="home-nav-link"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          to="/">
          Home
        </NavLink>
      </span>

      <span className="navButton" id="startNav">
        <NavLink
          to="/user-action-demo"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          data-dd-action-name="user-action-nav-link">
          User Actions
        </NavLink>
      </span>

      <span className="navButton" id="startNav">
        <NavLink
          to="/error-demo"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          data-dd-action-name="error-nav-link">
          Errors
        </NavLink>
      </span>

      <span className="navButton" id="middleNav">
        <NavLink
          to="/resource-demo"
          data-dd-action-name="resource-nav-link"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}>
          Resource Collection
        </NavLink>
      </span>

      <span className="navButton" id="endNav">
        <NavLink
          to={sectorProp}
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          data-dd-action-name="contacts-nav-link">
          Contacts
        </NavLink>
      </span>
    </div>
  );
};

export default withRouter(Nav);
