import React, { useEffect } from "react"
import { useShoppingCart} from "../hooks/index"
import "../styles/App.css"



function Pictures () {
    const {getPictures, products} = useShoppingCart()

    useEffect(() => {
        getPictures ()
    },[])


    return(<div className="itemContainer">
        {products.map(item =>{
            return <div className="itemList">
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