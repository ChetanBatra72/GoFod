import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import  Badge  from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';

export default function Navabar() {
  const[cartView , setcartView] = useState(true)
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken") // if some one logout remove its AuthToken from storage
    navigate("/login")
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-sucess bgColor">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5  " aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
          <Link className="nav-link active fs-5  " aria-current="page" to="/">My Orders</Link>
        </li> :"" }
      </ul>

      { (!localStorage.getItem("authToken"))?  
      <div className='d-flex '>           
        <Link className="btn bg-white text-sucess mx-1" to="/login">Login</Link>
            <Link className="btn bg-white text-sucess mx-1" to="/createuser">SignUp</Link>
            </div>
      :
      <div> 
      <div className='btn bg-white text-sucess mx-1' onClick={()=>{setcartView(true)}} style={{color:"rgb(36, 221, 159) "}}>
      MyCart{" "}  
      <Badge pill bg="danger" > 2</Badge> 
      </div>
      {cartView?<Modal onclose={()=>setcartView(false)}> <Cart/> </Modal>:null}
      <div className='btn bg-white text-danger mx-1' onClick={handleLogout}>
      LogOut
      </div>
      </div>
      }
        
    </div>
  </div>
</nav>
    </div>
  )
}
