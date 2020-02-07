import React from "react";
import { connect } from "react-redux";

function PlaneMenu(props) {
  return (
    <div className="plane-menu" onClick={() => props.change(props.state)}>
      <div>
        <div>{props.headerText}</div>
        <div>
          {props.numberOfCalories + ` cals - 1 whole (${props.numberOfGrams})`}
        </div>
      </div>

      <img
        className="button-adding-element"
        onClick={props.onAddCalories.bind(this, props.numberOfCalories)}
        src="http://www.lichtspiele-olten.ch/style/images/icons/lulu-plus.png"
      ></img>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onAddCalories: numberOfCalories => {
      dispatch({
        type: "ADD_BREAKFAST_CALORIES",
        value: numberOfCalories,
        toggleS: true
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaneMenu);
