import { useState } from 'react';

import './Modal.css'

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal" id="generic-modal">
        <button onClick={closeModal}>Close Modal</button>
      {children}
    </div>
  );
}

export default Modal;