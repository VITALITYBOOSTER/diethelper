import React from "react";
import ControllMenu from "./ControllMenu/ControllMenu";
import SelectingBoard from "./AddMenu/SelectingBoard";
import AddExersice from "./AddMenu/AddExercise";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={ControllMenu}></Route>
      <Route path="/addbreakfest">
        {" "}
        <SelectingBoard
          name="Breakfast"
          headerText="Banana"
          numberOfCalories={243}
          numberOfGrams={214}
        />
      </Route>
      <Route path="/adddinner">
        <SelectingBoard
          name="Dinner"
          headerText="Borsh"
          numberOfCalories={312}
          numberOfGrams={23}
        />
      </Route>
      <Route path="/addlunch">
        <SelectingBoard
          name="Lunch"
          headerText="Varenik"
          numberOfCalories={111}
          numberOfGrams={222}
        />
      </Route>
      <Route path="/addsnack">
        <SelectingBoard
          name="Snack"
          headerText="Kolbasa"
          numberOfCalories={512}
          numberOfGrams={110}
        />
      </Route>
      <Route path="/addexercise" component={AddExersice}></Route>
    </div>
  );
}

export default App;
