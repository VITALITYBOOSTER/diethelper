import React from 'react'
import CaloryCounterBoard from "../CaloryCounterBoard/CaloryCounterBoard";
import AddCaloryBoard from "../AddCaloryBoard/AddCaloryBoard";
import AddWaterBoard from "../AddWaterBoard/AddWaterBoard";

function ControllMenu() {
  return (
    <div>
      <CaloryCounterBoard></CaloryCounterBoard>
      <AddCaloryBoard></AddCaloryBoard>
      <AddWaterBoard></AddWaterBoard>
    </div>
  );
}

export default ControllMenu
