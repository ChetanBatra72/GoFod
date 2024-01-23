import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setcredentials] = useState({name:"" ,email:"" ,password:"" ,location:""})

    const handleSubmit = async(e)=>{

        e.preventDefault(); // tlo stop the default beaviour of form
        const response = await fetch("http://localhost:5000/api/createuser" , {
            method:'POST',
            headers:{
                'Content-Type':'application/json' //informs the server that the data is in JSON format
            },
            // preparing the request body 
            body:JSON.stringify({name:credentials.name  , email:credentials.email ,password:credentials.password,location:credentials.location})  
        });
        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter valid credentials")
        } 

 
    }
    const onchange  = (evt)=>{
        setcredentials({...credentials , [evt.target.name]:evt.target.value})
    }
  return (
    <>
    <div className='container'>

    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email}  onChange={onchange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onchange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="password" className="form-control" id="exampleInpulocation1" name='location' value={credentials.location} onChange={onchange}/>
  </div>
 
  <button type="submit" className="m-3 btn" style={{ backgroundColor: 'green', color: 'Black' }}>Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User !</Link>
</form>

</div>
    </>
  )
}
