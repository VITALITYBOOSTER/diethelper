import React from "react";
import { connect } from "react-redux";
import AddWaterDash from "./AddWaterDash/AddWaterDash";

function AddWaterBoard(props) {
  return (
    <div className="add-water-board">
      <div className='water-container'>
        <div>{props.liters.toFixed(1)} L</div>
        <div> Water</div>
      </div>
      <div className='glasses-row'>
        {props.glasses.map((n, index) => {
          return <AddWaterDash key={index} />;
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    liters: state.litersOfConsumedWater,
    glasses: state.arrayOfglases
  };
}

export default connect(mapStateToProps)(AddWaterBoard);
