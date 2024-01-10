import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
function Accounts() {
    const auth = useSelector((state) => state.auth.value);
    
    if(auth) {
      return( <Navigate to="/" />);
      console.log('authout',auth);
    }else{

      console.log('authout',Outlet);
      return <Outlet />
    }
    
  
}

export default Accounts
