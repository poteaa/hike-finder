import './Modal.css'

  const Modal = ({ children, closeModal }) => {

  return (
    <div className='modal'>
      {children}
    </div>
  );
}

export default Modal;