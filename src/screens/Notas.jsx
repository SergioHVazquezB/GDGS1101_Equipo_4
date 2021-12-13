import React, { useState } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import firebaseApp from '../firebase/credenciales';
import AddModal from '../components/AddModal';
import Nota from '../components/Nota';


const Notas = ({ auth, uid }) => {
  const [notas, setNotas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const db = getFirestore(firebaseApp);
  const docRef = collection(db, uid);
  onSnapshot(docRef, (doc) => {
    setNotas(doc.docs);
  })
  return (
    <div className="container mt-4">
      <AddModal show={showModal} setShow={setShowModal} db={db} uid={uid} />
      <div className="row">
        <div className="col-12">
          <button type="button" className='btn btn-success float-end' onClick={() => setShowModal(true)}>
            Añadir nota <i className="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
        {
          notas && notas.map((nota, index) => {
            return (<Nota nota={nota} key={index} index={index} db={db} />)
          })
        }
      </div>
    </div>
  )
}

export default Notas
