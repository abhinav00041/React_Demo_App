import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  constructor(props) {
    super(props);
    // console.log("constructor", this);
    // this.handlerClick = this.handlerClick.bind(this);
    // this.handlerReset = this.handlerReset.bind(this);
  }

  style = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    //console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formateCount()}
        </span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-1"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            this.props.onDelete(this.props.counter);
          }}
        >
          RESET
        </button>
        {/* {this.state.tags.length === 0 && "Please enter some tags first!!"}
        {this.randerTags()} */}
      </div>
    );
  }
  randerTags() {
    if (this.props.counter.tags.length === 0) return <p>Their is no tag</p>;
    return (
      <ul>
        {this.props.counter.tags.map(tag => (
          <li>{tag}</li>
        ))}
      </ul>
    );
  }
  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
