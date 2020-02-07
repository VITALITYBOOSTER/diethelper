import React from "react";
import { connect } from "react-redux";

function AddWaterDash(props) {
  return <div className="glass" onClick={props.onAddWater}></div>;
}

function mapDispatchToProps(dispatch) {
  return {
    onAddWater: () => dispatch({ type: "ADD_WATER", value: 0.24 })
  };
}

export default connect(null, mapDispatchToProps)(AddWaterDash);
