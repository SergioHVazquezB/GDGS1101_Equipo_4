import React from 'react';
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';

const Navbar = ({ auth, user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2a9d8f" }}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          Notas
        </Link>
        {
          user && (
            <button
              className='btn btn-link text-light text-decoration-none'
              onClick={() => signOut(auth)}
            >
              Cerrar sesión
            </button>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;
