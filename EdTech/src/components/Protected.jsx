import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import ShowContext from '../contextApi/Showcontext';
import { getCurrentUser } from '../../BackendAsService/Services';

const ProtectedRoute = ({ children }) => {
 const {userData,isLoading}=useContext(ShowContext)
 

  // if (!userData) {
  //   return <Navigate to="/signin" replace />;
  // }

  // return ;
  return(
    <>{
      !isLoading &&
      userData?children:<Navigate to="/signin" replace />
    }
    {
      !isLoading &&
      !userData?children:<Navigate to="/home/dashboard" replace />
    }
    </>
  )

};

export default ProtectedRoute;
