import React from "react";

class ClassCounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { appName } = this.props;
    const { count } = this.state;

    const increment = () => {
      this.setState({ count: count + 1 });
    };

    const decrement = () => {
      this.setState({ count: count - 1 });
    };

    return (
      <div className="counter-app">
        <h2>{appName}</h2>
        <div className="counter-container">
          <button className="button" onClick={decrement}>
            -
          </button>
          <div className="counter">{count}</div>
          <button className="button" onClick={increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounterApp;
