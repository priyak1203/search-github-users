import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { useGithubContext } from '../context/context';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  const { demoUser } = useGithubContext();
  if (demoUser) return children;

  return isUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
