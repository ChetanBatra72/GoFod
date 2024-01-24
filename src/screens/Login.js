import React ,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
 

export default function Login() {
   let navigate  = useNavigate() // for redirecting it to somewhere
  const [credentials, setcredentials] = useState({email:"" ,password:"" })

  const handleSubmit = async(e)=>{

      e.preventDefault(); // tlo stop the default beaviour of form
      // sending a fetch request to the below end point
      const response = await fetch("http://localhost:5000/api/loginuser" , {
          method:'POST',
          headers:{
              'Content-Type':'application/json' //informs the server that the data is in JSON format
          },
          // preparing the request body 
          body:JSON.stringify({ email:credentials.email ,password:credentials.password})  
      });
      const json = await response.json()
      console.log(json);

      if(!json.success){
          alert("Enter valid credentials")
      }
      if(json.success){
        localStorage.setItem('userEmail' ,credentials.email);
        localStorage.setItem('authToken' , json.authToken);
        // console.log(localStorage.getItem('authToken'));
          navigate("/")

      }
       


  }
  const onchange  = (evt)=>{
      setcredentials({...credentials , [evt.target.name]:evt.target.value})
  }
  return <div>
    <div className='container'>

<form onSubmit={handleSubmit}>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email}  onChange={onchange}/>
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onchange} />
</div>

<button type="submit" className="m-3 btn" style={{ backgroundColor: 'green', color: 'Black' }}>Submit</button>
<Link to="/createuser" className='m-3 btn btn-danger'>I am a New User</Link>
</form>

</div>

  </div>;
}
