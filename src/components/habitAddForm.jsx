import React, { Component } from 'react';

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    const text = this.inputRef.current.value;
    this.props.onAdd(text);
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className='add' onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          type='text'
          className='add-input'
          placeholder='Habit'
        />
        <button className='button-add'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
