import React from 'react';
import { doc, deleteDoc } from "firebase/firestore";

const Nota = ({ nota, index, db }) => {
  return (
    <div className="col" key={index}>
      <div className="card card-dark bg-card-local">
        <div className="card-body">
          <h5 className="card-title">{nota.data().titulo}</h5>
          <span style={{ fontSize: '12px', color: '#fafafa', float: 'right', marginTop: '-25px' }}>{nota.data().fecha}</span>
          <hr />
          <p className="card-text">{nota.data().descripcion}</p>
          <button className='btn btn-error bg-error text-light float-end'>
            Finalizar <i className="fas fa-minus-circle"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nota

