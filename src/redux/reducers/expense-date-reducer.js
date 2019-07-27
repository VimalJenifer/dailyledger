import _ from 'lodash';

export default function expenseDate (state, action) {    
    
    if (action && action.type === "@@INIT") {
        console.log("vimal-date");
    }
    console.log("action tye", action);
    // Problem: this only does a shallow copy!
  let newState = { ...state };

  return newState;
};