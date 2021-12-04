import React, { Component } from 'react';
import Counter from './Counter';
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className='btn  btn-outline-primary btn-lg m-2'
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            counters={counter}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
