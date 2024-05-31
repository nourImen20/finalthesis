import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const walletAddress = localStorage.getItem("walletAddress");

  return walletAddress ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
