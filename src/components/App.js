import React from "react"
import "../styles/App.css"
import Pictures from "./Products"
import Cart from "./Cart"

export default props => {
  return (
    <div>
      <Cart/>
      <Pictures/>
    </div>
  )
}
