import React from 'react'
import {useNavigate} from "react-router-dom"
import { FaShoppingCart} from 'react-icons/fa'
import { MdFavorite} from 'react-icons/md'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div style={{ display:"flex",height:'6%',justifyContent:"space-evenly",background:'#2874f0',color:"white",width:"100%",flexWrap:"wrap",alignContent:"center"}}>
      <h3 onClick={()=>navigate("/")}>HOME</h3>
      <h3 onClick={()=>navigate("/favorite")}>FAVOURITE <MdFavorite/></h3>
      <h3 onClick={()=>navigate("/cart")}>CART  <FaShoppingCart/></h3>
      <h3 onClick={()=>navigate("/price")}>CHECKOUT</h3>
    </div>
  )
}

export default Navbar