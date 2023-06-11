import React from 'react'
import "./CartItems.css"
import {useSelector,useDispatch} from "react-redux"
import { addingToCart, incrementCart, decrementCart,addToCash } from '../Store/reducer'
import { useNavigate } from 'react-router-dom'
const CartItems = () => {
   const selector=useSelector((state)=>state.user.item)
  const dispatch=useDispatch()
    const navigate=useNavigate()
  
  const handleAdd=(ele)=>{
    dispatch(incrementCart(ele))
  }

  const handleBuy=(ele)=>{
    navigate("/price")
    dispatch(addToCash(ele))
  }
  
  
  const handleDelete=(ele)=>{
    dispatch(decrementCart(ele))
  }
  return (
    <div className='container'>
      
      {
      selector.map((ele,i)=>{
        return <div className='innerBox1' >
          
            <h3 className='heading1'>{ele.name}</h3>
            <img className='image1' src={ele.image}/>
            <h3 className='amount'>Price: Rs  {ele.price}</h3>
           <span style={{color:"seagreen",marginTop:"10px"}}>  <button style={{marginRigth:"5px"}} className="btn btn-primary"  onClick={()=>handleAdd(ele.name)}>+</button>
          <span> {ele.quantity}</span>  <button className="btn btn-primary" 
       onClick={()=>handleDelete(ele.name)}>-</button></span>
          <div><button style={{marginRigth:"5px",marginTop:"15px",width:"150px"}} className="btn btn-info"  onClick={()=>handleBuy(ele)}> Buy</button></div>
        </div>
      })
      }
      
    </div>
  )
}

export default CartItems