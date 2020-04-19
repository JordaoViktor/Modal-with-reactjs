import React, { useState } from 'react';
import './style.scss'
import Modal from './components/Modal';



function App() {
 const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <div>
      <button onClick={()=>setIsModalVisible(true)}>Open</button>
      {isModalVisible ?(
      <Modal onClose={()=> setIsModalVisible(false)}>
        <h2>Modal do App</h2>
      </Modal>
      ) : null}
    </div>
  );
};


export default App;
