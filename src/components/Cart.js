import React, { useEffect } from "react"
import { GiShoppingCart }  from "react-icons/gi"
import {  useCart, useShoppingCart} from "../hooks/index"




function Cart () {
    const { cart } = useCart()
    console.log(cart) /// cart is undefined
    

    
    

return(<div className="cartContainer">
    <span className="shoppingCart" >< GiShoppingCart className="shoppingCartImg" size={50}/></span>
<div className="cartContent">
    {cart.map(item => {
        return<div className="leftSideCart">
                 <div>
                     <img className="thumbImg" src={item.img.thumb}></img>
                    </div>
                    <div>
                        <li>{item.title}</li>
                     <li>{item.style}</li>
                        <span>Quantity</span>
                    </div>
                </div>
    })}

    {cart.map(item => {
        return<div className="rightSideCart">
                        <p>X</p>
                        <p>{item.price}</p>
                    <div>
                        <button>-</button>
                        <button>+</button>
                    </div>

                </div>
    })}
</div>


</div>

)}

export default Cart

