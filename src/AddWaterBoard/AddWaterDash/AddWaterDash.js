import React from "react";
import { connect } from "react-redux";

function AddWaterDash(props) {
  return (
    <div className="outer-div-class" onClick={props.onAddWater}>
      <img
        alt="dsad"
        className="glass"
        style={{ backgroundColor: props.color }}
        src="http://getdrawings.com/vectors/glass-of-water-vector-19.png"
      />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onAddWater: () =>
      dispatch({ type: "ADD_WATER", value: 0.33, color: "#59BCFB" })
  };
}

function mapStateToProps(state) {
  return {
    color: state.colorOfBottle
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWaterDash);
