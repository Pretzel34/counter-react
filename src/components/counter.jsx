import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this.state.count);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul className="li">
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + product });
    console.log("Increment CLicked", this.state.count);
  };

  render() {
    let classes = this.getBadgeNames();

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div>
          {this.state.tags.length === 0 && "Please create new tag!"}
          {this.renderTags()}
        </div>
      </div>
    );
  }
  getBadgeNames() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
