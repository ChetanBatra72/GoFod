import React, { createContext,  useContext,  useReducer } from 'react'
const CardStateContext = createContext();
const CardDispatchContext =createContext(); 

const reducer = (state ,action)=>{
switch(action.type){
    case "ADD":
        return [...state,{id:action.id , name:action.name , price:action.price , qty:action.qty , size:action.size,img:action.img}]
        default:
            console.log("Error in reducer");
}
}

export const CardProvider = ({children})=>{
    const[state , dsipatch] = useReducer(reducer , [] )
    return (
     <CardDispatchContext.Provider value={dsipatch}>
        <CardStateContext.Provider value={state} >
            {children}
        </CardStateContext.Provider>
     </CardDispatchContext.Provider>
    )
}
export const useCart = ()=> useContext(CardStateContext); // Cart C should be capital in useCart
export const useDispatchCard = ()=>useContext(CardDispatchContext);
