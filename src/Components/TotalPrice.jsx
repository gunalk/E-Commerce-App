import React from 'react'
import './TotalPrice.css'
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { purchase } from '../Store/reducer'


const TotalPrice  = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cartList=useSelector((state)=>state.user.cash)
  const handlePurchase=()=>{
    alert("your items purchased")
    navigate("/")
    dispatch(purchase())
    
  }

  const Total=cartList.reduce((accumulator,current)=>{
        return(
            Number(accumulator)+Number(current.price)*Number(current.quantity)
        );
    },0)
  return (
    <div className='outerContainer'>
      <h1 style={{background:"lightcyan",color:"gray",marginTop:"50px",textAlign:"center"}}>ITEMS YOU PURCHASED:</h1>
      {
        cartList.map((ele,i)=>{
          return <div className='innerBox3'>
            <li  className="list-group-item">
              Name:{ele.name},<span style={{marginLeft:"10px"}} >    </span> quantity:{ele.quantity}, <span style={{marginLeft:"10px"}}  >    </span> Price Per Quantity:{ele.price},
            <span style={{marginLeft:"10px"}}> </span>  Totalprice:{ele.price *ele.quantity}
            </li>
           
          </div>
        })
      }
      
<h3 style={{background:"pink",marginTop:"3%",textAlign:"center",color:"gray"}}> TOTAL BILL: RS {Total}</h3>
      <button onClick={handlePurchase} style={{width:"150px",marginTop:"10px"}} className="btn btn-info">Pay the Bill </button>

        
      
      
     
    </div>
  )
}

export default  TotalPrice 