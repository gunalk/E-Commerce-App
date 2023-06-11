import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Favorite from './Components/Favorite'
import CartItems from './Components/CartItems'
import TotalPrice from './Components/TotalPrice'
import Navbar from './Components/NavBar'

export default function App() {
  return (
    
     <div>
       <BrowserRouter>
         <Navbar/>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/favorite" element={<Favorite/>}/>
           <Route path="/cart" element={<CartItems/>}/>
           <Route path="/price" element={<TotalPrice/>}/>
         </Routes>
       </BrowserRouter>
     </div>
  
  )
}
