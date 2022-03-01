import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

import { useReducer }   from 'react';

// pass the state and the action.type
//
export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of 'UPDATE_PRODUCTS', return a new \
    // state object with an updated products array

    case UPDATE_PRODUCTS:
      // if it's that action type return a new copy of the state argument
      // using the ...state
      return {
        ...state,
        // then set action.products value spread across it
        products: [...action.products],
      };

    // action type = UPDATE_CATEGORIES
    case UPDATE_CATEGORIES:
      // return a new state with an updated categories array
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // if it's none of these actions, do not update the state at all and keep things
    // the same
    default:
      return state;
  }
};

// initialize our global state object and gives functionality
// for updated that state using reducer function
export function useProductReducer(initialState) {
    // useReducer is a hook for managing big levels of state
    return useReducer(reducer, initialState);
}