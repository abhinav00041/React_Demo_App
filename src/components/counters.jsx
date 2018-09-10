import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-3"
          onClick={this.props.onReset}
        >
          Reset All
        </button>
        {this.props.counter.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h5 style={{ fontWeight: "bold" }}>{counter.title}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
