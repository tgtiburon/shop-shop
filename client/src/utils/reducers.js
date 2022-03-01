import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";



// pass the state and the action.type
// 
export const reducer = (state, action) => {
    switch (action.type)     {
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
        
        // if it's none of these actions, do not update the state at all and keep things
        // the same
        default: 
            return state;

    }
};