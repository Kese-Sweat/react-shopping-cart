import { useSelector, useDispatch } from "react-redux"


//action definition
const TO_CART= "cart/TO_CART"
const DELETE_ITEM= "delete/DELETE_ITEM"
const TOTAL_PRICE= "total/TOTAL_PRICE"

//initial state
const initialState = {
    cart: [],
    
}

//reducer
export default (state = initialState, action) => {
    switch (action.type){
        case TO_CART:
            return {...state, cart: [...state.cart, action.payload]} // returning an updated state in an array
        case DELETE_ITEM:
            // setting updateCart to a filter so item will delete if id and action.payload does not match
            const updateCart = state.cart.filter(item => item.id !== action.payload) 
            return {...state, cart: updateCart}
                default:
                    return state
                
    }
}

//action creators
function addToCart (item) {
    return {

        type: TO_CART,
        payload: item
    }
}

function removeFromCart (item) {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}





//custom hook

export function useCart () {
    const dispatch = useDispatch()
    const cart = useSelector(appState => appState.cartState.cart)

    const addCart = (item) => dispatch(addToCart(item))
    const reduceCart = (item) => dispatch(removeFromCart(item))
    const cartTotal = cart.reduce((total, item) => total + item.price, 0)
    
    

    return { cart, addCart, reduceCart, cartTotal }
}


