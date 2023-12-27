import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export let OrderContext=createContext();

function OrderContextProvider({children}) {
    const[order,setOrder]=useState(null);
    const[loading,setLoading]=useState(true);

    const createOrderContext = async(order1)=>{
        try {
          const token=localStorage.getItem("userToken");
          console.log(token)
          const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`,order1,
          {headers:{Authorization:`Tariq__${token}`}});
         
          return data
        } catch (error) {
          console.log(error)
        }
      }
      const getOrderContext = async()=>{
        try {
          const token=localStorage.getItem("userToken");
          console.log(token)
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`,
          {headers:{Authorization:`Tariq__${token}`}});
          console.log("getOrderContext",data)
          setOrder(data.orders)
          setLoading(false)
          console.log("getOrderContext",order)
          return data
        } catch (error) {
          console.log(error)
        }
      }
      
    return <OrderContext.Provider value={{order,setOrder,createOrderContext,getOrderContext,loading}} >
      {children}</OrderContext.Provider> 
}

export default OrderContextProvider