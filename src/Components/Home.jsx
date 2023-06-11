import React,{useState} from 'react'
import "./Home.css"
import {useSelector,useDispatch} from "react-redux"
import { addingToFav,addingToCart } from '../Store/reducer'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart} from 'react-icons/fa'
import { MdFavorite} from 'react-icons/md'
import {FaIceCream} from 'react-icons/fa'

const Home = () => {
  const selector= useSelector((state)=>state.user.cart)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [state,setState]=useState(false)
  const handleFav=(ele)=>{
    navigate("/favorite")
    dispatch(addingToFav(ele))
  }

  const handleCart=(ele)=>{
    navigate("/cart")
    dispatch(addingToCart(ele))
  }


  
  return state ? (
    <div className='outerBox'>
      {
      selector.map((ele,i)=>{
        return <div className='innerBox' >
          
            <h3 className='heading'>{ele.name}</h3>
            <img className='image'  src={ele.image}/>
            <h3 className='price'>Price: Rs  {ele.price}</h3>
          
            <button style={{width:"150px",marginTop:"20px"}} onClick={()=>handleFav(ele)}  className="btn btn-primary">Add to favourites <MdFavorite/></button>
          
            <button style={{width:"150px",marginLeft:"30px",marginTop:"20px"}} onClick={()=>handleCart(ele)}  className="btn btn-warning"> Add to Cart   <FaShoppingCart/> </button> 
        </div>
      })
      }
    
    </div>
  ):(<>
    <div className='ice'>
      <h1 className='iceTitle'>Welcome to the Creamy World</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4ye39r-obS4WTeQa3POHevx_mtXJD5zmVA&usqp=CAU"/>
      <button onClick={()=>setState(true)} style={{width:"160px",fontSize:"18px",textAlign:'center',alignItem:"center"}} className="btn btn-info">Ice World <FaIceCream/></button>
    </div>
  </>)
}

export default Home