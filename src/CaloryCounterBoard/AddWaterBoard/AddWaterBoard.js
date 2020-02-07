import React from "react";
import {connect} from 'react-redux'
import AddWaterDash from "./AddWaterDash/AddWaterDash";

function AddWaterBoard(props){
    return (
      <div className='add-water-board'>
        <h2>{props.liters.toFixed(1)} L</h2>
        {props.glasses.map((n, index) => {return <AddWaterDash key={index}/>})}
      </div>
    );
}

function mapStateToProps(state) {
  return {
    liters: state.litersOfConsumedWater,
    glasses : state.arrayOfglases
  }
}

export default connect(mapStateToProps)(AddWaterBoard);
