import React, { Component } from 'react';

class Habit extends Component {
  handleIncrease = () => {
    this.props.onIncrease(this.props.habit);
  };
  handleDecrease = () => {
    this.props.onDecrease(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    return (
      <>
        <li className='habit'>
          <span className='habit-name'>{this.props.habit.name}</span>
          <span className='habit-count'>{this.props.habit.count}</span>
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
          <button className='button button-delete' onClick={this.handleDelete}>
            <i class='far fa-trash-alt'></i>
          </button>
        </li>
      </>
    );
  }
}

export default Habit;
