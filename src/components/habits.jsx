import React, { Component } from 'react';
import Habit from './habit';
class Habits extends Component {
  state = {
    habits: [
      {
        id: Math.random(),
        name: 'reading',
        count: 0,
      },
      {
        id: Math.random(),
        name: 'coding',
        count: 0,
      },
      {
        id: Math.random(),
        name: 'running',
        count: 0,
      },
    ],
  };
  handleIncrease = (habit) => {
    const newHabits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });

    this.setState((state) => {
      return { habits: newHabits };
    });
  };
  handleDecrease = (habit) => {
    const newHabits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
    this.setState((state) => {
      return { habits: newHabits };
    });
  };
  handleDelete = (habit) => {
    const newHabits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState((state) => ({ habits: newHabits }));
  };

  render() {
    return (
      <ul className='habits'>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
