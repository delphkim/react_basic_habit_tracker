import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <i className='fas fa-clipboard-list navbar-icon'></i>
        <span className='navbar-title'>Habit Tracker</span>
        <span className='navbar-totalCount'>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
