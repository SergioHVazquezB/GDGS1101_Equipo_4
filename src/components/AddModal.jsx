import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';

const AddModal = ({ show, setShow, db, uid }) => {
  const defaultState = {
    titulo: '',
    descripcion: '',
    fecha: ''
  }
  const [datos, setDatos] = useState(defaultState);
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, uid), datos);
    setDatos(defaultState);
    setShow(false);
  };
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: show ? '' : 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '350px',
            height: 'fit-content',
            backgroundColor: 'white',
            color: 'black',
            boxSizing: 'border-box',
            padding: '10px',
            borderRadius: '10px',
          }}
        >
          <h4 style={{textAlign: 'center'}}>Agregar nota</h4>
          <i 
            className="fas fa-times" 
            style={{float: 'right', marginTop: '-27px', cursor: 'pointer'}}
            onClick={() => setShow(false)}
          ></i>
          <hr />
          <form onSubmit={handleSubmit}>
            <input type="text" className='form-control' name='titulo' value={datos.titulo} onChange={handleChange} placeholder='Titulo' />
            <textarea className='form-control mt-2' rows={4} placeholder='Contenido' name='descripcion' value={datos.descripcion} onChange={handleChange}
            ></textarea>
            <input type="date" className='form-control mt-2' placeholder='fecha' name='fecha' value={datos.fecha} onChange={handleChange} />
            <button className='btn btn-success bg-success float-end mt-2'>Guardar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddModal
