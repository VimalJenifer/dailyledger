
export default function dailyExpense (state = {}, action) {
        switch (action.type) {
            case "getExpenseOption": 
                console.log("vimal");
                console.log("jenifer");
                _.set(state, "data.hello", "hello");
                break; 
            default: 
                return state;
        }
    // Problem: this only does a shallow copy!
  let newState = { ...state }

  // ERROR: nestedState is still the same object!
//   newState.nestedState.nestedField = action.data;
  console.log("hello");

  return newState
};