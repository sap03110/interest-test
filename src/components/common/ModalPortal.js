import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
  const portal = createPortal(children, document.getElementById('modal-root'));
  return portal;
};

export default ModalPortal;
