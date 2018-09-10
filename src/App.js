import React, { Component } from "react";
import Counters from "./components/counters";
//import "./App.css";
import Nav from "./components/navbar";

class App extends Component {
  state = {
    counter: [
      {
        id: 1,
        value: 0,
        title: "Title 1"
      },
      {
        id: 2,
        value: 0,
        title: "Title 2"
      },
      {
        id: 3,
        value: 0,
        title: "Title 3"
      },
      {
        id: 4,
        value: 0,
        title: "Title 4"
      }
    ]
  };
  handleIncrement = counterId => {
    const counter = [...this.state.counter];
    const counterIndex = [...this.state.counter].indexOf(counterId);
    counter[counterIndex].value = counter[counterIndex].value + 1;
    console.log("index", counterIndex);
    this.setState({ counter });
  };

  handlerReset = counterId => {
    const counter = [...this.state.counter];
    const counterIndex = counter.indexOf(counterId);
    counter[counterIndex].value = 0;
    // const counter = this.state.counter.filter(c => c.id !== counterId);
    console.log("counter", counter);
    this.setState({ counter });
  };
  handlerResetAll = () => {
    const counters = [...this.state.counter].map(c => {
      const counter = { ...c };
      counter.value = 0;
      return counter;
    });

    console.log("ResetAll", counters);
    this.setState({ counter: counters });
  };
  render() {
    return (
      <React.Fragment>
        <Nav
          totalCounter={this.state.counter.filter(c => c.value > 0).length}
        />
        <main className="main">
          <Counters
            counter={this.state.counter}
            onDelete={this.handlerReset}
            onIncrement={this.handleIncrement}
            onReset={this.handlerResetAll}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
