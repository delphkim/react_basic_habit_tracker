import React, { Component } from 'react';

class Habit extends Component {
  state = {
    id: 1,
    name: 'reading',
    count: 1,
  };
  handleIncrease = () => {
    this.setState((state) => ({ ...this.state, count: this.state.count + 1 }));
  };
  handleDecrease = () => {
    const count = this.state.count - 1;
    this.setState((state) => ({
      ...this.state,
      count: count < 0 ? 0 : count,
    }));
  };
  render() {
    return (
      <li className='habit' id={this.state.id}>
        <span className='habit-name'>{this.state.name}</span>
        <span className='habit-count'>{this.state.count}</span>
        <button
          className='button button-increase'
          onClick={this.handleIncrease}
        >
          <i class='far fa-plus-square'></i>
        </button>
        <button
          className='button button-decrease'
          onClick={this.handleDecrease}
        >
          <i class='far fa-minus-square'></i>
        </button>
        <button className='button button-delete'>
          <i class='far fa-trash-alt'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
