import React, { Component } from "react";
import AddCaloryDash from "./AddCaloryDash/AddCaloryDash";

export default class AddCaloryBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: Array(5).fill(""),
      names: [
        "Add breakfest",
        "Add lunch",
        "Add dinner",
        "Add snack",
        "Add exercise"
      ]
    };
  }

  render() {
    return (
      <div className="add-caloury-board">
        {this.state.array.map((el, i) => {
          return (
            <AddCaloryDash
              key={i}
              path={this.state.names[i].split(" ")[1]}
              name={this.state.names[i]}
            />
          );
        })}
      </div>
    );
  }
}
