import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
function PrivateRoutes() {
    const auth = useSelector((state) => state.auth.value);
    console.log('auth',auth);
 if(!auth) {
    return <Navigate to="accounts/login" />;
  }
  return <Outlet />
}

export default PrivateRoutes
