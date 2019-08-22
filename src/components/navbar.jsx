import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        Hello World
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </div>
      <a href="https://github.com/ryanmichaelsmith/counter-app">
        https://github.com/ryanmichaelsmith/counter-app
      </a>
    </nav>
  );
};

export default NavBar;
