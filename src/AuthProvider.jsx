import React, { createContext, useState } from 'react';

const Provider = ({ children }) => {
  const [context, setContext] = useState({
    isAuthenticated: false,
    user: {},
  });
  return (
    <AuthContext.Provider value={[context, setContext]}>
      {children}
    </AuthContext.Provider>
  )
};

export default Provider;
export const AuthContext = createContext();