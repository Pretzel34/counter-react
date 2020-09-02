import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: [],
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this.state.count);
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0);
  //   return (
  //     <ul className="li">
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = (product) => {
  //   this.setState({ value: this.state.value + product });
  //   console.log("Increment CLicked", this.state.value);
  // };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeNames()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
      </div>
    );
  }
  getBadgeNames() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
