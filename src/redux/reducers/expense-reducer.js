
export default function dailyExpense (state = {}, action) {
        switch (action.type) {
            case "getExpenseOption": 
                console.log("vimal");
                console.log("jenifer");
                break; 
            default: 
                console.log("vimal")
                return state;
        }
    

    if (action && action.type === "@@redux-form/CHANGE") {
        console.log("vimal");
    }
    // Problem: this only does a shallow copy!
  let newState = { ...state }

  // ERROR: nestedState is still the same object!
//   newState.nestedState.nestedField = action.data;
  console.log("hello");

  return newState
};