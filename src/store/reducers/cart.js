import data from "../../pages/data.json"

const initialCart = {
    cartCount : 0,
    productPrice : data.products[0].rating.count,
}

const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case "inc":
            return {
                ...state,
                cartCount : state.cartCount + 1
            };
        case "dec":
            return {
                ...state,
                cartCount : state.cartCount - 1
        };
        case "reset":
            return initialCart;
    
        default:
            return state;
    }
}

export default cartReducer
