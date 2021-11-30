import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  handlerAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  modifyCount = () => {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  };

  getStyleClasses = () => {
    let classes = 'badge badge-pill m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  };

  render() {
    return (
      <div>
        <span className={this.getStyleClasses()}>{this.modifyCount()}</span>
        <button onClick={this.handlerAdd} className='btn btn-info btn-lg'>
          add product{' '}
        </button>
      </div>
    );
  }
}

export default Counter;
