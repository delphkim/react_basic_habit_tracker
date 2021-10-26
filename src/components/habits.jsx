import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
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

        <button className='button-reset' onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
