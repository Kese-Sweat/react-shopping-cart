import React, { useEffect } from "react"
import { GiShoppingCart }  from "react-icons/gi"
import {  useCart, useShoppingCart} from "../hooks/index"




function Cart () {
    const { cart } = useCart()
    console.log(cart) /// cart is undefined
    

    
    

return(<div>
    <span className="shoppingCart" >< GiShoppingCart className="shoppingCartImg" size={50}/></span>

    {cart.map(item => {
        return<div>
                    <li>{item.title}</li>
                    <li>test</li>
                </div>
    })}


</div>

)}

export default Cart

