import React, { useEffect } from "react"
import { GiShoppingCart }  from "react-icons/gi"
import {  useCart, useShoppingCart} from "../hooks/index"




function Cart () {
    const { cart, reduceCart, cartTotal } = useCart()
    console.log(cart)

    
    

return(<div className="cartContainer">
    <span className="shoppingCart" >< GiShoppingCart className="shoppingCartImg" size={50}/></span>

<div className="cartContent">
    {cart.map(item => {
        return (<div className="theCart">
            <div className="leftSideCart">
                    <div>
                        <img className="thumbImg" src={item.img.thumb}></img>
                    </div>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.style}</p>
                        <span></span>
                    </div>
            </div>
            <div className="rightSideCart">

               <div>
                   <p className="X" onClick={() => reduceCart(item.id)}>X</p>  
                   <p>{item.price}</p>
               </div>
               <div>
                   <button>-</button>
                   <button>+</button>
               </div>
            </div>
            </div>
        )
        
    })}
        <div>{cartTotal}</div>
        <div>Total Quantity: {cart.length}</div>
</div>
</div>

)}

export default Cart

// reduceCart function wasn't initially because i forgot to add ID to item
// focus on the functionality part of the assignment