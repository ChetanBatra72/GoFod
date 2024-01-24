import React from 'react'
import trash from  "../trash.png"
import { useCart, useDispatchCard } from '../components/ContextReducer'
export default function Cart() {
    let data = useCart();
    let dsipatch = useDispatchCard();
    if(data.length === 0){
      return (
        <div className="container m-auto mt-5 text-center">
          <h3 className="text-danger position-absolute top-50 start-50 translate-middle">
            Nothing in the Cart!
          </h3>
        </div>
      );
    }

    const handleCheckOut = async()=>{
      let userEmail= localStorage.getItem("userEmail");
      
      let response = await fetch("http://localhost:5000/api/orderData", {
        method:'POST',
        headers:{
            'Content-Type':'application/json' 
        }, 
        body:JSON.stringify({ order_data:data ,
           email:userEmail, 
           order_date:new Date().toDateString()
        })  
    } ); 
    // console.log("Order response" , response)
    if(response.status === 200){
      dsipatch({type:"DROP"})
    }


    }
    let totalPrice = data.reduce((total,food)=>total+food.price , 0) // finding total price of our order(iterating on price of each item)
  return (
    <div>
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive md' >
        <table className='table table-hover'>
        <thead className='text-sucess fs-5' style={{color:"rgb(36, 221, 159)" }}> 
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Option</th>
            <th scope='col'>Amount</th>
            <th scope='col'></th>
          </tr>
          </thead>
          <tbody  style={{color:"white" , fontSize:"10px"}}>
          {data.map((food, index) => (
  <tr  key={index}>
    <th>{index + 1}</th>
    <td>{food.name}</td>
    <td>{food.qty}</td>
    <td>{food.size}</td>
    <td>{food.price}</td>
    <td>
      <button
        type="button"
        className="btn p-0"
        onClick={() => {
          dsipatch({ type: "REMOVE", index: index });
        }}
      >
        <img src={trash} alt="Delete" />
      </button>
    </td>
  </tr>
))}

          </tbody>
           </table>
            <div><h1 className='fs-4' style={{color:"white"}}>Total Price:{totalPrice}/- </h1></div>
            <div>
                <button className='btn bg-sucess mt-5 bgColor' onClick={handleCheckOut}>Check Out</button>
            </div>
        </div>
    </div>
  )
}


