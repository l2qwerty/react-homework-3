import React, { useState } from 'react';
import Modal from './components/Modal';
import Results from './components/Results';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [data, setData] = useState([]);
  function updateData(value) {
    setData(value);
  }
  return (
    <>
      <div className='start-btn'>
        <button onClick={() => setModalActive(true)}>Start test</button>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        updateData={updateData}
      />
      <Results data={data} />
    </>
  );
}

export default App;
