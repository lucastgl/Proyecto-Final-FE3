import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { StateContext } from '../Context/StateContext';

export const ProtectedRoutes = () => {
  
  const { state } = useContext(StateContext)
  return state?.logged ? <Outlet/> : <Navigate to="/login"/>

};
