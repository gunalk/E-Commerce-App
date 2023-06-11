import React from 'react'
import "./Favourite.css"
import {useSelector,useDispatch} from "react-redux"
import { removeFromFav } from '../Store/reducer'
import { MdDeleteForever} from 'react-icons/md'


const Favorite = () => {
  const selector=useSelector((state)=>state.user.favourite)
  const dispatch=useDispatch()
  const handleRemove=(i)=>{
    dispatch(removeFromFav(i))
  }
  return (
    <div className='favourite'>
       {
      selector.map((ele,i)=>{
        return <div className="box" >
          
            <h3 className="title">{ele.name}</h3>
            <img className='pic' src={ele.image}/>
            <h3 className='rupee'>Price: Rs  {ele.price}</h3>
            <button style={{width:"200px",fontSize:"16px",marginTop:"20px"}} className="btn btn-info" onClick={()=>handleRemove(i)} >Remove<span style={{marginLeft:"5px"}}></span> <MdDeleteForever/></button>
        </div>
      })
      }
    
  
    </div>
  )
}

export default Favorite