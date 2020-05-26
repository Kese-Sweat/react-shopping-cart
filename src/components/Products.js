import React, { useEffect } from "react"
import { useShoppingCart, useCart} from "../hooks/index"
import "../styles/App.css"



function Pictures () {
    const {getPictures, products} = useShoppingCart()
    console.log(useCart()) 
    const {addCart} = useCart()

    useEffect(() => {
        getPictures()
        
    },[])


    return(<div className="itemContainer">
        <div className="itemHeader">
            <span>Product(s) found</span>
            <select>
                <option value>Select</option>
                <option value="lowestprice">Lowest to highest</option>
                <option value="highestprice">Highest to lowest</option>
            </select>

        </div>
        
        {products.map(item =>{
            return <div onClick={() => addCart(item)} className="itemList">
                        <img className="itemPicture" src={item.img.normal}></img>
                        <li className="pictureTitle">{item.title}</li>
                        <li className="itemPrice">{item.currencyFormat}{item.price}</li>
                        <li className="itemInstallment"> or {item.installments}</li>
                        <button className="addBtn">Add to cart</button>
                    </div>
                   
        })}
        
    </div>





    )}

    export default Pictures