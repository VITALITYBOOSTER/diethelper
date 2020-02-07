import React from "react";

function CaloryCounter(props) {
  return (
    <div className="counter">
      <div>{props.counter}</div>
      <div>{props.name}</div>
    </div>
  );
}

export default CaloryCounter;
