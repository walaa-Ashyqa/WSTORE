import React, { createContext, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';

export const CartContext=createContext(null)

 export default function CartContextProvider({children}) {
    const addToCartContext = async(productId)=>{
      try {
        const token=localStorage.getItem("userToken");
        console.log(token)
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
        {productId},
        {headers:{Authorization:`Tariq__${token}`}});
        if(data.massage=='success'){
          toast.success('Product add succesfully.', {
            position: "top-left",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
        return data
      } catch (error) {
        console.log(error)
      }
    }  
    const Increaseqty  = async(productId) =>{
      try {
        const token=localStorage.getItem("userToken");
        const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/incraseQuantity`,
        {productId},
        {headers:{Authorization:`Tariq__${token}`}});
        
        return data
      } catch (error) {
        console.log(error)
      }
    }
    const Decreaseqty  = async(productId) =>{
      try {
        const token=localStorage.getItem("userToken");
        const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/decraseQuantity`,
        {productId},
        {headers:{Authorization:`Tariq__${token}`}});
        
        return data
      } catch (error) {
        console.log(error)
      }
    }
    const getCartContext = async() =>{
      try {
        const token=localStorage.getItem("userToken");
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
        {headers:{Authorization:`Tariq__${token}`}});
        
        return data
      } catch (error) {
        console.log(error)
      }
    }
    const removeCartItem = async(productId) =>{
      try {
        const token=localStorage.getItem("userToken");
        const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,{productId},
        {headers:{Authorization:`Tariq__${token}`}});
        
        return data
      } catch (error) {
        console.log(error)
      }
    }
    const clearCart = async() =>{
      try {
        const token=localStorage.getItem("userToken");
        const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`,
        {headers:{Authorization:`Tariq__${token}`}});
        
        return data
      } catch (error) {
        console.log(error)
      }
    }
  return <CartContext.Provider value={{addToCartContext,getCartContext,removeCartItem,clearCart,Increaseqty,Decreaseqty}}
  >
    {children}</CartContext.Provider> 
  
}

