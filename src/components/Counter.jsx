import React, { Component } from 'react';

class Counter extends Component {
  formatCount() {
    const { value } = this.props;
    return value === 0 ? 'Zero' : value;
  }

  modifyColorBadge() {
    let classes = 'badge  badge-sm ml-2 badge-';
    classes += this.props.counters.value === 0 ? 'warning' : 'info';
    return classes;
  }
  render() {
    return (
      <div className='row'>
        <div className='col-1'>
          <span className={this.modifyColorBadge()}>{this.formatCount()}</span>
        </div>

        <div className='col'>
          <button
            onClick={() => this.props.onIncrement(this.props.counters)}
            className='btn btn-secondary btn-sm m-2 '
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counters)}
            className='btn btn-secondary btn-sm m-2'
            disabled={this.props.counters.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counters)}
            className='btn btn-danger btn-sm m-2'
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
