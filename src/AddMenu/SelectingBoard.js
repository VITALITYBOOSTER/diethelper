import React, { useState } from "react";
import PlaneMenu from "./PlaneMenu/PlaneMenu";
import { connect } from "react-redux";
import { Transition } from "react-transition-group";
import { NavLink } from "react-router-dom";

function SelectingBoard(props) {
  const [toggle, changeToggle] = useState(false);
  function change(state) {
    changeToggle(!state);
  }
  return (
    <div>
      <Transition
        in={toggle}
        timeout={3000}
        mountOnEnter
        unmountOnExit
        onEnter={changeToggle.bind(this, !toggle)}
      >
        {state => (
          <div className={`square green ${state}`}>{props.name + " added"}</div>
        )}
      </Transition>
      <NavLink to="/">
        {" "}
        <button className="back-button">back</button>
      </NavLink>
      <div className="breakfast-board">
        <div>{props.name}</div>
        <div className='plane-menus-board'>
          {props.amountOfBreakFestDishes.map((el, i) => {
            return (
              <PlaneMenu
                state={toggle}
                change={change}
                headerText={props.headerText}
                numberOfCalories={props.numberOfCalories}
                numberOfGrams={props.numberOfGrams}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    amountOfBreakFestDishes: state.arrayOfBreakfestDishes
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectingBoard);
