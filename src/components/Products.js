import React, { useEffect } from "react"
import { useShoppingCart} from "../hooks/index"



function Pictures () {
    const {getPictures, products} = useShoppingCart()

    useEffect(() => {
        getPictures ()
    },[])


    return(<div>

    </div>




    )}

    export default Pictures