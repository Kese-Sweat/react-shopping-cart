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
            return {...state, cart: action.payload}
            default:
                return state
    }
}

//action creators
function addToCart (props){
const id = props.match.params.id
axios.get('./products' + id).then(resp => {
    dispatch({
        type: TO_CART,
        payload: resp.data
    })
}, [props.match.params.id])
}


//custom hook

export function useCart (){
    const dispatch = useDispatch()
    const cart = useSelector(appState => appState.cartState.cart)

    const getCart = () => dispatch(addToCart())
    

    return { cart, getCart }
}


