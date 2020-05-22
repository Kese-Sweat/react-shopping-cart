import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

//action definition
const GET_PRODUCTS = "products/GET_PRODUCTS"

//initial state
const initialState = {
    products: [],
    
}

//reducer
export default (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return {...state, products: action.payload}
            default:
                return state
    }
}

//action creators
function getProducts(){
    return dispatch =>{
        axios.get('/products').then(resp =>{
            dispatch({
            type: GET_PRODUCTS,
            payload: resp.data
        })
    })
    }
}

//custon hook

export function useShoppingCart (){
    const dispatch = useDispatch()
    const products = useSelector(appState => appState.pictureState.products)

    const getPictures = () => dispatch(getProducts())

    return { products, getPictures }
}


