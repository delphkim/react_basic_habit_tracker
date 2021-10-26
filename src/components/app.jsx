import './app.css';
import Habits from './habits';
import React, { Component } from 'react';
import Navbar from './navbar';

class App extends Component {
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
  handleReset = () => {
    const newHabits = this.state.habits.map((item) => ({ ...item, count: 0 }));
    this.setState((state) => ({
      habits: newHabits,
    }));
  };
  handleAdd = (text) => {
    const newHabits = [
      ...this.state.habits,
      { id: Math.random(), name: text, count: 0 },
    ];
    this.setState((state) => ({ habits: newHabits }));
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count !== 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
