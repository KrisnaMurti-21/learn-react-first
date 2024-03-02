// reducer

const cartReducer = ( state = {
    cart: []
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
            break;
    }
}
//store

//Subscribe

//dispatch