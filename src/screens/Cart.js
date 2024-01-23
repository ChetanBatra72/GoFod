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
    let totalPrice = data.reduce((total,food)=>total+food.price , 0) // finding total price of our order(iterating on price of each item)
  return (
    <div>
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table -responsive md'>
        <table className='table table-hover'>
        <thead className='text-sucess fs-4' style={{color:"rgb(36, 221, 159) "}}> 
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Option</th>
            <th scope='col'>Amount</th>
            <th scope='col'></th>
          </tr>
          </thead>
          <tbody>
         {data.map((food,index)=>{
                <tr >
            <th >{index+1}</th>
            <td >{food.name}</td>
            <td >{food.qty}</td>
            <td >{food.size}</td>
            <td >{food.price}</td>
            <td > <button type="button" className="btn p-0"><img src={trash} alt="Delete" onClick={()=>{dsipatch({type:"REMOVE",index:index}) }} /></button></td>
          </tr>
            })} 
          </tbody>
           </table>
            <div><h1 className='fs-2'>Total Price:{totalPrice}/- </h1></div>
            <div>
                <button className='btn bg-sucess mt-5 bgColor'></button>
            </div>
        </div>
    </div>
  )
}


