import React, { useEffect, useState } from 'react';
import { decodeToken } from './utils/auth/token';
import AppNavigation from './navigations/app_navigations';
import AuthNavigation from './navigations/auth_navigations';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('token');
      }
    }
  }, []);

  return (
    <>
      {isAuthenticated ? <AppNavigation /> : <AuthNavigation/> }
    </>
  );
}
