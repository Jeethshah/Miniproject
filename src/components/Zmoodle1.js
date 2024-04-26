import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 }, () => {
      console.log(`Button clicked ${this.state.count} times`);
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <p>Button clicked {count} times</p>
      </div>
    );
  }
}

export default ClickCounter;
