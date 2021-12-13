import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Notas from './screens/Notas';
import Sign from './screens/Sign';
import firebaseApp from './firebase/credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/Navbar';

const App = () => {
  const [user, setUser] = useState(false);
  const [loader, setLoader] = useState(true);
  const location = useLocation();
  const auth = getAuth(firebaseApp);
  const RequireAuth = ({ children }) => {
    if (!user) {
      return <Navigate to="/sign" state={{ from: location }} />
    }
    return children;
  };
  const IsAuth = ({ children }) => {
    if (user) {
      return <Navigate to="/" state={{ from: location }} />
    }
    return children;
  };
  onAuthStateChanged(auth, (usuario) => {
    if (usuario) {
      setUser(usuario);
    } else {
      setUser(null);
    }
  });
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, [])
  return loader ? (
    <div 
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}}>
      <div className="spinner-border text-light" role="status"> </div>
    </div>
  ) : (
    (
      <div>
        <Navbar auth={auth} user={user} />
        <Routes>
          <Route path="/sign" element={<IsAuth><Sign auth={auth} /></IsAuth>} />
          <Route path="/" element={<RequireAuth><Notas auth={auth} uid={user.uid} /></RequireAuth>} />
        </Routes>
      </div>
    )
  )
};

export default App;
