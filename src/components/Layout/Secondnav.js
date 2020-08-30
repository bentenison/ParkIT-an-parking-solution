import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/Globalstate'

export const Secondnav = () => {
    const{isLoggedIn}=useContext(GlobalContext)
    return (
        <div>
           <nav className="nav nav-pills flex-column flex-sm-row mt-3">
               
  <Link to="/" className="flex-sm-fill text-sm-center nav-link active" >Parking-Lots</Link>
  {isLoggedIn ? 
  <>
  <Link to="/book" className="flex-sm-fill text-sm-center nav-link bg-primary text-white" >BOOK A LOT</Link>
  <Link to="/unbook"className="flex-sm-fill text-sm-center nav-link bg-primary text-white" >UNBOOK</Link>
  <Link to="/pay"className="flex-sm-fill text-sm-center nav-link bg-primary text-white " >PAY</Link>
  </>: ""
               }
         </nav> 
        </div>
    )
}
