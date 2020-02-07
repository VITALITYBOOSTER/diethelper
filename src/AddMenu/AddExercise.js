import React, { useState } from "react";
import AddToMenuExersice from "./AddToMenuExersice";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Transition } from "react-transition-group";

function AddExersice(props) {
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
        <button className="back-button">back </button>
      </NavLink>
      <h2>{props.name}</h2>
      <div>
        {props.amountOfBreakFestDishes.map((el, i) => {
          return (
            <AddToMenuExersice
              state={toggle}
              change={change}
              name="Exercises"
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name: state.namesOfAddMenu.addExercise,
    amountOfBreakFestDishes: state.arrayOfBreakfestDishes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddExersice: () => dispatch({ type: "ADD_EXERSICE", value: 118 })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExersice);
