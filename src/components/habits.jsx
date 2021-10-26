import React, { Component } from 'react';
import Habit from './habit';
class Habits extends Component {
  render() {
    return (
      <ul className='habits'>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrease={this.props.onIncrease}
            onDecrease={this.props.onDecrease}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
