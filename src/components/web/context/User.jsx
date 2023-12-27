import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export let UserContext=createContext( )
export default function UserContextProvider({children}) {
    
  const[userToken,setUserToken]=useState(null);
  const[userData,setUserData]=useState(null);
  const[loading,setLoading]=useState(true);

  const getuser = async () => {
    const token=localStorage.getItem("userToken");
  setUserToken(userToken);
      if(userToken){
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile` ,
        {headers:{Authorization:`Tariq__${userToken}`}});
        console.log(data);
        setUserData(data.user);
        setLoading(false)
        return data
      }
     
  }
  useEffect(()=>{
    getuser();
  },[userToken])

  return <UserContext.Provider value={{userToken,setUserToken,userData,setUserData,loading}} >
    {children}</UserContext.Provider> 
  
}