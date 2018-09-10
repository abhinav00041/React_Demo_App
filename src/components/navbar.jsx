import React, { Component } from "react";
import Counters from "./counter";

class navBar extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <nav
          className="navbar navbar-dark bg-dark"
          style={{ fontWeight: "bold" }}
        >
          <a className="navbar-brand" href="#">
            Counter App{" "}
            <span className="badge badge-pill badge-primary">
              {this.props.totalCounter}
            </span>
          </a>
        </nav>
        {/* <Counters /> */}
      </div>
    );
  }
}

export default navBar;
