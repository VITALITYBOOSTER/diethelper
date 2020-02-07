import React from "react";
import CaloryCounter from "./CaloriesCounter/CaloryCounter";
import {connect} from 'react-redux'

function CaloryCounterBoard(props){
    return (
      <div className="calory-counnter-board">
        <CaloryCounter
          name={props.names.firstCounterName}
          counter={props.firstCount}
        />
        <CaloryCounter
          name={props.names.secondCounterName}
          counter={props.secondCount}
        />
        <CaloryCounter
          name={props.names.thirdCounterName}
          counter={props.thirdCount}
        />
      </div>
    );
}

function mapStateToProps(state) {
  return {
    names : state.namesOfCaloryCounters,
    firstCount : state.amountOfcalories,
    secondCount : state.eatenCalories,
    thirdCount : state.burnedCalories
  }
}

export default connect(mapStateToProps)(CaloryCounterBoard);
