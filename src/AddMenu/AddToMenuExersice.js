import React from "react";
import { connect } from "react-redux";

function AddToMenuExersice(props) {
  return (
    <div className="plane-menu" onClick={() => props.change(props.state)}>
      <div>
        <div>{"Jumps"}</div>
        <div>{118 + ` cals - 1 whole (${125})`}</div>
      </div>

      <img
        className="button-adding-element"
        src="http://www.lichtspiele-olten.ch/style/images/icons/lulu-plus.png"
        onClick={props.onAddExersice}
      ></img>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onAddExersice: () => dispatch({ type: "ADD_EXERSICE", value: 118 })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToMenuExersice);
