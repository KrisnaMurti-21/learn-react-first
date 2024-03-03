// reducer

// const { createStore } = require("redux");
import { legacy_createStore } from "redux";

const cartReducer = ( state = {
    cart: [{
        id: 1,
        qty: 20
    }]
}, action
) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

            break;

        default:
            return state;
    }
}
//store
const store = legacy_createStore(cartReducer)
console.log("oncreate store : ",store.getState())


//Subscribe
store.subscribe(() => {
    console.log("store changed : ", store.getState())
})

//dispatch
const action1 = {
    type: "ADD_TO_CART",
    payload: {
        id: 2,
        qty: 10
    }
}

store.dispatch(action1)