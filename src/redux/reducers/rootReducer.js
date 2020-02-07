import { stat } from "fs";

const initialState = {
  namesOfCaloryCounters: {
    firstCounterName: "eaten",
    secondCounterName: "kkal left",
    thirdCounterName: "burned"
  },
  amountOfcalories: 0,
  eatenCalories: 1470,
  burnedCalories: 0,
  litersOfConsumedWater: 0,
  arrayOfglases: Array(5).fill("g"),
  namesOfAddMenu: {
    addBreakfest: "Breakfest",
    addLunch: "Lunch",
    addDinner: "Dinner",
    addSnack: "Snack",
    addExercise : "Exersice"
  },
  arrayOfBreakfestDishes: Array(5).fill("b"),
  namesOfAddMenus: {
    breakfest: "Breakfest",
    lunch: "Lunch",
    dinnet: "Dinner",
    snack: "Snack"
  },
  colorOfBottle : 'transparent',
  toggleSucsessBlock : false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_WATER":
      return {
        ...state,
        litersOfConsumedWater: state.litersOfConsumedWater + action.value,
        colorOfBottle : action.color
      };
    case "ADD_SNACK":
      return {
        ...state,
        eatenCalories: state.eatenCalories - action.value,
        amountOfcalories: state.amountOfcalories + action.value
      };
    case "ADD_EXERSICE" :
      return {
        ...state,
        burnedCalories : state.burnedCalories + action.value
      }
      case 'ADD_BREAKFAST_CALORIES' :
        return {
          ...state, 
          amountOfcalories : state.amountOfcalories + action.value, 
          eatenCalories: state.eatenCalories - action.value,
          toggleSucsessBlock : action.toggleS
        }
    default:
      return state;
  }
}
