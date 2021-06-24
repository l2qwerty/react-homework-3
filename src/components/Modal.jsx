import React from 'react';
import './modal.css';
import FormikContainer from './FormikContainer';

function Modal({ active, setActive, updateData }) {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <FormikContainer setActive={setActive} updateData={updateData} />
      </div>
    </div>
  );
}

export default Modal;
