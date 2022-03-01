import { reducer } from "../utils/reducers";
// import our actions
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";

// Create a sample of what our global state will look like
const initialState = {
  products: [],
  categories: [{ name: "Food" }],
  currentCategory: "1",
};

// testing a reducer function
// takes 2 params: current state of the object (so we can make a copy)
// 2nd: the action we are going to perform on it, which is broken into 2 parts
// type: kind of action we are performing
// value: name representative of the new data we want to use with the action
test("UPDATE_PRODUCTS", () => {
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}],
  });

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});
