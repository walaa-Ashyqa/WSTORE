import React, { createContext, useState } from 'react'
import axios from "axios"

export let UserContext=createContext( )
export default function UserContextProvider({children}) {
    const[userToken,setUserToken]=useState(null);


  return <UserContext.Provider value={{userToken,setUserToken}} >
    {children}</UserContext.Provider> 
  
}