import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function ProtectRoute({children}) {
    let navigate=useNavigate();
    if(localStorage.getItem("userToken")== null){
        return <Navigate to='/login'/>
    }
  return  children
}

export default ProtectRoute