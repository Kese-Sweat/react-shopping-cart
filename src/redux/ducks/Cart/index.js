import { useSelector, useDispatch } from "react-redux"


//action definition
const TO_CART= "cart/TO_CART"
const DELETE_ITEM= "delete/DELETE_ITEM"

//initial state
const initialState = {
    cart: [],
    
}

//reducer
export default (state = initialState, action) => {
    switch (action.type){
        case TO_CART:
            return {...state, cart: [...state.cart, action.payload]}
        case DELETE_ITEM:
            const updateCart = state.cart.filter(item => item.id !==action.payload)
            return {...state, cart: [...state.cart, updateCart]}
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
        type: TO_CART,
        payload: item
    }
}


//custom hook

export function useCart () {
    const dispatch = useDispatch()
    const cart = useSelector(appState => appState.cartState.cart)

    const addCart = (item) => dispatch(addToCart(item))
    const reduceCart = (item) => dispatch(removeFromCart(item))
    

    return { cart, addCart, reduceCart }
}


