import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

//action definition
const TO_CART= "cart/TO_CART"

//initial state
const initialState = {
    cart: [],
    
}

//reducer
export default (state = initialState, action) => {
    switch (action.type){
        case TO_CART:
            return {...state, cart: [...state.cart, action.payload]}
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


//custom hook

export function useCart (){
    const dispatch = useDispatch()
    const cart = useSelector(appState => appState.cartState.cart)

    const addCart = (item) => dispatch(addToCart(item))
    

    return { cart, addCart }
}


