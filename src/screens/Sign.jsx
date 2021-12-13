import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ auth }) => {
  const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const toggleForm = () => {
    setLogin(!login);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const registrarUsuario = async () => {
    const infoUsuario = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then(usuario => {
      return usuario;
    })
    console.log(infoUsuario);
  };
  const submitHandler = (e) => {
    console.log("submit");
    e.preventDefault();
    if (login) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
    } else {
      if (formData.email && formData.password && formData.repeatPassword) {
        registrarUsuario();
      }
    }
  }
  return (
    <div className="container mt-4" style={{ height: '80vh' }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card bg-card-local rounded-3 shadow-sm">
            <form onSubmit={submitHandler}>
              <div className="card-body">
                <h4 className='text-center'>
                  {login ? 'Iniciar Sesión' : 'Registrarse'}
                </h4>
                <hr />
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input
                    type="email"
                    name="email"
                    className='form-control'
                    placeholder='email@example.com'
                    onChange={handleChange}
                    value={formData.email}
                    autoFocus
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    name="password"
                    id='password'
                    className='form-control'
                    onChange={handleChange}
                    value={formData.password}
                    placeholder='*********'
                  />
                </div>
                {
                  !login && (

                    <div className="form-group mt-4">
                      <label htmlFor="repeat-password">Repetir contraseña:</label>
                      <input
                        type="password"
                        id='repeat-password'
                        name="repeatPassword"
                        className='form-control'
                        placeholder='*********'
                        value={formData.repeatPassword}
                        onChange={handleChange}
                      />
                    </div>
                  )
                }
                <div className="mt-2 d-flex justify-content-between w-100">
                  <button
                    className="btn btn-link text-light text-decoration-none"
                    type='button'
                    onClick={() => toggleForm()}
                  >
                    {login ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                  </button>
                  <button className="btn btn-success bg-success" type='submit'>Acceder</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
