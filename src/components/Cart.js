import React, { useEffect } from "react"
import { GiShoppingCart }  from "react-icons/gi"
import {  useCart } from "../hooks/index"



function Cart (){
    const { cart } = useCart()

    
    

return(<div >
    <span className="shoppingCart" >< GiShoppingCart className="shoppingCartImg" size={50}/></span>
    
        <span>{cart}</span>
    


</div>

)}

export default Cart